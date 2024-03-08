import axios from "../../lib/axios"

// Common Service
const getCountriesCode = () => {
  return axios.get("/api/v1/common/getCountryCodeList")
}

const getCountriesList = () => {
  return axios.get("/api/v1/common/getCountryList")
}

const CommonServices = {
  getCountriesCode,
  getCountriesList
}

export default CommonServices
