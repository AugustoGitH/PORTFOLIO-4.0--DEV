import { TProjectImages, TProjectType } from "../../types/Project";


export type TProject = {
    orderOfFive: number,
    name: string,
    images: TProjectImages,
    type: TProjectType[],
    technologiesUsed: string[]
    websiteLink: string,
    videoLink: string,
    repoId: number | null,
    views: number,
    likes: number,
    repositoryTechnologiesPoints: object,
    repoLink: string,
    favorite: boolean
}