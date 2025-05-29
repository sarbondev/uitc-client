import { API_URL } from "../lib/config";

export const BASE_URL = API_URL;

export const fetcher = (url) =>
  fetch(`${BASE_URL}${url}`).then((res) => res.json());
