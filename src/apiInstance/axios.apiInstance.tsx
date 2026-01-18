import { axiosAuthInterceptor } from "@/interceptors/axios.interceptor";
import { baseCredApiInstance } from "./base";

export { baseApiInstance, baseCredApiInstance } from "./base";

export const baseAuthApiInstance = () => {
  const instance = baseCredApiInstance();
  axiosAuthInterceptor(instance);
  return instance;
};