
import { create } from "zustand";
import { TProject, TProjectType } from "../types/Project";
import useFetchProject from "../queries/projects";
import { useEffect } from "react"


type TProjectsPublicStore = {
  projects: TProject[] | null,
  projectsOnScreen: TProject[],
  setProjects: (projects: TProject[])=> void,
  filterProjects: (type: TProjectType)=> void
}

const useProjectsPublicStore = create<TProjectsPublicStore>(set=> ({
  projects: null,
  projectsOnScreen: [],

  setProjects: (projects: TProject[])=>{
    set({ 
      projects,
      projectsOnScreen: projects
     })
  }, 
  filterProjects: (type: TProjectType)=>{
    set(props=>({
      projectsOnScreen: type === "all" ?  (props.projects || []) :
          props.projects?.filter(project=> project.type === type) || []
    }))
  }
}))




const useProjectsPublic = ()=>{
  const { data: projectsData, isFetching } = useFetchProject()
  const { setProjects, projectsOnScreen, filterProjects } = useProjectsPublicStore()

  useEffect(()=>{
    if(projectsData){
      setProjects(projectsData)
    }
  }, [projectsData])

  return { projectsData, projectsOnScreen, isFetching, filterProjects }
}

export default useProjectsPublic