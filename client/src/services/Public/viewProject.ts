import { routesPublic } from "../routes/Public"
import { TLogin } from "./types"
import axios, { AxiosError } from "axios"



const viewProject = async (idProject: string)=>{
    try{
        const { data } = await axios.put(routesPublic.viewProject, { idProject })
        return {
            message: data?.message || "Projeto visualizado!",
            view: true
        }
    }catch(error){
      if(error instanceof AxiosError) return {
        message: error.response?.data.message || "Erro interno no servidor ao visualizar projeto!",
        view: false
      }
      else return {
        message:  "Erro interno no servidor ao visualizar projeto!",
        view: false
      }
    }

}

export default viewProject