import { TProjectCreationProcess } from "../../../../types/Project";


export const modelNewProject: TProjectCreationProcess = {
  name: "",
  type: "",
  technologiesUsed: [],
  websiteLink: "",
  videoLink: "",
  repoId: null,
  images: {
    cover: null,
    images: []
  }
}