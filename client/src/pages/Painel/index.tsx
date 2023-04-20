
import Header from "../../components/Header"
import Dashboard from "./components/Dashboard"
import FormCreateProject from "./components/FormCreateProject"
import ManageProjects from "./components/ManageProjects"
import SearchRepos from "./components/SeachRepos"
import * as S from "./styles"

const Painel = ()=> {
    
    return (
        <>
            <Header painel/>
            <S.Painel>
                <div className="content">
                    <Dashboard/>
                    <SearchRepos/>
                    <FormCreateProject/>
                    <ManageProjects/>
                </div>
            </S.Painel>
        </>
    )
}

export default Painel