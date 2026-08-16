import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IData[];
}

interface IData {
  id: number;
  club_name: string;
  sum: number;
  count: number;
  avg: number;
  country: string;
}

export const useGetLargeTeams = () =>
  useQuery({
    queryKey: ["teamsGetLarge"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/team/large-squads");
      return response.data.data;      
    },
  });
