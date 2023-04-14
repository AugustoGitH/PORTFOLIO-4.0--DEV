
import * as S from "./styles"
import { tecnologies } from "../../../../../settings";

const TechnologiesInProjects = ()=>{
    return (
        <S.TecnologiesInProjects>
          <h1>technologies in projects</h1>
          <ul>
            { 
              tecnologies.map((tech, index)=>(
                  <li key={index}>
                      <span>
                          {tech.icon}
                          <h2>{tech.name }</h2>
                      </span>
                  </li> )) 
            }
          </ul>
        </S.TecnologiesInProjects>
      );
}

export default TechnologiesInProjects
