// Середній рівень:

// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу. Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class. Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

// getCurrentDate
// getCurrentDateTime
// deleteClock
// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті

// 3 кнопка — видаляє годинник зі «стіни» годинників
//////////////////////////////////////////////////////////////////////////////////////////

const searchInput = document.querySelector(".world-clock__search");
const addClockBtn = document.querySelector(".world-clock__add-btn");
const clockContainer = document.querySelector(".world-clock__clocks-block");
const showTimeBtn = document.querySelector(".world-clock__show-time-btn");
const showDateTimeBtn = document.querySelector(
  ".world-clock__show-date-time-btn"
);
const deleteClockBtn = document.querySelector(".world-clock__delete-btn");

// const clockItem = `<div class="world-clock__clocks-item">
// <div class="world-clock__clock">${}</div>
// <div class="world-clock__handle-buttons">
//   <button type="button" class="world-clock__show-time-btn">
//     Show time
//   </button>
//   <button type="button" class="world-clock__show-date-time-btn">
//     Show date and time
//   </button>
//   <button type="button" class="world-clock__delete-btn">
//     Delete clock
//   </button>
// </div>
// </div>`;
export default class Clock {
  constructor(timezone) {
    this.timezone = timezone;
  }
  getCurrentDate() {}
  getCurrentDateTime() {}
  deleteClock() {}
}

const clock1 = new Clock();
