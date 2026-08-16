import { useMutation } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IBody {
  club_name: string;
  country: string;
  founded_year: number;
  stadium: string;
}

export const useAddTeams = () =>
  useMutation({
    mutationKey: ["create team"],
    mutationFn: async (body: IBody) => {
      const response = await Api.post("/team", body);
      return response.data;
    },
  });
