import { useMutation } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IBody {
  image: string;
  full_name: string;
  age: number;
  salary: number;
  team_id: number | null;
  position: string;
}

export const useAddPlayers = () =>
  useMutation({
    mutationKey: ["create player"],
    mutationFn: async (body: IBody) => {
      const response = await Api.post("/player", body);
      return response.data;
    },
  });
