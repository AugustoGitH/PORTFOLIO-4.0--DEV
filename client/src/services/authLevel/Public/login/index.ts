import axios, { AxiosError } from "axios";
import apiRoutes from "../../../constants/apiRoutes";
import { IFormLogin, IResponseFetchLogin } from "./types";
import constants from "../constants";
import forceTypedInput from "../../../utils/forceTypedInput";

const login = async (user: IFormLogin): Promise<IResponseFetchLogin> => {
  try {
    const { data } = await axios.post<IResponseFetchLogin>(
      apiRoutes.public.LOGIN,
      forceTypedInput<IFormLogin>(user)
    );
    return {
      message: data.message,
      logged: true,
    };
  } catch (error: unknown) {
    if (error instanceof AxiosError)
      return {
        message:
          error.response?.data.message ?? constants.error.GENERIC_ERROR_LOGIN,
        logged: false,
      };
    else
      return {
        message: constants.error.GENERIC_ERROR_LOGIN,
        logged: false,
      };
  }
};

export default login;
