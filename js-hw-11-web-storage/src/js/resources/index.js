import { api } from "../services/api.js";
import { API_KEY, BASE_API_URL } from "../constants/api.js";

export async function getForecastRequest(city) {
  const data = await api.get(
    `${BASE_API_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  return data;
}
