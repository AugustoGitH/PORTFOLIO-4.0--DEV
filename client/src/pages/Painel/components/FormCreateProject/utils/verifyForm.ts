import { TProjectCreationProcess } from "../../../../../types/Project";

type TSchemasValueRequired = keyof Omit<
  TProjectCreationProcess,
  "videoLink" | "repoId" | "repoLink" | "websiteLink"
>;

interface TCondition {
  condition: boolean;
  message: string;
}

type ISchemaConditions = Record<TSchemasValueRequired, TCondition>;

const SchemaConditions = (
  project: TProjectCreationProcess
): ISchemaConditions => ({
  name: {
    condition: project.name.length < 47 && project.name.length > 3,
    message:
      "Por favor, verifique se o nome do seu projeto tem entre 3 e 47 caracteres.",
  },
  type: {
    condition: !!project.type,
    message: "É necessário que escolha um tipo para o seu projeto.",
  },
  technologiesUsed: {
    condition: project.technologiesUsed.length >= 2,
    message:
      "Por favor, selecione pelo menos duas das tecnologias mais utilizadas em seu projeto.",
  },
  images: {
    condition: !!project.images.cover,
    message:
      "Por favor, escolha a imagem que deseja usar como capa para o seu projeto.",
  },
});

const verifyFormCreatedProject = (project: TProjectCreationProcess) => {
  const conditions = SchemaConditions(project);
  const alertsActives = Object.entries(conditions)
    .filter(([, { condition }]) => !condition)
    .map(([, condition]) => condition);

  return {
    error: alertsActives.length > 0,
    message: alertsActives[0]?.message || null,
  };
};

export default verifyFormCreatedProject;
