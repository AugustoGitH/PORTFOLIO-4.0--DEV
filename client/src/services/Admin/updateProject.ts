import axios, { AxiosError } from "axios"
import { TProjectEditabledSendByClient } from "../../types/Project"
import { routesAdmin } from "../routes/Admin"


const updateProject = async (valuesEdited: TProjectEditabledSendByClient)=>{
  try{
    const { data } = await axios.put(routesAdmin.updateProject, { ...valuesEdited })

    return {
      message: data?.message || "Projeto foi atualizado com sucesso!",
      update: true
    }
  }catch(error: unknown){
    return {
      message: (error instanceof AxiosError) ? 
        (error.response?.data.message || "Ocorreu um erro ao atualizar projeto.") : 
          "Ocorreu um erro ao atualizar projeto.",
        update: false
    }
  }
}

export default updateProject