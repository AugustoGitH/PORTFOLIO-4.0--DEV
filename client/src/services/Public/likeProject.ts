import { routesPublic } from "../routes/Public"
import { TLogin } from "./types"
import axios, { AxiosError } from "axios"



const likeProject = async (idProject: string, stateLike: "favorite" | "desfavorite" )=>{
    try{
        const { data } = await axios.put(routesPublic.likeProject, { idProject, stateLike })
        return {
            message: data?.message || "Projeto curtido com sucesso!",
            likedAction: true
        }
    }catch(error){
      if(error instanceof AxiosError) return {
        message: error.response?.data.message || "Erro interno no servidor ao curtir projeto!",
        likedAction: false
      }
      else return {
        message:  "Erro interno no servidor ao curtir projeto!",
        likedAction: false
      }
    }

}

export default likeProject