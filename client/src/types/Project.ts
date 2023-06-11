import { TImageSelected } from "../components/InputImages/types";
import { Document } from "mongoose";

export type TProjectTypeCreationProcess =
  | "all"
  | "e-commerce"
  | "web app"
  | "lading page"
  | "";

export type TProjectType = "all" | "e-commerce" | "web app" | "lading page";

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

export interface TProjectImagesCreationProcess {
  cover: string | null;
  images: string[];
}

export type TProjectCreationProcess = {
  type: TProjectTypeCreationProcess;
  images: TProjectImagesCreationProcess;
  name: string;
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  technologiesUsed: TProjectTech[];
};

export interface TProjectImagesSendByClient {
  cover: string;
  images: string[];
}

export type TProjectSendByClient = {
  type: TProjectTypeCreationProcess;
  images: TProjectImagesSendByClient;
  name: string;
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  technologiesUsed: TProjectTech[];
};

export type TRepositoryTechnologiesPoints = {
  [key: string]: number;
};

export type TProject = {
  orderOfFive: number;
  name: string;
  images: TProjectImagesSendByClient;
  type: TProjectType;
  technologiesUsed: TProjectTech[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
  views: number;
  likes: number;
  repositoryTechnologiesPoints: TRepositoryTechnologiesPoints;
  repoLink: string;
  favorite: boolean;
  _id: string;
};

export type TProjectEditabled = {
  orderOfFive: number;
  name: string;
  type: TProjectType;
  technologiesUsed: TProjectTech[];
  websiteLink: string;
  videoLink: string;
  repoId: number | null;
};

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
