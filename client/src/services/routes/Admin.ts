import config from "./config"

const baseRoutes = "/admin"

const templateRoute = (route: string)=>{
    return `${config.baseUrl}${baseRoutes}${route}`
}

export const routesAdmin = {
    createProject: templateRoute("/create-project"),
    getProjects: templateRoute("/get-projects"),
    getRepositories: templateRoute("/get-repositories"),
    favoriteProject: templateRoute("/favorite-project"),
    reloadRepoProject: templateRoute("/reload-repo-project"),
    updateProject: templateRoute("/update-project"),
    deleteProject: templateRoute("/delete-project"),
}
