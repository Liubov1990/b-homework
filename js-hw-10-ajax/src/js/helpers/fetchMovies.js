import { stateStore } from "./state.js";
import { getMoviesByNameRequest } from "../resources/index.js";
import { resetNodesContent } from "./resetNodesContent.js";
import { movies, details, pagination } from "../constants/selectors.js";
import { mapMovies } from "./mapMovies.js";
import { mapPagination } from "./mapPagination.js";
import { showNotFoundMessage } from "./showNotFoundMessage.js";
import { showLoader } from "./showLoader.js";

export const fetchMovies = async (event, isSimulatedPagination = false) => {
  if (event) {
    event.preventDefault();
    const { value } = event.target.querySelector("#movie-title");
    stateStore.updateSearchQuery(value);
  }

  resetNodesContent(movies);
  showLoader(movies);

  const moviesList = await getMoviesByNameRequest({
    page: stateStore.actualPage,
    name: stateStore.searchQuery,
  });

  if (moviesList.totalResults === 0) {
    resetNodesContent(details, pagination);
    showNotFoundMessage();
    event.target.querySelector("#movie-title").value = "";
  } else {
    stateStore.updateCurrentResults(moviesList.results);
    stateStore.updateTotalResults(moviesList.totalResults);

    resetNodesContent(movies, details);

    const moviesToMap = !isSimulatedPagination
      ? stateStore.currentResults.slice(0, 10)
      : stateStore.currentResults.slice(10);
    mapMovies(moviesToMap);
    mapPagination();
  }
};
