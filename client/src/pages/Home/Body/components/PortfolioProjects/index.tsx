import * as S from "./styles"

import { LADINGPAGE, ECOMMERCE, WEBAPP } from "../../../../../constants/typesProject"
import { TProjectType } from "../../../../../types/Project"
import { useEffect, useState } from "react"
import Project from "./components/Project/indext"


type TPropsFiltersTypes = {
    onChange: (type: TProjectType | "all")=> void
}

const FiltersTypesProject = ({ onChange }: TPropsFiltersTypes)=>{
    const [typeFilter, setTypeFilter] = useState<TProjectType | "all">("all")

    useEffect(()=>{
        onChange(typeFilter)
    }, [typeFilter])

    const handleClickPropsFil = (type: TProjectType | "all")=>({
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

const ProjectsList = ({ type }: { type: TProjectType | "all" })=>{
    return (
        <S.ProjectsList>
            <Project/>
        </S.ProjectsList>
    )
}










const PortfolioProjects = ()=>{
    const [typeFilter, setTypeFilter] = useState<TProjectType | "all">("all")

    const handleChangeFilter = (type: TProjectType | "all")=>{
        setTypeFilter(type)
    }

    return (
        <S.PortfolioProjects>
            <h1>Portfolio Projects</h1>
            <FiltersTypesProject onChange={handleChangeFilter}/>
            <ProjectsList type={typeFilter}/>
        </S.PortfolioProjects>
    )
}

export default PortfolioProjects