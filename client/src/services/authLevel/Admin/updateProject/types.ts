import {
  TProjectTechnologiesUsed,
  TProjectType,
} from "../../../../types/Project";

export interface IResponseFetchUpdateProject {
  message: string;
  updated: boolean;
}

export interface IFieldsEditProject {
  orderOfFive: number;
  name: string;
  type: TProjectType;
  technologiesUsed: TProjectTechnologiesUsed[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  idProject: string;
}
