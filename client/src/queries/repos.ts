import axios from "axios";
import { routesAdmin } from "../services/routes/Admin";
import { useQuery } from "react-query";
import { TRepositorie } from "../types/Repositorie";
import { queryClient } from "../services/queryClient";


async function getRepos(){
  const { data } =  await axios.get(routesAdmin.getRepositories)
  return data?.data?.repositories
}

export default function useFetchRepos(){
  return useQuery<TRepositorie[]>(["repositories"], getRepos, {
    initialData: queryClient.getQueryData(["repositories"]),
    staleTime: 1000 * 60 // 1 minuto
  })
}