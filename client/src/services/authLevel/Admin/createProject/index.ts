import axios, { AxiosError } from 'axios';

import apiRoutes from '../../../constants/apiRoutes';
import { IFormCreateProject, IResponseFetchCreateProject } from './types';
import constants from '../constants';
import forceTypedInput from '../../../utils/forceTypedInput';

const createProject = async (
  project: IFormCreateProject
): Promise<IResponseFetchCreateProject> => {
  try {
    const { data } = await axios.post<IResponseFetchCreateProject>(
      apiRoutes.admin.CREATE_PROJECT,
      forceTypedInput<IFormCreateProject>(project)
    );
    return {
      message: data.message,
      created: true
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        message:
          error.response?.data?.message ??
          constants.error.GENERIC_ERROR_CREATING_PROJECT,
        created: false
      };
    }
    return {
      message: constants.error.GENERIC_ERROR_CREATING_PROJECT,
      created: false
    };
  }
};

export default createProject;
