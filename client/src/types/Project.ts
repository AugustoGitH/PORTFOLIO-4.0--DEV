export type TProjectType = 'all' | 'e-commerce' | 'web app' | 'lading page';

export type TProjectTechnologiesUsed =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'firebase'
  | 'nodejs'
  | 'bootstrap'
  | 'mongodb'
  | 'sass'
  | 'typescript'
  | 'reactjs'
  | 'nextjs';

export interface IProjectImages {
  cover: string;
  images: string[];
}

export type TRepositoryTechnologiesPoints = Record<string, number>;

export type TProject = {
  orderOfFive: number;
  name: string;
  images: IProjectImages;
  type: TProjectType;
  technologiesUsed: TProjectTechnologiesUsed[];
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
