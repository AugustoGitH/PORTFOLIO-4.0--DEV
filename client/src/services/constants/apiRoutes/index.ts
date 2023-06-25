import { TRouteAPIAdmin, TRouteAPIPublic } from "./types";
import handleBaseURL from "./utils/handleBaseURL";

const baseURL = "/api";

const apiRoutes = {
  admin: handleBaseURL<TRouteAPIAdmin>(baseURL, {
    CREATE_PROJECT: "/create-project",
    GET_PROJECTS: "/get-projects",
    GET_REPOSITORIES: "/get-projects",
    FAVORITE_PROJECT: "/favorite-project",
    RELOAD_REPO_PROJECT: "/reload-repo-project",
    UPDATE_PROJECT: "/update-project",
    DELETE_PROJECT: "/delete-project",
  }),
  public: handleBaseURL<TRouteAPIPublic>(baseURL, {
    GET_PROJECTS: "/get-projects",
    LOGIN: "/login",
    VERIFY_CREDENTIAL: "/verify-credential",
    VIEW_PROJECT: "/view-project",
    LIKE_PROJECT: "/like-project",
  }),
};

export default apiRoutes;
