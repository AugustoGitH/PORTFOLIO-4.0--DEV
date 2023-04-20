import axios from "axios"
import { TRepositorie } from "../types/Repositorie"
import { URLUSER } from "../constants/github"

type TTechsPercent = {
    [key: string]: number
}

const Repositorie = {
    
    async findAll() {
        try{
            const { data: repositories }: {data: TRepositorie[]} = await axios.get(URLUSER, {
                headers: {
                    Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`
                }
            })
            return repositories
        }catch(error){
            console.log("Ocorreu um erro ao resgatar repositorios ------>" + error)
            return null
        }
    },
    async findOneById(id: number){
        try{
            const { data: repositories }: {data: TRepositorie[]} = await axios.get(URLUSER, {
                headers: {
                    Authorization: `token ${process.env.AUTORIZATION_TOKEN_GITHUB}`
                }
            })
            return repositories.find(repo=> repo.id === id) || null
        }catch(error){
            console.log("Ocorreu um erro ao resgatar repositorios ------>" + error)
            return null
        }
    },
    async findTechnologies(languagesUrl: string){
        try{
            const { data: technologiesUsed }: { data: TTechsPercent} = await axios.get(languagesUrl)
            return technologiesUsed
        }catch(error){
            console.log("Ocorreu um erro ao resgatar tecnologias usadas no repositorio ------>" + error)
            return null
        }
    }
}

export default Repositorie