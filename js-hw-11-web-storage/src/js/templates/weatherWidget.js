import { BASE_API_ICON_URL } from "../constants/api.js";
import { modifyTime } from "../utils/modifyTime.js";

export const weatherWidget = (weatherData) => {
  const iconUrl = `${BASE_API_ICON_URL}/${weatherData.weather[0].icon}.png`;
  const temperature = `${parseInt(weatherData.main.temp)}`;

  const unixTimestamp = `${weatherData.dt}`;
  const time = modifyTime(unixTimestamp);

  return `<div id={${weatherData.id} class="card-body p-4">
    <div class="d-flex">
      <h6 class="flex-grow-1">${weatherData.name}</h6>
      <h6> ${time} </h6>
    </div>
  
    <div class="d-flex flex-column text-center mt-5 mb-4">
      <h6 class="display-4 mb-0 font-weight-bold"> ${temperature}°C </h6>
      <span class="small" style="color: #868B94">${weatherData.weather[0].main}</span>
    </div>
  
    <div class="d-flex align-items-center">
      <div class="flex-grow-1" style="font-size: 1rem;">
        <div><i class="fas fa-wind" style="color: #868B94; font-family: 'FontAwesome';"></i> <span class="ms-1"> ${weatherData.wind.speed}m/s </span>
        </div>
        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${weatherData.main.humidity}% </span></div>
        <div><i class="fas fa-arrows-down-to-line fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${weatherData.main.pressure}mm </span></div>
      </div>
      <div>
      <img src="${iconUrl}" alt=${weatherData.weather[0].description} 
          width="70px">
      </div>
    </div>
  
  </div>`;
};
