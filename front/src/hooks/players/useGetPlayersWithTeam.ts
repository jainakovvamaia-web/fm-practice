import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IData[];
}

interface IData {
  image: string;
  age: number;
  full_name: string;
  club_name: string;
  id: number;
  country: string;
  salary: number;
  position: string;
}

export const useGetPlayersWithTeam = () =>
  useQuery({
    queryKey: ["playersWithTeam"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/player/with-team");
      return response.data.data;
    },
  });
