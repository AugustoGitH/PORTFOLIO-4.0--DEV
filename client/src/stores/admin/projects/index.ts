import { create } from 'zustand';
import { TDashboardData } from '../../../pages/Painel/components/Dashboard/types';
import { TProject, TProjectEditabled } from '../../../types/Project';
import createDataDashboard from '../../utils/createDataDashboard';
import useFetchProjects from '../../../queries/services/projects';
import { useEffect } from 'react';
import updateProjectWithEditedFields from '../../utils/updateProjectWithEditedFields';

type TProjectsAdminStore = {
  projects: TProject[] | null;
  dataDashboard: TDashboardData | null;
  setProjects: (projects: TProject[]) => void;
  deleteProject: (idProject: string) => void;
  setDataDashboard: (projects: TProject[]) => void;
};

const useProjectsAdminStore = create<TProjectsAdminStore>((set) => ({
  projects: null,
  dataDashboard: null,
  setProjects: (projects: TProject[]) => {
    set({ projects });
  },
  deleteProject: (idProject: string) => {
    set((props) => ({
      projects:
        props.projects?.filter((project) => project._id !== idProject) || null
    }));
  },
  setDataDashboard: (projects: TProject[]) => {
    set({
      dataDashboard: projects ? createDataDashboard(projects) : null
    });
  }
}));

const useProjectsAdmin = () => {
  const { data: projectsData } = useFetchProjects();
  const {
    setProjects,
    dataDashboard,
    deleteProject,
    projects,
    setDataDashboard
  } = useProjectsAdminStore();
  useEffect(() => {
    if (projectsData) {
      setProjects(projectsData);
    }
  }, [projectsData]);

  useEffect(() => {
    if (projects) {
      setDataDashboard(projects);
    }
  }, [projects]);

  const updateProject = (idProject: string, fieldsEdit: TProjectEditabled) => {
    if (!projects)
      throw new Error(
        'Você não pode atualizar um projeto antes da lista de projetos ser carregada.'
      );
    const projectSelected = projects.find(
      (project) => project._id === idProject
    );
    if (!projectSelected)
      throw new Error(
        'Você não pode atualizar um projeto que nem existe na lista atual de projetos.'
      );
    const newProjectEdited = updateProjectWithEditedFields(
      projectSelected,
      fieldsEdit
    );
    setProjects([
      ...projects.filter((project) => project._id !== idProject),
      newProjectEdited
    ]);
  };

  return { projects, dataDashboard, deleteProject, updateProject };
};

export default useProjectsAdmin;
