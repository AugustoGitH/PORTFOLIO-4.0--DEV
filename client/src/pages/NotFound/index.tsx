import { Link } from "react-router-dom"
import * as S from "./styles"


const PageNotFound = ()=>{
    return (
        <S.PageNotFound>
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar para a home</Link>
        </S.PageNotFound>
    )
}

export default PageNotFound