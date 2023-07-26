/* File to contain the Axios base and create the
   axiosReq and axiosRes */
import axios from "axios"

axios.defaults.baseURL = "http://dev81.developer24x7.com:9100/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true

export const axiosReq = axios.create()
export const axiosRes = axios.create()

// For Protect API route use this api instance of axios
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  // withCredentials: true,
})
export const axiosInstanceFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
})

// used when No Authorization token is required----------------------------------------------------------------
export const axiosInstanceNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})
export const axiosInstanceNoAuthFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
})
