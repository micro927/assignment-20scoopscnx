type UserInformation = {
    email: string
    firstName: string
    lastName: string
    address: string
    postCode: string
    telPhoneNumber: string
}

type ResponseData = {
    success: boolean
    data: UserInformation
}


export default function LoginApiFake(email: string, password: string) {
    return new Promise<ResponseData>((resolve, reject) => {
        const validemail = sessionStorage.getItem('email') ?? 'error@error.com'
        const validPassword = sessionStorage.getItem('password') ?? '12345678' // must be encrypt in real application
        if (email === validemail && password === validPassword) {
            const firstName = sessionStorage.getItem('firstName') ?? 'error'
            const lastName = sessionStorage.getItem('lastName') ?? 'error'
            const address = sessionStorage.getItem('address') ?? 'error'
            const postCode = sessionStorage.getItem('postCode') ?? 'error'
            const telPhoneNumber = sessionStorage.getItem('telPhoneNumber') ?? 'error'
            const data = {
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