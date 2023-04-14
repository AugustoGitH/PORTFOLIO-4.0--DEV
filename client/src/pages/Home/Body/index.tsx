import * as S from "./styles"
import imgProfile from "../../../assets/images/profile-02.png"
import TecnologiesInProjects from "./components/TecnologiesInProjects"
import PortfolioProjects from "./components/PortfolioProjects"

const Body = ()=>{
    return (
        <S.Body>
            <S.Main>
                <S.TechPresentation>
                    <h3>
                        DEVLOPER FULL-STACK
                        <i className='bx bxs-hot' ></i>
                    </h3>
                    <article>
                        <h2>Meu nome é</h2>
                        <h1>
                            Augusto
                            <span id="sobrenome-ocult"> C. Westphal</span>
                        </h1>
                    </article>
                    <div className="skills">
                        <p>Também sou</p>
                        <ul>
                            <li>Web <br/>Designer</li>
                            <li>Graphic <br/>Designer</li>
                        </ul>
                    </div>
                    <a href="#contact">
                        <i className='bx bxs-mouse-alt'></i>
                        Entre em contato
                    </a>
                </S.TechPresentation>
                <S.ProfileImage>
                    <div className="profile-content">
                        <img src={imgProfile} alt="imagem-de-perfil-2"/>
                    </div>
                </S.ProfileImage>
            </S.Main>
            <TecnologiesInProjects/>
            <PortfolioProjects/>
        </S.Body>
    )
}

export default Body