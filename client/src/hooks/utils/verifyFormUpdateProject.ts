import { TProjectEditabled } from "../../types/Project"




const SchemaConditions = (editedValues: TProjectEditabled)=> ({
  name: { 
    condition: (editedValues.name.length < 47 && editedValues.name.length > 3), 
    message: "Por favor, verifique se o nome do seu projeto tem entre 3 e 47 caracteres."  
  },
  type: {
    condition: ( !!editedValues.type ),
    message: "É necessário que escolha um tipo para o seu projeto."
  },
  technologiesUsed: {
    condition: ( editedValues.technologiesUsed.length >= 2 ),
    message: "Por favor, selecione pelo menos duas das tecnologias mais utilizadas em seu projeto."
  }
})

type TConditions = {
  [key: string]: {
    condition: boolean,
    message: string
  }
}

const verifyFormUpdateProject = (project: TProjectEditabled)=>{
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

export default verifyFormUpdateProject