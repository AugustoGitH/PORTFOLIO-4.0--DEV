import { useEffect, useState } from "react"
import HeaderStyled from "./styles"
import { Link } from "react-router-dom"

// import requestVerifyUser from "../../services/apis/verifyUser"

type TPropsHeader = {
    painel?: Boolean,
    home?: Boolean
}

export default function Header({painel = false, home = true}: TPropsHeader){
    // const [admin, setAdmin] = useState(false)
    
    // useEffect(()=>{
    //     if(home){
    //         requestVerifyUser().then(permissed=>{
    //             setAdmin(permissed)
    //         })
    //     }
    // }, [])

    return (
        <HeaderStyled>
            <div className="content">
                <Link to="/"><h1>Augusto Westphal</h1></Link>
                {
                    painel ? (
                        <nav>
                            <button><i className='bx bxs-log-in-circle' ></i></button>
                            <Link to="/"><i className='bx bxs-home'></i></Link>
                        </nav>
                    ) : home && (
                        <nav>
                            { false && (<a href="/painel/admin"><i className='bx bxs-book-content'/></a>) }
                            <a target="_blank" href="https://github.com/AugustoGitH"><i className='bx bxl-github'/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/augusto-westphal-67b7b3230/"><i className='bx bxl-linkedin-square'/></a>
                        </nav>
                    )
                }
            </div>
        </HeaderStyled>
    )
}