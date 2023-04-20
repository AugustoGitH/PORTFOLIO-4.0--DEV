import * as S from "./styles"

import { TProjectType } from "../../../../../types/Project"
import { useEffect, useState } from "react"
import Project from "./components/Project/index"
import useProjectsPublic from "../../../../../stores/projectsPublic"
import LoaderDefault from "../../../../../components/loaders/LoaderDefault"
import orderPresentationOfProjects from "../../../../../utils/orderPresentationOfProjects"



const FiltersTypesProject = ()=>{
    const [typeFilter, setTypeFilter] = useState<TProjectType>("all")
    const { filterProjects } = useProjectsPublic()

    useEffect(()=>{
        filterProjects(typeFilter)
    }, [typeFilter])

    const handleClickPropsFil = (type: TProjectType)=>({
        onClick: ()=>{ setTypeFilter(type) },
        className: typeFilter === type ? "mark-button-filter" : ""
    })

    return (
        <S.FiltersTypesProject>
            <li {...handleClickPropsFil("all")} >
                All
            </li>
            <li {...handleClickPropsFil("lading page")}>
                Lading Pages
            </li>
            <li {...handleClickPropsFil("web app")}>
                Web Apps
            </li>
            <li {...handleClickPropsFil("e-commerce")}>
                E-Commerces
            </li>
        </S.FiltersTypesProject>
    )
}

const ProjectsList = ()=>{
    const { projectsOnScreen, isFetching, projectsData } = useProjectsPublic()
    
    return (
        <S.ProjectsList>
            {
                orderPresentationOfProjects(projectsOnScreen)?.map(project=>(
                    <Project key={project._id} project={project}/>
                ))
            }
            {
                isFetching && !projectsData ? (
                    <div className="loader-projects">
                        <LoaderDefault color="light"/>
                    </div>
                ): <></>
            }
            {
                projectsData && projectsOnScreen.length === 0 ? (
                    <div className="not-projects">
                        <span>Nenhum projeto foi encontrado!</span>
                    </div>
                ): <></>
            }
        </S.ProjectsList>
    )
}










const PortfolioProjects = ()=>{
   return (
        <S.PortfolioProjects>
            <h1>Portfolio Projects</h1>
            <FiltersTypesProject/>
            <ProjectsList/>
        </S.PortfolioProjects>
    )
}

export default PortfolioProjects