import axios from "axios";
import { useQuery } from "react-query";
import keysQuery from "../constants/keysQuery";
import { TProject } from "../../types/Project";
import { queryClient } from "../../services/queryClient";
import { routesPublic } from "../../services/routes/Public";

async function getProjects() {
  const { data } = await axios.get(routesPublic.getProjects);
  return data?.data?.projects || null;
}

export default function useFetchProjects() {
  return useQuery<TProject[]>([keysQuery.PROJECTS], getProjects, {
    initialData: queryClient.getQueryData([keysQuery.PROJECTS]),
    staleTime: 1000 * 60, // 1 minuto
  });
}
