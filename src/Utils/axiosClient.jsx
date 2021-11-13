import axios from "axios";
import TokenService from "../Services/services.token";
import { useHistory } from "react-router";

export const axiosClient = axios.create({
  baseURL: "https://engspace-be-ff5wy.ondigitalocean.app/api",
});

axiosClient.interceptors.request.use((config) => {
  const token = TokenService.getLocalAccessToken();
  if (token) {
    config.headers.common.Authorization = "Bearer " + token;
  }
  return config;
});


axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const history = useHistory();
    const originalConfig = err.config;

    if (originalConfig.url !== "/users/login/" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosClient.post("/users/login/refresh/", {
            refresh: TokenService.getLocalRefreshToken(),
          });

          const { access } = rs.data;
          TokenService.updateLocalAccessToken(access);

          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    if(originalConfig.url === "/users/login/refresh/" && err.response && err.response.data.code){
      TokenService.removeUser();
      history.push("/signin")
    }

    return Promise.reject(err);
  }
);
