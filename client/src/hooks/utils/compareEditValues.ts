import { TProjectEditabled } from "../../types/Project"
import { TResultCompare, TReturnCompareEditValues } from "../types"

type TProjectT = {
  [key: string]: any
}


const compareArrays = (array1: string[], array2: string[]): boolean=>{
  return array1.filter(ay1=> !array2.includes(ay1)).length === 0 && array1.length === array2.length
}


const compareEditValues = (editedValues: TProjectT, project: TProjectT): TReturnCompareEditValues=>{
  const originalValueTrated = {} as TProjectT

  for(const attr in project){
    if(Object.keys(editedValues).includes(attr)){
      originalValueTrated[attr] = project[attr]
    }
  }

  const comparisons = [] as TResultCompare[]

  for(const attr in originalValueTrated){
    comparisons.push({
      valueOriginal: originalValueTrated[attr],
      valueEdited: editedValues[attr],

      condition: Array.isArray(originalValueTrated[attr]) && Array.isArray(editedValues[attr]) ? 
        compareArrays(originalValueTrated[attr], editedValues[attr]) : 
        String(originalValueTrated[attr]) === String(editedValues[attr])

    })
  }

  return {
    comparisons,
    modified: !comparisons.every(comp=> comp.condition)
  }
}

export default compareEditValues