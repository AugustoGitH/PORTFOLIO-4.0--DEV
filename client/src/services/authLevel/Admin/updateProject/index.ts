import axios, { AxiosError } from "axios";
import { TProjectEditabledSendByClient } from "../../../../types/Project";
import apiRoutes from "../../../constants/apiRoutes";
import { IFieldsEditProject, IResponseFetchUpdateProject } from "./types";
import constants from "../constants";
import forceTypedInput from "../../../utils/forceTypedInput";

const updateProject = async (
  valuesEdited: IFieldsEditProject
): Promise<IResponseFetchUpdateProject> => {
  try {
    const { data } = await axios.put<IResponseFetchUpdateProject>(
      apiRoutes.admin.UPDATE_PROJECT,
      forceTypedInput<IFieldsEditProject>(valuesEdited)
    );
    return {
      message: data.message,
      updated: true,
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_UPDATE_PROJECT,
        updated: false,
      };
    }
    return {
      message: constants.error.GENERIC_ERROR_UPDATE_PROJECT,
      updated: false,
    };
  }
};

export default updateProject;
