import { API_TOKEN } from "../constants/api.js";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${API_TOKEN}`,
};

async function request(url, options) {
  try {
    const response = await fetch(url, { headers, ...options });
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export const api = {
  get: (url) => request(url, { method: "GET" }),
};
