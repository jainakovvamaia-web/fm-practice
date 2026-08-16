import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IData[];
}

interface IData {
  club_name: string;
  avg_salary: number;
  count_players: number;
  total_salary: number;
  country: string;
  stadium: string;
}

export const useGetClubStatistics = () =>
  useQuery({
    queryKey: ["teamsGetClubStatistics"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/team/club-statistics");
      return response.data.data;
    },
  });
