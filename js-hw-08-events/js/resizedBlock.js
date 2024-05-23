// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container");
  const resiser = document.querySelector(".resizer");
  let isResizing = false;
  let initialX = 0;
  let initialY = 0;

  function setResizerTrue() {
    isResizing = true;
  }

  function changeContainerSize(event) {
    if (!isResizing) {
      return;
    }

    container.style.width = initialX + event.clientX + "px";
    container.style.height = initialY + event.clientY + "px";
  }

  function setResizerFalse() {
    isResizing = false;
  }

  resiser.addEventListener("mousedown", setResizerTrue);
  document.addEventListener("mousemove", changeContainerSize);
  document.addEventListener("mouseup", setResizerFalse);
});

window.addEventListener("unload", function () {
  resiser.removeEventListener("mousedown", setResizerTrue);
  document.removeEventListener("mousemove", changeContainerSize);
  document.removeEventListener("mouseup", setResizerFalse);
  return;
});
