import { pagination } from "../constants/selectors.js";
import { fetchMovies } from "./fetchMovies.js";
import { stateStore } from "./state.js";

export const handlePagination = (event) => {
  const chosenPageLabel = event.target.textContent;
  const nextPrevCounters = {
    Previous: stateStore.simulatedPage - 1,
    Next: stateStore.simulatedPage + 1,
  };
  const chosenPage =
    nextPrevCounters[chosenPageLabel] || Number(chosenPageLabel);

  if (chosenPage === stateStore.simulatedPage) {
    return;
  }

  stateStore.updateSimulatedPage(chosenPage);
  stateStore.updateActualPage(Math.ceil(chosenPage / 2));

  if (chosenPage % 2 === 0) {
    return fetchMovies(null, true);
  }

  fetchMovies();
};
