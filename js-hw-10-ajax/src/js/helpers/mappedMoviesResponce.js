export const mappedMoviesResponse = (data) => {
  const {
    page,
    results: initialResults,
    total_pages: totalPages,
    total_results: totalResults,
  } = data;
  const results = initialResults.map(
    ({ id, overview, poster_path: posterPath, title }) => ({
      id,
      overview,
      posterPath,
      title,
    })
  );
  return { page, results, totalPages, totalResults };
};
