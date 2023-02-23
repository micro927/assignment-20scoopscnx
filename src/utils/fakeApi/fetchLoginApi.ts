import { Gender, UserInformation } from "../../types/main.type"

type ResponseData = {
    success: boolean
    data: UserInformation
}

export default function fetchLoginApi(email: string, password: string) {
    return new Promise<ResponseData>((resolve, reject) => {
        const userStorage = JSON.parse(sessionStorage.getItem('assignment') ?? '{}')
        const validemail = userStorage.email
        const validPassword = '12345678'

        if (email === validemail && password === validPassword) {
            resolve({
                success: true,
                data: userStorage
            })
        }
        else {
            reject({
                success: false,
            })
        }
    })
}