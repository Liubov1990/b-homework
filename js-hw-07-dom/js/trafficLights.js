// 3. Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const colorsIndexes = {
  0: "red",
  1: "yellow",
  2: "green",
};

document.addEventListener("DOMContentLoaded", function () {
  const switchColorsBtn = document.querySelector("#traffic-lights-btn");
  let colorIndex = 0;

  const setColor = () => {
    const allLights = document.querySelectorAll(".light");

    allLights.forEach((lightNode) => {
      lightNode.className = "light";
    });

    allLights[colorIndex].classList.add(colorsIndexes[colorIndex]);
    colorIndex = colorIndex === 2 ? 0 : ++colorIndex;
  };

  switchColorsBtn.addEventListener("click", setColor);
});
