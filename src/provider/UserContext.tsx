import React, { useState, useEffect, createContext, useReducer, Dispatch } from 'react';
import { Redirect } from 'react-router-dom';
import { UserInformation } from '../types/User.type';

type UserContext = {
    informationState: UserInformation,
    informationDispatch: Dispatch<{ type: 'Login' | 'Logout' }>
}

type InformationReducer = (UserInformation,)

// const informationDispatch
const UserContext = createContext<UserContext>(null);


const informationReducer = (informationState, action : ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];) => {
    switch (action.type) {
        case "Login":
            return informationState
        case "Logout":
            return null
        default:
            return null;
    }
};



type Props = {
    children?: JSX.Element
}

export const UserProvider = ({ children }: Props): JSX.Element => {
    const [informationState, informationDispatch] = useReducer(informationReducer, null);
    const [lastName, setLastName] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [postCode, setPostCode] = useState(undefined);
    const [telPhoneNumber, setTelPhoneNumber] = useState(undefined);

    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContext;