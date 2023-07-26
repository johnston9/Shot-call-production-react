/* File to contain the Axios base and create the
   axiosReq and axiosRes */
import axios from "axios"

axios.defaults.baseURL = "http://dev81.developer24x7.com:9100/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true

export const axiosReq = axios.create()
export const axiosRes = axios.create()
