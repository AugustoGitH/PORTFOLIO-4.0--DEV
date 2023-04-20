import axios, { AxiosError } from "axios"
import { routesAdmin } from "../routes/Admin"


const deleteProject = async (idProject: string)=>{
  
  try{

    const { data } = await axios.delete(`${routesAdmin.deleteProject}/${idProject}`)

    return {
      message: data?.message || "Projeto deletado com sucesso!",
      deleted: true
    }
  }catch(error: unknown){
    return {
      message: (error instanceof AxiosError) ? 
        (error.response?.data.message || "Ocorreu um erro ao deletar projeto.") : 
          "Ocorreu um erro ao deletar projeto.",
        deleted: false
    }
  }
}

export default deleteProject