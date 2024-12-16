import axios, { AxiosError, AxiosInstance } from "axios";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie/cookie";

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

customAxios.interceptors.request.use((data) => {
  const token = getCookie("accessToken");
  const config = data;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const postRefreshToken = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const refreshToken = getCookie("refreshToken");
  const response = await axios.post(`${BASE_URL}/auth`, {
    refreshToken,
  });
  return response;
};

export const useAxiosInterceptor = () => {
  customAxios.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
      const { config, response } = error;
      const status = response?.status;

      if (status === 401) {
        const originRequest = config;
        try {
          const response = await postRefreshToken();
          if (response.status === 201) {
            const newAccessToken = response.data.accessToken;
            setCookie("accessToken", newAccessToken);
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            if (originRequest && originRequest.headers) {
              originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }
            if (originRequest) {
              return axios(originRequest);
            }
            throw new Error("originRequest is undefined");
          }
        } catch (refreshError: unknown) {
          if ((refreshError as AxiosError).response?.status === 401) {
            deleteCookie("refreshToken");
            deleteCookie("accessToken");
            alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요.");
          }
        }
      }
      return Promise.reject(error);
    },
  );
};
