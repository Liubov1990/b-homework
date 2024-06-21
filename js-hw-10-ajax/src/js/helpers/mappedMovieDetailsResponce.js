export const mappedMovieDetailsResponce = ({
  id,
  adult,
  backdrop_path: backdropPath,
  genres: initialGenres,
  homepage,
  overview,
  popularity,
  poster_path: posterPath,
  production_companies: initialProductionCompanies,
  production_countries: initialPproductionCountries,
  release_date: releaseDate,
  revenue,
  status,
  tagline,
  title,
  vote_average: voteAverage,
  vote_count: voteCount,
}) => {
  const genres = initialGenres.map(({ name }) => ({
    name,
  }));
  const productionCompanies = initialProductionCompanies.map(({ name }) => ({
    name,
  }));
  const productionCountries = initialPproductionCountries.map(({ name }) => ({
    name,
  }));

  return {
    id,
    adult,
    genres,
    backdropPath,
    homepage,
    overview,
    popularity,
    posterPath,
    productionCompanies,
    productionCountries,
    releaseDate,
    revenue,
    status,
    tagline,
    title,
    voteAverage,
    voteCount,
  };
};
