import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IBody[];
}

interface IBody {
  id: number;
  club_name: string;
  country: string;
  founded_year: number;
  stadium: string;
  created_at: string;
}

export const useGetTeams = () =>
  useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/team");
      return response.data.data;
    },
  });
