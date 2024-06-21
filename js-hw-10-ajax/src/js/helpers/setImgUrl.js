import { TMDB_IMAGES_BASE_URL } from "../constants/api.js";

export const setmageUrl = (data) =>
  data.posterPath
    ? `${TMDB_IMAGES_BASE_URL}${data.posterPath}`
    : "assets/images/no-cover-img.jpg";
