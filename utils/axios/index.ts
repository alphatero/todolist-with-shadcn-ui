import Axios, { AxiosRequestConfig } from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_MOCK_API_URL;

export const baseInstance = Axios.create({
  baseURL: apiUrl,
});

export const get = async (url: string, config?: AxiosRequestConfig) => {
  return baseInstance.get(url, config);
};
