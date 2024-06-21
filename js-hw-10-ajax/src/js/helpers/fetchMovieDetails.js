import { getMovieDetailsRequest } from "../resources/index.js";
import { movieDetailsElement } from "../elements/movieDetailsElement.js";
import { details } from "../constants/selectors.js";
import { resetNodesContent } from "./resetNodesContent.js";
import { showLoader } from "./showLoader.js";

const showMovieDetails = (movieDetails) => {
  const movieDetailsMarkup = movieDetailsElement(movieDetails);

  details.insertAdjacentHTML("beforeend", movieDetailsMarkup);
};

export const fetchMovieDetails = async (event) => {
  event.preventDefault();
  const target = event.target;
  const cardId = target.closest(".card").getAttribute("data-id");

  resetNodesContent(details);
  showLoader(details);

  const movieDetails = await getMovieDetailsRequest(cardId);
  resetNodesContent(details);
  showMovieDetails(movieDetails);
  details.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
