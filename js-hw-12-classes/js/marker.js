// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.
const refillBtn = document.querySelector(".marker__refill-btn");
const message = document.querySelector(".marker__message");
const input = document.querySelector(".marker__input");

export default class Marker {
  constructor(color, ink) {
    this.color = color;
    this.ink = parseInt(ink);
    this.written = "";
  }

  writeText(value) {
    input.style.color = this.color;

    const inputWithoutSpaces = value.replace(/ /g, "");

    if (
      !inputWithoutSpaces ||
      inputWithoutSpaces.length === this.written.length
    ) {
      return;
    } else {
      this.written = inputWithoutSpaces;
    }

    if (this.ink <= 0) {
      this.ink = 0;
      input.setAttribute("readonly", true);
      message.innerHTML = "Ink is over! Refill the marker.";
      return;
    } else {
      this.ink = this.ink - 0.5;
    }

    console.log("Ink left:", this.ink + "%");
  }
}

class RefillMarker extends Marker {
  constructor(color, ink) {
    super(color, ink);
  }
  refill() {
    this.ink = 100;
  }
}

// const marker = new Marker("red", "100%");
const refillMarker = new RefillMarker("red", "40%");

input.addEventListener("input", ({ target: { value }, inputType }) => {
  if (
    inputType !== "deleteContentBackward" &&
    inputType !== "deleteContentForward"
  ) {
    message.innerHTML = "";
    refillMarker.writeText(value);
  }
});

refillBtn.addEventListener("click", () => {
  refillMarker.refill();
  message.innerHTML = `Marker refilled up to ${refillMarker.ink}%. You can type again.`;
  input.removeAttribute("readonly");

  console.log("Refilled to", refillMarker.ink + "%");
});
