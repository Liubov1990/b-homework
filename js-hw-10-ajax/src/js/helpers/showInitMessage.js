import { movies } from "../constants/selectors.js";

export const showInitMessage = () => {
  movies.innerHTML = "No movies yet!";
};
