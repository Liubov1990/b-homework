// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table");

  function sortTable(colNum, type) {
    let tbody = table.querySelector("tbody");
    let rowsArray = [...tbody.rows];
    let compare;

    switch (type) {
      case "number":
        compare = function (rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case "string":
        compare = function (rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
            ? 1
            : -1;
        };
        break;
    }

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }

  function runSortTable(event) {
    if (event.target.tagName != "TH") return;
    let th = event.target;

    sortTable(th.cellIndex, th.dataset.type);
  }

  table.addEventListener("click", runSortTable);
  table.removeEventListener("unload", runSortTable);
});
