import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://infusa-api.onrender.com/"
})