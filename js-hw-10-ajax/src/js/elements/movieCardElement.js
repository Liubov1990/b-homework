import { setmageUrl } from "../helpers/setImgUrl.js";
import { tranqText } from "../helpers/tranqText.js";

export const movieCardElement = (movie) => {
  const imageUrl = setmageUrl(movie);

  const tranqOverview = tranqText(movie.overview);

  return `<div id=${movie.id} data-id=${movie.id} class="card" style="width: 14rem;">
    <img src="${imageUrl}" class="card-img-top object-fit-cover w-100 h-100 my-2" alt="Movie poster" style="max-height: 300px";>
        <div class="d-flex flex-column p-2 card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${tranqOverview}</p>
            <button type="button" class="btn btn-primary mb-2 mt-auto details-btn">Details</button>
        </div>
    </div>`;
};
