import { timezonesList } from "./constants.js";

export default class InputAutoComplete {
  constructor(timezonesList) {
    this.timezonesList = timezonesList;
    this.inputField = document.querySelector(".world-clock__search-input");
    this.ulField = document.querySelector(".world-clock__timezones-options");
  }

  changeAutoComplete() {
    this.inputField.addEventListener("input", ({ target }) => {
      const inputData = target.value;
      this.ulField.innerHTML = ``;

      if (inputData.length) {
        const autoCompleteValues = this.autoComplete(inputData);
        autoCompleteValues.forEach((value) => {
          this.addItem(value);
        });
      }
    });
  }

  autoComplete(inputValue) {
    return this.timezonesList.filter((value) =>
      value.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  addItem(value) {
    this.ulField.innerHTML =
      this.ulField.innerHTML +
      `<li class="world-clock__timezones-option">${value}</li>`;
  }

  selectItem() {
    this.ulField.addEventListener("click", ({ target }) => {
      if (target.closest(".world-clock__timezones-option")) {
        this.inputField.value = target.textContent;
        this.ulField.innerHTML = ``;
      }
    });
  }
}

const inputAutoComplete = new InputAutoComplete(timezonesList);
inputAutoComplete.changeAutoComplete();
inputAutoComplete.selectItem();
