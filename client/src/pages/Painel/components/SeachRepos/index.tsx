import InputSearch from "./components/InputSearch"
import ListRepos from "./components/ListRepos"
import * as S from "./styles"

const SearchRepos = ()=>{
  return (
    <S.SearchRepos>
      <h4>AugustoGith</h4>
      <h2>Buscar reporitórios no seu Github</h2>
      <InputSearch/>
      <ListRepos/>
    </S.SearchRepos>
  )
}


export default SearchRepos