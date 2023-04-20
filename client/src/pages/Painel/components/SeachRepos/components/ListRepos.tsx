import { useState } from "react"
import * as S from "../styles"
import { TRepositorie } from "../../../../../types/Repositorie"
import moment from "moment"
import LoaderBoxes from "../../../../../components/loaders/LoaderBoxes"
import useSearchRepos from "../../../../../stores/searchRepos"

type TPropsRepositorie = {
  repo: TRepositorie
}

const Repositorie = ({ repo }: TPropsRepositorie)=>{
  const createdDate = moment(new Date(repo.created_at)).format("DD/MM/YYYY")
  const updatedDate = moment(new Date(repo.updated_at)).format("DD/MM/YYYY")


  const [ isCopy, setIsCopy ] = useState(false)
  const handleClickCopy = (id: number)=>{
    if(isCopy) return
    
    navigator.clipboard.writeText(id.toString())
      .then(()=> setIsCopy(true))
  }

  return (
    <li>
        <p><span>Nome: </span>{ repo.name } </p>
        <p>
          <span>id: </span>{ repo.id }
          <button 
            className={`button-copy-id ${isCopy ? "copy" : ""}`} 
            onClick={()=> handleClickCopy(repo.id)} 
            onMouseLeave={()=> setIsCopy(false)}
          >
            <i className='bx bxs-copy-alt' ></i>
          </button>
        </p>
        <p><span>Ultima atualização: </span>{updatedDate}</p>
        <p><span>Data de criação: </span>{createdDate}</p>
    </li>
  )
}


const ListRepos = () =>{
  const { reposToScreen, isFetching } = useSearchRepos()
  return (
    <>
      <S.ListRepos>
      {
        reposToScreen?.map(repo=>(
          <Repositorie key={repo.id} repo={repo}/>
        ) )
      }
      {
        isFetching && (
          <div className="loading-repos">
            <LoaderBoxes/>
          </div>
        )
      }
      {
        reposToScreen?.length === 0 && (
          <div className="not-repos-alert">
            <p>Nunhum repositório foi encontrado!</p>
          </div>
        )
      }
      </S.ListRepos>
    </>
  )
}


export default ListRepos