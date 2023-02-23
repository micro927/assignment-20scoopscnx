import fetchLoginApi from "./fakeApi/fetchLoginApi"
import fetchRegisterApi from "./fakeApi/fetchRegisterApi"
import { UserInformation } from "../types/main.type"

type LoginInformation = {
    isLoggedIn: boolean,
    userInformation?: UserInformation
}

type LoginResult = { success: boolean }

type RegisterResult = {
    success: boolean
    message?: string
}

export async function login(email: string, password: string) {
    let result: LoginResult = { success: false }
    let loginInformation: LoginInformation = {
        isLoggedIn: false,
    }
    await fetchLoginApi(email, password)
        .then(({ data }) => {
            loginInformation.isLoggedIn = true
            loginInformation.userInformation = data
            localStorage.setItem('assignment', JSON.stringify(loginInformation))
            result.success = true
        }).catch(() => {
            localStorage.setItem('assignment', JSON.stringify(loginInformation))
            result.success = false
        })
    return result
}

export function logout() {
    localStorage.removeItem('assignment')
    window.location.reload()
}

export async function userRegister(formData: UserInformation) {
    let result: RegisterResult = { success: false }
    await fetchRegisterApi(formData)
        .then((response) => {
            result.success = response.success
            result.message = response.email
        }).catch((response) => {
            result.success = response.success
            result.message = response.errorMessage
        })
    return result
}