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
  id: number;
  salary: number;
  position: string;
}

// export const useGetFreeAgents = () =>
//   useQuery({
//     queryKey: ["free agents"],
//     queryFn: async () => {
//       const response = await Api.get<IGetResponse>("/player/free-agents");
//       return response.data.data;
//     },
//   });


export const useGetFreeAgents = () =>
  useQuery({
    queryKey: ["free agents"],
    queryFn: async () => {
      const response = await Api.get("/player/free-agents");
      return response.data.data ?? [];
    },
  });