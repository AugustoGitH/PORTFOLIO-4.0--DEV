import { TProjectCreationProcess } from "../../../../../types/Project"


const SchemaConditions = (project: TProjectCreationProcess)=> ({
  name: { 
    condition: (project.name.length < 47 && project.name.length > 3), 
    message: "Por favor, verifique se o nome do seu projeto tem entre 3 e 47 caracteres."  
  },
  type: {
    condition: ( !!project.type ),
    message: "É necessário que escolha um tipo para o seu projeto."
  },
  technologiesUsed: {
    condition: ( project.technologiesUsed.length >= 2 ),
    message: "Por favor, selecione pelo menos duas das tecnologias mais utilizadas em seu projeto."
  }
  ,
  images: {
    condition: ( !!project.images.cover ),
    message: "Por favor, escolha a imagem que deseja usar como capa para o seu projeto."
  }
})


type TConditions = {
  [key: string]: {
    condition: boolean,
    message: string
  }
}

const verifyFormCreatedProject = (project: TProjectCreationProcess)=>{
  const conditions: TConditions = SchemaConditions(project)
  const alertsActives = []
  for(const prop in conditions){
    if(!conditions[prop].condition){
      alertsActives.push(conditions[prop])
    }
  }
  return {
    error: alertsActives.length > 0,
    message: alertsActives[0]?.message || null
  }
}

export default verifyFormCreatedProject