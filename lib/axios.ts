
import axios from "axios"
import { toast } from "react-toastify"
import auth from "./auth"

// Function to get the user's IP address
async function getUserIpAddress() {
  try {
    const response = await fetch("https://api64.ipify.org?format=json")
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.error("Error fetching IP address:", error)
    return null
  }
}

const publicPaths = ["/api/v1/account/register", "/api/v1/account/registerVerify", "/api/v1/account/sendOtp"]
const API_URL = "http://10.1.10.171:5001"

const config = {
  baseURL: API_URL,
  timeout: 300 * 1000,  //5 mins
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": API_URL
  }
}

const _axios = axios.create(config)

// Interceptor to add IP address to headers
_axios.interceptors.request.use(
  async function (config) {
    if (!publicPaths.includes(config.url)) {
      // Fetch user's IP address
      const userIpAddress = await getUserIpAddress()
      // Add user's IP address to the headers
      if (userIpAddress) {
        config.headers["X-User-IP"] = userIpAddress
      }

      config.headers.Authorization = `Bearer ${auth.accessToken}`
    }
    return config
  },
  // function (error) {
  //   return Promise.reject("خطایی رخ داده است، دوباره تلاش کنید.")
  // }
)

_axios.interceptors.response.use(
  next => {
    return Promise.resolve(next)
  },
  error => {
    if (error?.response?.status === 401) {
      if (!auth.isLoggedIn) return auth.logout()
      return auth
        .refresh()
        .then(() => {
          error.config.headers["Authorization"] = "Bearer " + auth.accessToken
          return axios.request(error.config)
        })
        .catch(e => {
          console.error(e)
        })
    } else {
     if (error?.data?.message) {
         toast.error(error?.data?.message)
     }
    }

    return Promise.reject("خطایی رخ داده است، دوباره تلاش کنید.")
  }
)

export default _axios
