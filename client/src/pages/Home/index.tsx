import * as S from "./styles"
import Body from "./Body"
import Header from "./Header"
import HeaderPage from "../../components/Header"

const Home = ()=> {
    return (
        <>
            <HeaderPage/>
            <S.Home>
                <div className="content">
                    <Header/>
                    <Body/>
                </div>
            </S.Home>
        </>
    )
}

export default Home