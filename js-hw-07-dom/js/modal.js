// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector("#open");
  const closeButton = document.querySelector("#close");
  const overlay = document.querySelector(".overlay");

  const openModal = () => {
    overlay.style.display = "block";
  };

  const closeModal = () => {
    overlay.style.display = "none";
  };

  const closeModalThroughOverlay = (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  };

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", closeModalThroughOverlay);
});
