import { api } from "../services/api.js";
import { TMDB_BASE_API_URL } from "../constants/api.js";
import { mappedMoviesResponse } from "../helpers/mappedMoviesResponce.js";
import { mappedMovieDetailsResponce } from "../helpers/mappedMovieDetailsResponce.js";

export async function getMoviesByNameRequest({ page, name }) {
  const data = await api.get(
    `${TMDB_BASE_API_URL}/search/movie?query=${name}&page=${page}`
  );
  return mappedMoviesResponse(data);
}

export async function getMovieDetailsRequest(id) {
  const data = await api.get(`${TMDB_BASE_API_URL}/movie/${id}`);
  return mappedMovieDetailsResponce(data);
}
