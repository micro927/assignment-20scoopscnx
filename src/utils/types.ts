import { Dispatch } from "react"

export type UserInformation = {
    email: string
    firstName: string
    lastName: string
    address: string
    postCode: string
    telPhoneNumber: string
}

export type UserInformationState = {
    isLoggedIn: boolean
    userInformation?: UserInformation
}

export type Login = {
    type: "Login";
    payload: UserInformation;
}

export type Logout = {
    type: "Logout";
    payload: null;
}

export type UserInformationActions = Login | Logout;

export interface UserInformationContext {
    state: UserInformationState,
    dispatch: Dispatch<UserInformationActions>,
}