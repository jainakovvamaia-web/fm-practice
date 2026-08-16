import { useQuery } from "@tanstack/react-query";
import { Api } from "../api/api";

interface IGetResponse {
  message: string;
  data: IBody[];
}
interface IBody {
  id: number;
  image: string;
  full_name: string;
  age: number;
  salary: number;
  team_id: number | null;
  position: string;
  cerated_at: string;
}

export const useGetPlayers = () =>
  useQuery({
    queryKey: ["player"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/player");
      return response.data.data;
    },
  });
