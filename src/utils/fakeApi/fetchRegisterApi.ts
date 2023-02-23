import { UserInformation, Gender } from "../../types/main.type"

type ResponseData = {
    success: boolean
    email?: string
    errorMessage?: string
}

export default function fetchRegisterApi(formData: UserInformation) {
    return new Promise<ResponseData>((resolve, reject) => {
        try {
            sessionStorage.setItem('assignment', JSON.stringify(formData))
            resolve({
                success: true,
                email: formData.email,
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