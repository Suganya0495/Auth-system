import axios from "axios";

const API = axios.create({
  baseURL: "https://Suganya3.pythonanywhere.com/api/",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("access");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// 🔄 AUTO REFRESH TOKEN
API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const refresh = localStorage.getItem("refresh");

    if (err.response?.status === 401 && refresh) {
      const res = await axios.post(
        "https://Suganya3.pythonanywhere.com/api/refresh/",
        { refresh }
      );

      localStorage.setItem("access", res.data.access);

      err.config.headers.Authorization = `Bearer ${res.data.access}`;
      return axios(err.config);
    }

    return Promise.reject(err);
  }
);

export default API;