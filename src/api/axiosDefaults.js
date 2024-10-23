/* File to contain the Axios base and create the
   axiosReq and axiosRes */

import axios from "axios";
import { toast } from "react-hot-toast";
// import { getCookie } from "../utils/utils"

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

axios.defaults.baseURL =
  "https://cnp1906-shotcall-production.developer24x7.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

const csrfToken = getCookie("csrftoken") ? getCookie("csrftoken") : null;

// Create headers object with or without the Authorization header
const csrfHeader = {};
if (csrfToken) {
  csrfHeader["X-CSRFToken"] = csrfToken;
}

// For Protect API route use this api instance of axios
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    ...csrfHeader,
  },
  withCredentials: true,
});
export const axiosInstanceFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    ...csrfHeader,
  },
  withCredentials: true,
});

// used when No Authorization token is required----------------------------------------------------------------
export const axiosInstanceNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ...csrfHeader,
  },
  withCredentials: true,
});
export const axiosInstanceNoAuthFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    ...csrfHeader,
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (result) => {
    return { success: true, data: result };
  },
  (error) => {
    console.log("INTERCEPTOR ERROR", error.response);
    if (error.response?.status === 440) {
      // toast.error(
      //   error?.response?.data?.detail || "Session timeout. Please signin again!"
      // );
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      window.location.href = `/signin`;
    }
    if (error?.response?.status === 401) {
      // toast.error(error?.response?.data?.detail || "Unauthenticated user!");
      // window.location.href = `/signin`;
      // toast.error("Session timeout. Please signin again!");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      // window.location.href = `/authcheck`;
      window.location.href = `/signin`;
    }
    return Promise.resolve({ success: false, error });
  }
);
axiosInstanceFormData.interceptors.response.use(
  (result) => {
    return { success: true, data: result };
  },
  (error) => {
    if (error?.response?.status === 401) {
      // toast.error("Session timeout. Please signin again!");
      return Promise.resolve({ success: false, error });
    }
    return Promise.resolve({ success: false, error });
  }
);
