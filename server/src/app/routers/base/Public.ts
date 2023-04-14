import { TRoute } from "./types"
import controllersPublic from "../../controllers/Public"

export const baseRoute = "/public"


export const publicRouters: TRoute[] = [
    {
        path: `${baseRoute}/get-projects`,
        method: "get",
        controller: controllersPublic.getProjects
    },
    {
        path:`${baseRoute}/login`,
        method: "post",
        controller: controllersPublic.login
    },
    {
        path: `${baseRoute}/verify-credential`,
        method: "get",
        controller: controllersPublic.verifyCredential
    },
    {
        path: `${baseRoute}/view-project`,
        method: "put",
        controller: controllersPublic.viewProject
    },
    {
        path: `${baseRoute}/like-project`,
        method: "put",
        controller: controllersPublic.likeProject
    },
]