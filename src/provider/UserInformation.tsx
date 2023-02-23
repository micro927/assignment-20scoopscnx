import { createContext, useReducer } from 'react';
import { UserInformationState, UserInformationActions, UserInformationContext as UserInformationContextInterface } from '../utils/types'

const initialUserInformation: UserInformationState = {
    isLoggedIn: false,
    userInformation: undefined
}

const userInformationReducer = (state: UserInformationState, action: UserInformationActions): UserInformationState => {
    switch (action.type) {
        case "Login":
            return {
                isLoggedIn: true,
                userInformation: action.payload
            }
        case "Logout":
            return {
                isLoggedIn: false,
                userInformation: undefined
            }
        default:
            return state
    }
};

export const UserInformationContext = createContext<UserInformationContextInterface>({
    state: initialUserInformation,
    dispatch: () => undefined,
});

export const UserInformationProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const [state, dispatch] = useReducer(userInformationReducer, initialUserInformation);
    return (
        <UserInformationContext.Provider value={{ state, dispatch }}>
            {children}
        </UserInformationContext.Provider>
    );
};