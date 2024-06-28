// Середній рівень:

// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу. Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class. Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

// getCurrentDate
// getCurrentDateTime
// deleteClock
// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті

// 3 кнопка — видаляє годинник зі «стіни» годинників

import { timezonesList } from "./constants.js";

const addClockForm = document.querySelector(".world-clock__form");

addClockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputTimezone = document.querySelector(
    ".world-clock__search-input"
  )?.value;

  if (timezonesList.includes(inputTimezone)) {
    new WorldClock(inputTimezone);
  } else {
    alert("In order to create clock, enter timezone correctly please!");
  }
});

export default class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockElement = document.createElement("div");
    this.clockElement.classList.add("world-clock__clock-item");
    this.render();
    this.addClicksListener();
  }

  addClicksListener() {
    this.clockElement.addEventListener("click", (event) => {
      const { target } = event;

      if (target.closest(".world-clock__show-date-btn")) {
        this.getCurrentDateData();
      } else if (target.closest(".world-clock__show-date-time-btn")) {
        this.getCurrentDateData(true);
      } else if (target.closest(".world-clock__delete-btn")) {
        this.deleteClock();
      }
    });
  }

  getCurrentDateData(withTime) {
    const options = [
      "uk-Ua",
      {
        timeZone: this.timezone,
      },
    ];
    let date;

    if (withTime) {
      date = new Date().toLocaleString(...options);
    } else {
      date = new Date().toLocaleDateString(...options);
    }
    this.clockElement.querySelector(".world-clock__clock").textContent = date;
  }

  deleteClock() {
    this.clockElement.remove();
  }

  render() {
    this.clockElement.innerHTML = `
    <p>${this.timezone}</p>
    <div class="world-clock__clock"></div>
      <div class="world-clock__handle-buttons">
        <button type="button" class="world-clock__show-date-btn">
          Show date
        </button>
        <button type="button" class="world-clock__show-date-time-btn">
          Show date and time
        </button>
        <button type="button" class="world-clock__delete-btn">
          Delete clock
        </button>
      </div>`;

    document
      .querySelector(".world-clock__clocks-block")
      .appendChild(this.clockElement);
  }
}
