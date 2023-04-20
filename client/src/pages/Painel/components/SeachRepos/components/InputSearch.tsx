import useSearchRepos from "../../../../../stores/searchRepos"
import * as S from "../styles"
import { useState, useEffect } from "react"


const InputSearch = ()=>{
  const { searchRepos } = useSearchRepos()
  
  const handleSearch = (value: string) =>{
    searchRepos(value)
  }

  return (
    <S.InputSearch>
      <label>Digite o nome do repositório:</label>
      <input onChange={e=> handleSearch(e.target.value)} />
    </S.InputSearch>
  )
}


export default InputSearch