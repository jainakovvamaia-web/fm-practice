import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";
interface IGetResponse {
  message: string;
  data: IData[];
}

interface IData {
  club_name: string;
  salary: number;
  full_name: string;
  image: string;
}

export const useGetHighestSalaries = () =>
  useQuery({
    queryKey: ["teamsGetHighestSalaries"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/player/highest-salaries");
      return response.data.data;
    },
  });
