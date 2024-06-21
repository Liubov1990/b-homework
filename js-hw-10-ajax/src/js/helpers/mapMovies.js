import { movieCardElement } from "../elements/movieCardElement.js";
import { fetchMovieDetails } from "./fetchMovieDetails.js";
import { movies } from "../constants/selectors.js";

export const mapMovies = (moviesToAdd) => {
  const moviesMarkup = moviesToAdd
    .map((movieItem) => {
      const movieCard = movieCardElement(movieItem);
      return movieCard;
    })
    .join("");

  movies.insertAdjacentHTML("beforeend", moviesMarkup);

  const detailsBtns = document.querySelectorAll(".details-btn");
  detailsBtns.forEach((button) => {
    button.addEventListener("click", fetchMovieDetails);
  });
};
