import { TRepositoryTechnologiesPoints } from "../../../../types/Project";

type TPointersSumTechs = {
  [key: string]: number
}

export type TPercentTotalTechs = { name: string, percent: number }[]


const returnSumOfTechnologiesInArray = (technologiesProjects: TRepositoryTechnologiesPoints[]): (TPercentTotalTechs | null)=>{
  if(technologiesProjects.length === 0) return null
  let pointersSumTechs = {} as TPointersSumTechs
  technologiesProjects.forEach(techsProject=>{
    for(const tech in techsProject){
      pointersSumTechs[tech] = (pointersSumTechs[tech] ? pointersSumTechs[tech] : 0) + techsProject[tech]
    }
  })
  const totalPointersTech = Object.values(pointersSumTechs).reduce((prev, current)=> current + prev)

  let percentTotalTechs = [] as TPercentTotalTechs

  for(const tech in pointersSumTechs){
    percentTotalTechs.push({
      name: tech,
      percent: Math.floor((100 * pointersSumTechs[tech]) / totalPointersTech)
    })
  }

  return percentTotalTechs
}

export default returnSumOfTechnologiesInArray