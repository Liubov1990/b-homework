// 1 Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.querySelector(".textarea");
  const text = document.querySelector(".text-content");
  let isEditMode = false;

  textarea.hidden = true;

  function blocksSwitcher(event, isTextStatic = true) {
    event.preventDefault();
    text.hidden = !isTextStatic;
    textarea.hidden = isTextStatic;
  }

  function editText(event) {
    const regExp = /\s+/g;
    const textWithoutWhitespaces = text.innerHTML.replace(regExp, " ").trim();

    const checkHotKey = event.metaKey || event.ctrlKey;
    const isModify = checkHotKey && event.code === "KeyE";
    const isSave = checkHotKey && event.code === "KeyS";
    const isEscape = event.code === "Escape";

    if (isModify) {
      blocksSwitcher(event, false);
      textarea.focus();
      textarea.innerHTML = textWithoutWhitespaces;
      isEditMode = true;
    }

    if (isSave) {
      blocksSwitcher(event);
      if (isEditMode) {
        text.innerHTML = textarea.value;
      }
      isEditMode = false;
    }

    if (isEscape) {
      blocksSwitcher(event);
      textarea.value = textWithoutWhitespaces;
      isEditMode = false;
    }
  }

  document.addEventListener("keydown", editText);
});

window.addEventListener("unload", function () {
  document.removeEventListener("keydown", editText);
});
