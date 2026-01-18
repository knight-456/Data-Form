import axios from "axios";
import { API_BASE_URL } from "@/config/index";

export const baseApiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const baseCredApiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return instance;
};
