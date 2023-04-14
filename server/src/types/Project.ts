
export type TProjectType = 'e-commerce' | 'web app' | 'lading page'

export interface TProjectImages {
  cover: string
  images: string[]
}

export interface TProjectSubmitClient {
  name: string
  images: TProjectImages
  type: TProjectType[]
  websiteLink: string
  videoLink: string
  repoId: number | null
  techsPercents: object
  repoLink: string
}
