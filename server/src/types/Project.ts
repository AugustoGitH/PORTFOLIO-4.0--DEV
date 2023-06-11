export type TProjectType = "e-commerce" | "web app" | "lading page";
export type TProjectTech =
  | "html5"
  | "css3"
  | "javascript"
  | "firebase"
  | "nodejs"
  | "bootstrap"
  | "mongodb"
  | "sass"
  | "typescript"
  | "reactjs"
  | "nextjs";

export interface TProjectImages {
  cover: string;
  images: string[];
}

export type TRepositoryTechnologiesPoints = {
  [key: string]: number;
};

export interface TProjectSubmitClient {
  name: string;
  images: TProjectImages;
  technologiesUsed: TProjectTech[];
  type: TProjectType;
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  repositoryTechnologiesPoints: TRepositoryTechnologiesPoints;
  repoLink: string;
}

export type TProjectEditabledSendByClient = {
  orderOfFive: number;
  name: string;
  type: TProjectType;
  technologiesUsed: TProjectTech[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  idProject: string;
};
