import axios from "axios";
import { BASE_URL } from "../constant/config";


export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000 * 60 * 30 * 2 * 24 * 24 * 365, // 365days,
})