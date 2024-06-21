async function request(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export const api = {
  get: (url) => request(url, { method: "GET" }),
};
