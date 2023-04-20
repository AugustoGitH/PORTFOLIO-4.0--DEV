import useProjectsAdmin from "../../../../stores/projectsAdmin"
import orderPresentationOfProjects from "../../../../utils/orderPresentationOfProjects"
import Project from "./components/Project"
import * as S from "./styles"



const ManageProjects = ()=>{
  const { projects } = useProjectsAdmin()
  return (
    <S.ManageProjects>
      <h2>Gerenciar seus projetos</h2>
      <ul className="projects">
        {
          orderPresentationOfProjects(projects)?.map(project=>(
            <Project key={project._id} project={project} />
          ))
        }
      </ul>
    </S.ManageProjects>
  )
}

export default ManageProjects