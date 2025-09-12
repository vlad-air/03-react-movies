import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

interface FetchMoviesParams {
  query: string;
}

interface TMDBResponse {
  results: Movie[];
}

export const fetchMovies = async ({
  query,
}: FetchMoviesParams): Promise<TMDBResponse> => {
  const response = await axios.get<TMDBResponse>(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWRmODI2NmNmZjkxZGMxZGFmZjc0NDUzMTQyMDc3MCIsIm5iZiI6MTc1NzY4NjQ2MS44NDMwMDAyLCJzdWIiOiI2OGM0MmFiZGU3NDc0NDJhZTgyYTA4YzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NEHPJBU9jAo_FYCzNvxvA3ySat0lS9BjdboWXD39ZhI`,
    },
  });

  return response.data;
};
