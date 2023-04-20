import { TProject, TProjectEditabled } from "../../types/Project"

type testLoopingObject = {
  [key: string]: any
}

const updateProjectWithEditedFields = (project: testLoopingObject, fieldsEdited: testLoopingObject): TProject=>{
  const newProject = {...project}

  for(const field in fieldsEdited){
    if(project[field] !== fieldsEdited[field]){
      newProject[field] = fieldsEdited[field]
    }
  }

  return newProject as TProject
}


export default updateProjectWithEditedFields