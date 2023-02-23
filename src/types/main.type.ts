export enum Gender {
    male,
    female,
    preferNotToSay
}


export type UserInformation = {
    gender: Gender
    email: string
    firstName: string
    lastName: string
    address: string
    postCode: string
    telPhoneNumber: string
}