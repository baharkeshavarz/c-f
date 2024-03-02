import axios from "../../lib/axios"

const getProfileData = () => {
  return axios.get("/api/v1/account/getProfile")
}

const profileServices = { getProfileData }

export default profileServices
