import { useQuery } from "react-query";
import { api } from "../services/api";


type User = {
    name: string;
};

export async function getUsers(): Promise<User> {
  const response = await api.get('/users')
  return response.data;
}

export function useUsers() {
  return useQuery(['users'], () => getUsers(), {
    staleTime: 0,
  })
}
