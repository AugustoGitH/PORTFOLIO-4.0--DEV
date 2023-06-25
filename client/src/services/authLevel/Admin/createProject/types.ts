import {
  IProjectImages,
  TProjectTechnologiesUsed,
  TProjectType,
} from "../../../../types/Project";

export interface IFormCreateProject {
  type: TProjectType;
  images: IProjectImages;
  name: string;
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  technologiesUsed: TProjectTechnologiesUsed[];
}

export interface IResponseFetchCreateProject {
  message: string;
  created: boolean;
}
