import { useEffect, useState } from "react";

import useProjectsPublic from "../../../../stores/projectsPublic"
import * as S from "../styles"
import returnSumOfTechnologiesInArray, { TPercentTotalTechs } from "../utils/returnSumOfTechnologiesInArray"
import LoaderDefault from "../../../../components/loaders/LoaderDefault";

type TPropsBarPercentTech = {
  name: string,
  percent: number
}
const BarPercentTech = ({ name, percent }: TPropsBarPercentTech)=>{
  const [percentScreen, setPercentScreen] = useState(0)

  useEffect(()=>{
    for(let i = 0; i < percent; i++){
      setTimeout(()=>{
        setPercentScreen(i)
      }, 30 * i)
    }
  }, [])

  return (
    <li className="bar-percent-tech-container">
      <span className="tech-name">{name}</span>
      <div className="cont-bar">
        <div className="bar" style={{ width: `${percentScreen}%` }}>
          <span className="percent">{percentScreen + "%"}</span>
        </div>
      </div>
    </li>
  )
}


const TechnologiesPercentageChart = ()=>{
  const { projectsData, isFetching } = useProjectsPublic()
  const [ percents, setPercents ] = useState<TPercentTotalTechs | null>(null)

  useEffect(()=>{
    if(projectsData){
      const percentsTrated = returnSumOfTechnologiesInArray(
        projectsData.map(project=> project.repositoryTechnologiesPoints)
          .filter(Boolean) 
      )
      setPercents(percentsTrated)
    }
  }, [projectsData])
  return (
    <S.TechnologiesPercentageChart>
      <ul>
        {
          percents?.map((percent, index)=>(
            <BarPercentTech key={index} name={percent.name} percent={percent.percent}/>
          ))
        }
        {
          isFetching && !percents ? (
            <div className="loader-techs">
              <LoaderDefault color="dark"/>
            </div>
          ) : <></>
        }
      </ul>
    </S.TechnologiesPercentageChart>
  )
}


export default TechnologiesPercentageChart