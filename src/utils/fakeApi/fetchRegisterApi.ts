import { UserInformation, Gender } from "../../types/main.type"

type ResponseData = {
    success: boolean
    email?: string
    errorMessage?: string
}

export default function fetchRegisterApi(formData: UserInformation) {
    return new Promise<ResponseData>((resolve, reject) => {
        const { gender, email, firstName, lastName, address, postCode, telPhoneNumber } = formData
        try {
            sessionStorage.setItem('gender', Gender[gender])
            sessionStorage.setItem('firstName', firstName)
            sessionStorage.setItem('lastName', lastName)
            sessionStorage.setItem('address', address)
            sessionStorage.setItem('postCode', postCode)
            sessionStorage.setItem('telPhoneNumber', telPhoneNumber)
            resolve({
                success: true,
                email: email,
            })
        }
        catch (error) {
            reject({
                success: false,
                errorMessage: error
            })
        }
    })
}