class State {
  #actualPage = 1;
  #simulatedPage = 1;
  #currentResults = [];
  #totalResults = 0;
  #searchQuery = "";
  #pageElementsAmount = 10;

  get actualPage() {
    return this.#actualPage;
  }
  get simulatedPage() {
    return this.#simulatedPage;
  }
  get currentResults() {
    return this.#currentResults;
  }
  get totalResults() {
    return this.#totalResults;
  }
  get searchQuery() {
    return this.#searchQuery;
  }
  get pageElementsAmount() {
    return this.#pageElementsAmount;
  }

  updateActualPage(value) {
    this.#actualPage = value;
  }
  updateSimulatedPage(value) {
    this.#simulatedPage = value;
  }
  updateCurrentResults(value) {
    this.#currentResults = value;
  }
  updateTotalResults(value) {
    this.#totalResults = value;
  }
  updateSearchQuery(value) {
    this.#searchQuery = value;
  }
}

const stateStore = new State();

export { stateStore };
