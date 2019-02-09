import axios from "axios";
const API_KEY = "abe46f9f1077dc11bfde99ab573e0dcb";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchweather(city) {
  const url = `${ROOT_URL}&q=${city},EG`;
  const request = axios.get(url);
  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}
