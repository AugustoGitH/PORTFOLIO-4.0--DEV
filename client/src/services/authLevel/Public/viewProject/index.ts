import axios, { AxiosError } from "axios";
import apiRoutes from "../../../constants/apiRoutes";
import { IResponseFetchViewProject } from "./types";
import constants from "../constants";

const viewProject = async (
  idProject: string
): Promise<IResponseFetchViewProject> => {
  try {
    const { data } = await axios.put<IResponseFetchViewProject>(
      apiRoutes.public.VIEW_PROJECT,
      { idProject }
    );
    return {
      message: data.message,
      visualized: true,
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        message:
          error.response?.data.message ??
          constants.error.GENERIC_ERROR_VIEW_PROJECT,
        visualized: false,
      };
    else
      return {
        message: constants.error.GENERIC_ERROR_VIEW_PROJECT,
        visualized: false,
      };
  }
};

export default viewProject;
