import { useEffect, useState } from "react"
import HeaderStyled from "./styles"
import { Link } from "react-router-dom"
import useFetchVerifyCredential from "../../queries/verifyCredential"


type TPropsHeader = {
    painel?: Boolean,
    home?: Boolean
}

export default function Header({painel = false, home = true}: TPropsHeader){
    const { data: isAuthenticated } = useFetchVerifyCredential()
    return (
        <HeaderStyled>
            <div className="content">
                <Link to="/" title="Volte para a home"><h1>Augusto Westphal</h1></Link>
                {
                    painel ? (
                        <nav>
                            <button><i className='bx bxs-log-in-circle' ></i></button>
                            <Link title="Volte para a home do portfólio" to="/"><i className='bx bxs-home'></i></Link>
                        </nav>
                    ) : home && (
                        <nav>
                            { isAuthenticated && (<a href="/painel"><i className='bx bxs-book-content'/></a>) }
                            <a
                                className="button-curriculum" 
                                target="_blank" 
                                title="Faça download do meu CV"
                                href="https://drive.google.com/file/d/1Yy1TG9sqfjR6wcQiIJ4cA2ar_0ieCCpk/view?usp=sharing"
                            ><i className='bx bxs-receipt'/></a>
                            <a 
                                className="button-github" 
                                target="_blank" 
                                title="Acesse o meu GitHub"
                                href="https://github.com/AugustoGitH"
                            ><i className='bx bxl-github'/></a>
                            <a 
                                className="button-linkedin" 
                                target="_blank" 
                                title="Acesse o meu Linkedin"
                                href="https://www.linkedin.com/in/augusto-westphal-67b7b3230/"
                            ><i className='bx bxl-linkedin-square'/></a>
                        </nav>
                    )
                }
            </div>
        </HeaderStyled>
    )
}