export const BASE_URL = "http://localhost:5000/api";

export const fetcher = (url) =>
  fetch(`${BASE_URL}${url}`).then((res) => res.json());
