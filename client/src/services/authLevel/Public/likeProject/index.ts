import axios, { AxiosError } from "axios";
import apiRoutes from "../../../constants/apiRoutes";
import { IResponseFetchLikeProject, TStateLike } from "./types";
import constants from "../constants";

const likeProject = async (
  idProject: string,
  stateLike: TStateLike
): Promise<IResponseFetchLikeProject> => {
  try {
    const { data } = await axios.put<IResponseFetchLikeProject>(
      apiRoutes.public.LIKE_PROJECT,
      { idProject, stateLike }
    );
    return {
      message: data.message,
      liked: true,
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        message:
          error.response?.data.message ??
          constants.error.GENERIC_ERROR_LIKE_PROJECT,
        liked: false,
      };
    else
      return {
        message: constants.error.GENERIC_ERROR_LIKE_PROJECT,
        liked: false,
      };
  }
};

export default likeProject;
