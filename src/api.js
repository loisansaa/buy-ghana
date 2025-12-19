import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
console.log("API URL:", import.meta.env.VITE_API_BASE_URL);

export default api;
export { api };


