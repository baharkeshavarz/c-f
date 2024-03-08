import axios from "../../lib/axios"

// Common Service
const getCountriesCode = () => {
  return axios.get("/api/v1/common/getCountryCodeList")
}

const getCountriesList = () => {
  return axios.get("/api/v1/common/getCountryList")
}

const getNationalityList = () => {
  return axios.get("/api/v1/common/getNationalityList")
}

const CommonServices = {
  getCountriesCode,
  getCountriesList,
  getNationalityList
}

export default CommonServices
