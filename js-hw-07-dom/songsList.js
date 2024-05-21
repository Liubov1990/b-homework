// Створити сторінку, що показує нумерований список пісень.

import data from "./data.json" with {type: "json"};

window.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("div");
  const list = document.createElement("ol");

  data.forEach((item) => {
    let li = document.createElement("li");

    li.innerHTML = `${item.author} - ${item.song}`;
    li.classList.add("songs-item");
    list.appendChild(li);
  });

  list.classList.add("songs-list");
  container.append(list);
  document.body.append(container);
});
