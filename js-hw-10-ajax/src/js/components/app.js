import { showInitMessage } from "../helpers/showInitMessage.js";
import { fetchMovies } from "../helpers/fetchMovies.js";

document.addEventListener("DOMContentLoaded", function () {
  showInitMessage();

  const form = document.querySelector("#search-form");
  form.addEventListener("submit", fetchMovies);
});

//////////////////////////////////////////////////////////////////////////
// ---------------------- BEFORE REFACTORING -------------------------- //
//////////////////////////////////////////////////////////////////////////

// // SHOW WHEN NO MOVIES
// const initMessage = () => {
//   movies.innerHTML = "No movies yet!";
// };

// window.addEventListener("load", initMessage);

// // FETCH MOVIES
// const form = document.querySelector("#search-form");

// let actualPage = 1;
// let simulatedPage = 1;
// let currentResults = [];
// let totalResults = 0;
// let searchQuery = "";
// const pageElementsAmount = 10;

// const fetchMovies = async (event, isSimulatedPagination = false) => {
//   if (event) {
//     event.preventDefault();
//     const { value } = event.target.querySelector("#movie-title");
//     searchQuery = value;
//   }

//   const moviesList = await getMoviesByNameRequest({
//     page: actualPage,
//     name: searchQuery,
//   });

//   if (moviesList.totalResults === 0) {
//     movies.innerHTML = "Movie not found!";
//     event.target.querySelector("#movie-title").value = "";
//   } else {
//     currentResults = moviesList.results;
//     totalResults = moviesList.totalResults;

//     resetNodesContent(movies, details);

//     const moviesToMap = !isSimulatedPagination
//       ? currentResults.slice(0, 10)
//       : currentResults.slice(10);
//     mapMovies(moviesToMap);
//     mapPagination();
//   }
// };

// const createPaginationBtn = (wrapperClass, btnClass, btnText, callback) => {
//   const btnWrapper = document.createElement("li");
//   btnWrapper.className = wrapperClass;
//   const btnComponent = document.createElement("button");
//   btnComponent.addEventListener("click", callback);
//   btnComponent.className = btnClass;
//   btnComponent.innerHTML = btnText;
//   return btnWrapper.appendChild(btnComponent);
// };

// const handlePagination = (event) => {
//   const chosenPage = Number(event.target.textContent);

//   if (chosenPage === actualPage) {
//     return;
//   }

//   simulatedPage = chosenPage;
//   actualPage = Math.ceil(chosenPage / 2);

//   if (chosenPage % 2 === 0) {
//     return fetchMovies(null, true);
//   }

//   fetchMovies();
// };

// const mapPagination = () => {
//   const pagination = document.querySelector(".pagination");
//   const totalPages = Math.ceil(totalResults / pageElementsAmount);

//   pagination.innerHTML = "";

//   Array.from({ length: totalPages }, (_, index) => index + 1).forEach(
//     (page) => {
//       const paginationBtnClass = `page-link page-item-link ${
//         page === simulatedPage ? "active" : ""
//       }`;
//       const paginationBtn = createPaginationBtn(
//         "page-item",
//         paginationBtnClass,
//         page,
//         handlePagination
//       );
//       pagination.appendChild(paginationBtn);
//     }
//   );

//   const prevBtn = document.createElement("li");
//   prevBtn.classList.add("page-item");
// };

// form.addEventListener("submit", fetchMovies);

// // SHOW MOVIES

// const movies = document.querySelector(".movies");

// const mapMovies = (moviesToAdd) => {
//   const moviesMarkup = moviesToAdd
//     .map((movieItem) => {
//       const movieCard = movieCardElement(movieItem);
//       return movieCard;
//     })
//     .join("");

//   movies.insertAdjacentHTML("beforeend", moviesMarkup);

//   const detailsBtns = document.querySelectorAll(".details-btn");
//   detailsBtns.forEach((button) => {
//     button.addEventListener("click", fetchMovieDetails);
//   });
// };

// // FETCH DETAILS

// const fetchMovieDetails = async (event) => {
//   event.preventDefault();
//   const target = event.target;
//   const cardId = target.closest(".card").getAttribute("data-id");
//   details.innerHTML = "";
//   const movieDetails = await getMovieDetailsRequest(cardId);

//   showMovieDetails(movieDetails);
//   details.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
// };

// // SHOW DETAILS
// const details = document.querySelector(".movie-details");

// const showMovieDetails = (movieDetails) => {
//   const movieDetailsMarkup = movieDetailsElement(movieDetails);

//   details.insertAdjacentHTML("beforeend", movieDetailsMarkup);
// };
