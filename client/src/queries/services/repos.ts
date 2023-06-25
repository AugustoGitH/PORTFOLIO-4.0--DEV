import axios from "axios";
import { useQuery } from "react-query";
import keysQuery from "../constants/keysQuery";
import { TRepositorie } from "../../types/Repositorie";
import { queryClient } from "../../services/queryClient";
import { routesAdmin } from "../../services/routes/Admin";

async function getRepos() {
  const { data } = await axios.get(routesAdmin.getRepositories);
  return data?.data?.repositories;
}

export default function useFetchRepos() {
  return useQuery<TRepositorie[]>([keysQuery.REPOSITORIES], getRepos, {
    initialData: queryClient.getQueryData([keysQuery.REPOSITORIES]),
    staleTime: 1000 * 60, // 1 minuto
  });
}
