import { movies } from "../constants/selectors.js";

export const showNotFoundMessage = () => {
  movies.innerHTML = "Movies not found!";
};
