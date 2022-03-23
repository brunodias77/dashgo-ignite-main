import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

  const users = data.users.map((element) => {
    return {
      name: element.name,
      email: element.email,
      id: element.id,
      createdAt: new Date(element.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, { staleTime: 1000 * 5 });
}
