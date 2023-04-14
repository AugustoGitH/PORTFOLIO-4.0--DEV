import { TProjectImages, TProjectType } from "../../types/Project";


export type TProject = {
    orderOfFive: number,
    name: string,
    images: TProjectImages,
    type: TProjectType[],
    websiteLink: string,
    videoLink: string,
    repoId: number | null,
    views: number,
    likes: number,
    techsPercents: object,
    repoLink: string,
    favorite: boolean
}