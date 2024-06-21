import { loadingElement } from "../elements/loadingElement.js";

export const showLoader = (elem) => {
  elem.insertAdjacentHTML("afterbegin", loadingElement);
};
