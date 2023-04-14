import config from "./config"

const baseRoutes = "/public"

const templateRoute = (route: string)=>{
    return `${config.baseUrl}${baseRoutes}${route}`
}

export const routesPublic = {
    getProjects: templateRoute("/get-projects"),
    login: templateRoute("/login"),
    verifyCredential: templateRoute("/verify-credential"),
    viewProject: templateRoute("/view-project"),
    likeProject: templateRoute("/like-project"),
}


 