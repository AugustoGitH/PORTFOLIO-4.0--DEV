import axios from "axios";
import { useQuery } from "react-query"
import { routesPublic } from "../services/routes/Public";
import { queryClient } from "../services/queryClient";


async function getVerifyCredential(){
  const { data } = await axios.get(routesPublic.verifyCredential)
  return data?.isAuthenticated || false
}

export default function useFetchVerifyCredential(){
  return useQuery<boolean>(["verify-credential"], getVerifyCredential)
}