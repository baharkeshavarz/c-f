import { create } from "zustand"
import authentication from "../services/authentication"

const useAuthenticationStore = create(set => ({
  doLogin: (phoneNumber: string) => {
    return authentication.doLogin(phoneNumber)
  },
  doRegister: (userData: any) => {
    return authentication.doRegister(userData)
  },
  doVerifyLogin: (data: any) => {
    return authentication.verifyLogin(data)
  },
  doVerifyRegister: (data: any)  => {
    return authentication.verifyRegister(data)
  },
  resendRegisterOtp: (number: string)  => {
    return authentication.resendRegisterOtp(number)
  },
  doLogout: (token: string) => {
    return authentication.doLogout(token)
  },
  refreshToken: (token: string) => {
    return authentication.refreshToken(token)
  }
}))

export default useAuthenticationStore
