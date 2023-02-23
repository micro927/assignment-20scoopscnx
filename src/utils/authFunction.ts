import fetchLoginApi from "./fakeApi/fetchLoginApi"

type UserInformation = {
    email: string
    firstName: string
    lastName: string
    address: string
    postCode: string
    telPhoneNumber: string
}

type LoginInformation = {
    isLoggedIn: boolean,
    userInformation?: UserInformation
}

type Result = { success: boolean }
export async function login(email: string, password: string) {
    let result: Result = { success: false }
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