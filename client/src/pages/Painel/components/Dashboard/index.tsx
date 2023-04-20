import { useState } from "react"
import * as S from "./styles"
import { TDashboardData } from "./types"
import useProjectsAdmin from "../../../../stores/projectsAdmin"
import { useEffect } from "react"



const Dashboard = ()=>{     
    const { projects, dataDashboard } = useProjectsAdmin()

    const [ dashboardDefaultValues, setDashboardDefaultValues ] = useState<TDashboardData>({
        webApps: "***",
        ladingPages: "***",
        completedProjects: "***",
        devlopmentProjects: "***",
        ecommerces: "***",
        likes: "***",
        views: "***"
    })

    useEffect(()=>{
        if(dataDashboard){
            setDashboardDefaultValues(dataDashboard)
        }
    }, [dataDashboard])


    return (
        <S.Dashboard>
            <h2>Dashboard</h2>
            <ul className="dash-projects">
                <li>
                    <h3>Seus projetos Receberam</h3>
                    <span>
                        <i className='bx bxs-like'></i>
                        <h4>{dashboardDefaultValues.likes} curtidas em projetos</h4> 
                    </span>
                </li>
                <li>
                    <h3>Tráfego de visualizações</h3>
                    <span>
                        <i className='bx bxs-mouse-alt'></i>
                        <h4>{dashboardDefaultValues.views} em seus projetos</h4>
                    </span>
                </li>
                <li>
                    <h3>{dashboardDefaultValues.completedProjects} {`projeto${dashboardDefaultValues.completedProjects === 1 ? "": "s"}`}</h3>
                    <span>
                        <i className='bx bxs-box' ></i>
                        <h4>concluidos e ativos em seu portifólio</h4>
                    </span>
                </li>
                <li>
                    <h3>{dashboardDefaultValues.devlopmentProjects} {`projeto${dashboardDefaultValues.devlopmentProjects === 1 ? "": "s"}`}</h3>
                    <span>
                        <i className='bx bxs-cog' ></i>
                        <h4>Em desenvolvimento</h4>
                    </span>
                </li>
            </ul>
            <ul className="dash-types">
                <li>
                    <h3>{dashboardDefaultValues.ladingPages}</h3>
                    <h4>Lading Pages</h4>
                </li>
                <li>
                    <h3>{dashboardDefaultValues.webApps}</h3>
                    <h4>Web Apps</h4>
                </li>
                <li>
                    <h3>{dashboardDefaultValues.ecommerces}</h3>
                    <h4>E-Commerces</h4>
                </li>
            </ul>
        </S.Dashboard>
    )
}

export default Dashboard