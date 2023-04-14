import axios from "axios"
import { TRepositorie } from "../types/Repositorie"

type TTechsPercent = {
    [key: string]: number
}

type TGetRepositorieGit = {
    repoLink: string,
    techsPercent: TTechsPercent
}

const getRepositorieGit = async (idRepo: number): Promise<TGetRepositorieGit | null>  =>{
    try{
        const { data: repositories }: {data: TRepositorie[]} = await axios.get(`https://api.github.com/users/AugustoGitH/repos`, {
            headers: {
                Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`
            }
        })
        const repositorie = repositories.find(repo=> repo.id === idRepo) || null
        if(!repositorie) return null

        const { data: technologiesUsed }: { data: TTechsPercent} = await axios.get(repositorie.languages_url)
        return {
            repoLink: repositorie.svn_url,
            techsPercent: technologiesUsed
        }
    }catch(error){
        console.log("Ocorreu um erro ao resgatar repositorie ------>" + error)
        return null
    }

}

export default getRepositorieGit