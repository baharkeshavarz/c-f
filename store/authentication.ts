import { create } from "zustand"
import authentication from "../services/authentication"

interface AuthenticationState {
  doLogin: (phoneNumber: string) => Promise<any>
  doRegister: (userData: any) => Promise<any>
  doVerifyLogin: (data: any) => Promise<any>
  doVerifyRegister: (data: any) => Promise<any>
  resendRegisterOtp: (number: string) => Promise<any>
  doLogout: (token: string) => Promise<any>
  refreshToken: (token: string) => Promise<any>
}

const useAuthenticationStore = create<AuthenticationState>(set => ({
  doLogin: (phoneNumber: string) => {
    return authentication.doLogin(phoneNumber)
  },

  doRegister: (userData: any) => {
    return authentication.doRegister(userData)
  },

  doVerifyLogin: (data: any) => {
    return authentication.verifyLogin(data)
  },

  doVerifyRegister: (data: any) => {
    return authentication.verifyRegister(data)
  },

  resendRegisterOtp: (number: string) => {
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
