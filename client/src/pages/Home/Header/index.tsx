import * as S from "./styles"
import imageProfile from "../../../assets/images/profile-01.webp"
import TechnologiesPercentageChart from "./components/TechnologiesPercentageChart"

const Header = () => {
    return (
        <S.Header>
            <S.ImageBox>
                <img src={imageProfile} alt="imagem-de-perfil-1" />
            </S.ImageBox>
            <S.AboutMe>
                <h3>Sobre mim</h3>
                <h1>Augusto C. Westphal</h1>
                <p>
                    Sou <strong>Augusto Caetano Westphal</strong>, um jovem <strong>desenvolvedor full-stack</strong> e <strong>web designer</strong> com
                    mais de um ano e meio de experiência no campo. Possuo habilidades em <strong>desenvolvimento web</strong>, <strong>design de interface</strong> e
                    <strong> otimização de desempenho</strong>. Sou apaixonado por tecnologia e sempre busco me atualizar e aprender sobre as últimas tendências e ferramentas.
                    Trabalhando como freelancer, tive a oportunidade de colaborar com diferentes projetos, me permitindo desenvolver minhas habilidades
                    e conhecimentos ainda mais. Meu objetivo é estabelecer-me como desenvolvedor junior em uma empresa de tecnologia, onde possa crescer
                    profissionalmente e contribuir para projetos incríveis. Sou uma pessoa proativa, com boa capacidade de trabalhar em equipe e adaptabilidade
                    a diferentes projetos.
                </p>
                <nav>
                    <a
                        title="Acesse meu instagram"
                        target="_blank"
                        href="https://www.instagram.com/augusto_westphall/"
                    >Instagram <i className='bx bxl-instagram' ></i></a>
                    <a
                        title="Acesse meu facebook"
                        target="_blank"
                        href="https://www.facebook.com/augusto.westphal.9/"
                    >Facebook<i className='bx bxl-facebook' ></i></a>
                </nav>
            </S.AboutMe>
            <S.TextProjectsGit>
                <span><i className='bx bxl-github'></i></span>
                <h2>São mais de 20 projetos publicados no Github</h2>
            </S.TextProjectsGit>
            <S.PercentTechs>
                <div className="title">
                    <span><i className='bx bxs-doughnut-chart'></i></span>
                    <h2>Porcentagem das tecnologias usadas em meus projetos</h2>
                </div>
                <TechnologiesPercentageChart />
            </S.PercentTechs>

            <S.ContactMe id="contact">
                <h3>Vamos conversar?</h3>
                <h1>Contate-me</h1>
                <p>
                    <i>Olá futuro cliente ou empresa!</i><br />Sou um <strong>desenvolvedor full-stack</strong> experiente e pronto para transformar suas
                    ideias em realidade no <strong>mundo digital</strong>. Se você está buscando por alguém que possa ajudar a criar ou dar um upgrade no
                    seu site ou aplicativo, você acabou de encontrar. Não hesite em entrar em contato comigo, estou ansioso para discutir como posso
                    ajudar a sua empresa a alcançar novos patamares digitais com minhas habilidades e criatividade. Vamos juntos criar algo incrível!
                </p>
                <ul>
                    <li>
                        <a title="Contate-me pelo email" href="mailto:augustoc.westphal@gmail.com" target="_blank">
                            <span>Email</span>
                            <i className='bx bxs-envelope' ></i>
                        </a>
                    </li>
                    <li>
                        <a title="Contate-me pelo whatsapp" href="https://wa.me/5527997435139" target="_blank">
                            <span>Whatsapp</span>
                            <i className='bx bxl-whatsapp' ></i>
                        </a>
                    </li>
                    <li>
                        <a title="Contate-me pelo linkedin" href="https://www.linkedin.com/in/augusto-westphal-67b7b3230/" target="_blank">
                            <span>Linkedin</span>
                            <i className='bx bxl-linkedin-square' ></i>
                        </a>
                    </li>
                </ul>
            </S.ContactMe>
            <S.TextCopyRigth>© Augusto Caetano Westphal, 2023. <br />All Rights Reserved</S.TextCopyRigth>
        </S.Header>
    )
}

export default Header