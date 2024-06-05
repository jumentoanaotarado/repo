import { useQuery } from "react-query";
import { api } from "../../services/api";
import { useRouter } from "next/router";

type User = {
  id: number;
  name: string;
  login: string;
  email: string;

}

export async function getMe(): Promise<User> {
  const response = await api.get('user/me')
  return response.data;
}

export function useMe() {
  const router = useRouter();
  return useQuery(['me'], async () => getMe(), {
    onError: () => {
      router.push("/user")
    },
    enabled: router.pathname !== '/',
    retry: false
  });
}
