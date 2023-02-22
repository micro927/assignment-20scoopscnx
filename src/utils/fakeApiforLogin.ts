type ResponseData = {
    success: boolean
    data?: {
        accessToken: string
        firstName: string | null
        lastName: string | null
        address: string | null
        postCode: string | null
        telPhoneNumber: string | null
    }
}


export default function fakeApiforLogin(email: string, password: string) {
    return new Promise<ResponseData>((resolve, reject) => {
        // fake Database
        const validemail = sessionStorage.getItem('email')
        const validPassword = sessionStorage.getItem('password') // must be encrypt in real application
        if (email === validemail && password === validPassword) {
            const accessToken = 'abcd'
            const firstName = sessionStorage.getItem('firstName')
            const lastName = sessionStorage.getItem('lastName')
            const address = sessionStorage.getItem('address')
            const postCode = sessionStorage.getItem('postCode')
            const telPhoneNumber = sessionStorage.getItem('telPhoneNumber')
            const data = {
                accessToken,
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