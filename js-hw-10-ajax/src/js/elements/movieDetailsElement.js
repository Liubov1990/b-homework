import { setmageUrl } from "../helpers/setImgUrl.js";

export const movieDetailsElement = (movieDetails) => {
  const imageUrl = setmageUrl(movieDetails);

  const isGanre = movieDetails.genres?.length;

  const ganre =
    isGanre &&
    movieDetails.genres
      .map((ganre) => {
        return ganre.name;
      })
      .join(", ");

  return `<div id=${movieDetails.id} data-id=${
    movieDetails.id
  } class="row row-cols-md-auto d-flex py-3 mb-5 bg-dark">
        <div class="d-flex align-items-center justify-content-center col-md-4 col-12">
            <img src="${imageUrl}" class="object-fit-cover w-100 mt-2" alt="Movie poster">
        </div>
        <div class="d-flex flex-column card-body col-md-6 col-12 p-3 m-2">
            <h4 class="mb-3 card-title">${movieDetails.title}</h4>
            <span class="card-text">Genres: ${ganre || "-"}</span>
            <span class="card-text">Rating: ${
              movieDetails.voteAverage || "-"
            }</span>
            <span class="card-text">Release date: ${
              movieDetails.releaseDate || "-"
            }</span>
            <p class="mt-3 card-text">${movieDetails.overview}</p>
            <a href="${
              movieDetails.homepage
            }" target="blank" class="link-underline-success">${
    movieDetails.homepage && "See The movie"
  }
  </a>
        </div>
    </div>`;
};
