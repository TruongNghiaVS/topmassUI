import { HOST_API } from "@/config-global";
import axios, { AxiosRequestConfig } from "axios";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.response.use((response) => response.data);

axiosInstance.interceptors.request.use((config: any) => {
  const token = window?.localStorage?.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};
