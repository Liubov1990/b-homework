import { setCookie, getCookie } from "./utils/cookie.js";
import { resetNodesContent } from "./helpers/resetNodesContent.js";
import { getForecastRequest } from "./resources/index.js";
import { loader } from "./templates/loader.js";
import { messageNotFound } from "./templates/messageNotFound.js";
import { weatherWidget } from "./templates/weatherWidget.js";

const weatherElem = document.querySelector(".weather");
const form = document.querySelector("#search-form");

const setWeather = (event) => {
  event.preventDefault();
  const { value } = event.target.querySelector("#city");
  const isCashedReq = getCookie("forecast");

  if (isCashedReq) {
    const forecastFromStorage = JSON.parse(localStorage.getItem("forecast"));
    displayWeather(forecastFromStorage);
  } else {
    fetchWeather(value);
    //   event.target.querySelector("#city").value = "";
  }
};

const fetchWeather = async (city) => {
  resetNodesContent(weatherElem);

  weatherElem.insertAdjacentHTML("afterBegin", loader);
  const weatherData = await getForecastRequest(city);

  if (weatherData.message === "city not found") {
    resetNodesContent(weatherElem);
    weatherElem.insertAdjacentHTML("afterBegin", messageNotFound);
  } else {
    resetNodesContent(weatherElem);
    displayWeather(weatherData);

    setCookie("forecast", true, 2);
    localStorage.setItem("forecast", JSON.stringify(weatherData));
  }
};

const displayWeather = (weatherData) => {
  resetNodesContent(weatherElem);

  if (weatherData) {
    const weatherMarkup = weatherWidget(weatherData);
    weatherElem.insertAdjacentHTML("afterbegin", weatherMarkup);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", setWeather);
});
