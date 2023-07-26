/* File to contain the Axios base and create the
   axiosReq and axiosRes */
import axios from "axios"
import { getCookie } from "../utils/utils"

axios.defaults.baseURL = "http://dev81.developer24x7.com:9100/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true

export const axiosReq = axios.create()
export const axiosRes = axios.create()

const csrfToken = getCookie("csrftoken")

// Create headers object with or without the Authorization header
const csrfHeader = {}
if (csrfToken) {
  csrfHeader["X-CSRFToken"] = csrfToken
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
})
export const axiosInstanceFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    ...csrfHeader,
  },
  withCredentials: true,
})

// used when No Authorization token is required----------------------------------------------------------------
export const axiosInstanceNoAuth = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ...csrfHeader,
  },
  withCredentials: true,
})
export const axiosInstanceNoAuthFormData = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    ...csrfHeader,
  },
  withCredentials: true,
})
