
export type TProjectType = 'e-commerce' | 'web app' | 'lading page'

export interface TProjectImages {
  cover: string
  images: string[]
}

export type TRepositoryTechnologiesPoints = {
  [key: string]: number
}

export interface TProjectSubmitClient {
  name: string
  images: TProjectImages
  technologiesUsed: string[]
  type: TProjectType
  websiteLink: string
  videoLink: string
  repoId: number | null
  repositoryTechnologiesPoints: TRepositoryTechnologiesPoints
  repoLink: string
}

export type TProjectEditabledSendByClient = {
  orderOfFive: number,
  name: string,
  type: TProjectType,
  technologiesUsed: string[]
  websiteLink: string,
  videoLink: string,
  repoId: number | null,
  idProject: string
}