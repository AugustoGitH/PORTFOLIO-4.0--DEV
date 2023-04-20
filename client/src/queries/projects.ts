import axios from "axios";
import { routesPublic } from "../services/routes/Public";
import { useQuery } from "react-query";
import { queryClient } from "../services/queryClient";
import { TProject } from "../types/Project";

async function getProjects(){
  const { data } = await axios.get(routesPublic.getProjects)
  return data?.data?.projects || null
}

export default function useFetchProjects(){
  return useQuery<TProject[]>(["projects"], getProjects, {
    initialData: queryClient.getQueryData(["projects"]),
    staleTime: 1000 * 60 // 1 minuto
  })
}