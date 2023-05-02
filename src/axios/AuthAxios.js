import axios from "axios";

export const AuthAxios = axios.create({
  baseURL: "https://api.darwinstech.com/api/",
    headers: {
      Accept: "application/json",
      Authorization: localStorage.getItem("token"),
    },
});

// AuthAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = token;
//       config.headers.Accept = "application/json";
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );

// AuthAxios.interceptors.response
