import axios from "axios";
export const HttpRequest = axios.create({
  baseURL: "http:localhost:8888",
  timeout: 1000 * 60,
});