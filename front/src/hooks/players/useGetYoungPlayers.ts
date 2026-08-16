import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IData[];
}

interface IData {
  club_name: string;
  full_name: string;
  image: string;
  age: number;
  position: string;
}

export const useGetYoungPlayers = () =>
  useQuery({
    queryKey: ["teamsYoungPlayers"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/player/young-players");
      return response.data.data;
    },
  });
