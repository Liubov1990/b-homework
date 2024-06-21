import { stateStore } from "./state.js";
import { resetNodesContent } from "./resetNodesContent.js";
import { createPaginationBtnElement } from "../elements/createPaginationBtnElement.js";
import { handlePagination } from "./handlePagination.js";
import { pagination } from "../constants/selectors.js";

export const mapPagination = () => {
  const totalPages = Math.ceil(
    stateStore.totalResults / stateStore.pageElementsAmount
  );
  const isOnePage = totalPages <= 1;

  resetNodesContent(pagination);

  const prevBtnClass = `page-link prev ${
    isOnePage || stateStore.simulatedPage === 1 ? "disabled" : ""
  }`;
  const prevBtn = createPaginationBtnElement(
    "page-item",
    prevBtnClass,
    "Previous",
    handlePagination
  );
  pagination.appendChild(prevBtn);

  Array.from({ length: totalPages }, (_, index) => index + 1).forEach(
    (page) => {
      const paginationBtnClass = `page-link page-item-link ${
        page === stateStore.simulatedPage ? "active" : ""
      }`;
      const paginationBtn = createPaginationBtnElement(
        "page-item",
        paginationBtnClass,
        page,
        handlePagination
      );
      pagination.appendChild(paginationBtn);
    }
  );

  const nextBtnClass = `page-link next ${
    isOnePage || stateStore.simulatedPage === totalPages ? "disabled" : ""
  }`;
  const nextBtn = createPaginationBtnElement(
    "page-item",
    nextBtnClass,
    "Next",
    handlePagination
  );
  pagination.appendChild(nextBtn);
};
