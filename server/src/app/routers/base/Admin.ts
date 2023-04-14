import { TRoute } from "./types"

import controllersAdmin from "../../controllers/Admin"

export const baseRoute = "/admin"

export const adminRouters: TRoute[] = [
    {
        path: `${baseRoute}/create-project`,
        method: "post",
        controller: controllersAdmin.createProject
    },
    {
        path: `${baseRoute}/get-projects`,
        method: "get",
        controller: controllersAdmin.getProjects
    },
    {
        path: `${baseRoute}/get-repositories`,
        method: "get",
        controller: controllersAdmin.getRepositories
    },
    {
        path: `${baseRoute}/favorite-project`,
        method: "put",
        controller: controllersAdmin.favoriteProject
    },
    {
        path: `${baseRoute}/reload-repo-project`,
        method: "put",
        controller: controllersAdmin.reloadRepoProject
        
    },
    {
        path: `${baseRoute}/update-project`,
        method: "put",
        controller: controllersAdmin.updateProject
    },
    {
        path: `${baseRoute}/delete-project`,
        method: "delete",
        controller: controllersAdmin.deleteProject
    }
]