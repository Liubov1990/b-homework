/* -------------- NORMAL ------------- */

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
//   -Для виведення часу на екран.
//   -Зміни часу на передану кількість секунд.
//   -Зміни часу на передану кількість хвилин.
//   -Зміни часу на передану кількість годин.
//   -Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

class Time {
  constructor() {
    this.initialTime;
    this.timeWithAddedSeconds;
    this.timeWithAddedMinutes;
    this.timeWithAddedHours;
  }

  getTime(time) {
    return time.toTimeString().slice(0, 8);
  }

  showTime() {
    const clock = document.querySelector(".clock");
    this.initialTime = new Date();
    const initialClock = this.getTime(this.initialTime);

    clock.innerHTML = `${initialClock}`;

    setInterval(() => this.showTime(), 1000);
  }

  addSeconds() {
    const clockSeconds = document.querySelector(".seconds");
    this.timeWithAddedSeconds = new Date(this.initialTime);
    this.timeWithAddedSeconds.setSeconds(
      this.timeWithAddedSeconds.getSeconds() + 10
    );

    clockSeconds.innerHTML = `${this.getTime(this.timeWithAddedSeconds)}`;
    setInterval(() => this.addSeconds(), 1000);
  }

  addMinutes() {
    const clockMinutes = document.querySelector(".minutes");
    this.timeWithAddedMinutes = new Date(this.initialTime);
    this.timeWithAddedMinutes.setMinutes(
      this.timeWithAddedMinutes.getMinutes() + 10
    );

    clockMinutes.innerHTML = `${this.getTime(this.timeWithAddedMinutes)}`;
    setInterval(() => this.addMinutes(), 1000);
  }

  addHours() {
    const clockHours = document.querySelector(".hours");
    this.timeWithAddedHours = new Date(this.initialTime);
    this.timeWithAddedHours.setHours(this.timeWithAddedHours.getHours() + 10);

    clockHours.innerHTML = `${this.getTime(this.timeWithAddedHours)}`;
    setInterval(() => this.addHours(), 1000);
  }
}

const time = new Time();

time.showTime();
time.addSeconds();
time.addMinutes();
time.addHours();
