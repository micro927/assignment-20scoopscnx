import { Gender, UserInformation } from "../../types/main.type"

type ResponseData = {
    success: boolean
    data: UserInformation
}

export default function fetchLoginApi(email: string, password: string) {
    return new Promise<ResponseData>((resolve, reject) => {
        const validemail = sessionStorage.getItem('email') ?? 'error@error.com'
        const validPassword = sessionStorage.getItem('password') ?? '12345678' // must be encrypt in real application
        if (email === validemail && password === validPassword) {
            const gender = parseInt(sessionStorage.getItem('gender') || '0')
            const firstName = sessionStorage.getItem('firstName') ?? 'error'
            const lastName = sessionStorage.getItem('lastName') ?? 'error'
            const address = sessionStorage.getItem('address') ?? 'error'
            const postCode = sessionStorage.getItem('postCode') ?? 'error'
            const telPhoneNumber = sessionStorage.getItem('telPhoneNumber') ?? 'error'
            const data = {
                gender,
                email,
                firstName,
                lastName,
                address,
                postCode,
                telPhoneNumber,
            }
            resolve({
                success: true,
                data
            })
        }
        else {
            reject({
                success: false,
            })
        }
    })
}