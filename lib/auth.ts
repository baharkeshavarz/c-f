import { toast } from "react-toastify"
import Authentication from "../services/authentication";
import profileServices from "../services/profile";
import { useStoreCredit } from "../store/userStore";

export const BACK_TO_KEY = "backTo"
export function setBackToAfterLogin(pageAddress: any) {
    localStorage.setItem(BACK_TO_KEY, pageAddress)
}

class AuthHandler {
    #accessToken = "";
    #refreshToken = "";
    #user = undefined;

    constructor() {
        if (typeof window === 'undefined') return
        this.#accessToken = localStorage.getItem("access_token")
        this.#refreshToken = localStorage.getItem("refresh_token")
        try {
            this.#user = JSON.parse(localStorage.getItem("user"))
            useStoreCredit.getState().setCredit(this.#user?.credit || 0)
        } catch (e) { }
    }

    loadUser() {
        if (!this.isLoggedIn) return Promise.reject("");
        return profileServices.getProfileData().then(res => {
            if (res?.status === 200) {
                if (!res?.data?.succeed) {
                    const err = res?.data?.message || "An error has occurred"
                    toast.error(err)
                    throw err
                } else {
                    const user = res?.data?.value
                    user.lastUpdate = Date.now()
                    useStoreCredit.getState().setCredit(user.credit)
                    refreshCredit()
                    localStorage.setItem("user", JSON.stringify(user))
                    this.#user = user
                    return user
                }
            }
        }).catch((err) => {
            toast.error(err || "An error has occurred")
            throw err
        })
    }
    login(responseValue: any) {
        const { access_token, refresh_token } = responseValue
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("refresh_token", refresh_token)
        this.#accessToken = access_token
        this.#refreshToken = refresh_token
    }
    backToBeforeLogin(router: any) {
        const backTo = localStorage.getItem(BACK_TO_KEY)
        router.push(backTo || "/main/requests/newRequest")
        if (backTo) {
            localStorage.removeItem(BACK_TO_KEY)
        }
    }
    get user() {
        return this.#user
    }
    get accessToken() {
        return this.#accessToken
    }
    get refreshToken() {
        return this.#refreshToken
    }
    get isLoggedIn() {
        return !!this.#accessToken
    }
    refresh() {
        return Authentication.refreshToken(this.#refreshToken).then((response) => {
            if (response?.status !== 200 || !response?.data?.succeed) {
                toast.error("توکن منقضی شده است")
                this.logout();
                throw "failed"
            } else {
                this.login(response?.data?.value)
            }
        })
    }
    logout(router) {
        return Authentication.doLogout(this.#refreshToken).then(async response => {
            if (response?.status === 200) {
                if (!response?.data?.succeed) {
                    toast.error(response?.data?.message)
                } else {
                    this.#accessToken = ""
                    this.#refreshToken = ""
                    this.#user = null
                    localStorage.removeItem("access_token")
                    localStorage.removeItem("refresh_token")
                    localStorage.removeItem("user")
                    useStoreCredit.getState().setCredit(0)
                    if (router) {
                        await router.push("/login")
                    } else {
                        location.href = "/login"
                    }
                }
            }
        })
    }
}
const FIVE_MIN = 1 * 60 * 1000
let refreshTimeout
function refreshCredit() {
    clearTimeout(refreshTimeout)
    refreshTimeout = setTimeout(() => {
        refreshCredit()
        authHandler.loadUser()
    }, FIVE_MIN)
}

const authHandler = new AuthHandler()
refreshCredit()
export default authHandler