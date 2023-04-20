import axios, { AxiosError } from "axios"
import { TProjectCreationProcess, TProjectSendByClient } from "../../types/Project"
// import rescueProjectImageLinks from "./utils/rescueProjectImageLinks"
import { routesAdmin } from "../routes/Admin"


const createProject = async (project: TProjectCreationProcess)=>{
  try{
    // const imagesTratedUrl = await rescueProjectImageLinks(project.images)
    // if(!imagesTratedUrl) throw new Error("Ocorreu um erro ao tratar as imagens do projeto!")

    const { data } = await axios.post(routesAdmin.createProject, {
      ...project,
      images: {
        cover: project.images.cover,
        images: project.images.images
      }
    } as TProjectSendByClient)

    return {
      message: data?.message || "Projeto criado com sucesso!",
      created: true
    }
  }catch(error: unknown){
    return {
      message: (error instanceof AxiosError) ? 
        (error.response?.data.message || "Ocorreu um erro ao criar projeto.") : 
          "Ocorreu um erro ao criar projeto.",
      created: false
    }
  }
}

export default createProject