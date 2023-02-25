import { createContext, useContext, useState } from 'react';
import fetchLoginApi from '../utils/fakeApi/fetchLoginApi';
import { UserInformation } from '../types/main.type';

type LoginInformation = {
    isLoggedIn: boolean,
    userInformation?: UserInformation
}

type LoginResult = { success: boolean }

interface UserInformationContext {
    loginInformation: LoginInformation,
    login: Function
    logout: Function,
}


export const useProvideAuth = () => {

    const InitialLoginInformation: LoginInformation = {
        isLoggedIn: JSON.parse(localStorage.getItem('assignment') || '{}')?.isLoggedIn ?? false,
        userInformation: JSON.parse(sessionStorage.getItem('assignment') ?? '{}'),
    }

    const [loginInformation, setLoginInformation] = useState(InitialLoginInformation);

    async function login(email: string, password: string) {
        let result: LoginResult = { success: false }
        let loginInformation: LoginInformation = {
            isLoggedIn: false,
        }
        await fetchLoginApi(email, password)
            .then(({ data }) => {
                loginInformation.isLoggedIn = true
                loginInformation.userInformation = data
                localStorage.setItem('assignment', JSON.stringify(loginInformation))
                setLoginInformation(() => {
                    return loginInformation
                })
                result.success = true
            }).catch(() => {
                localStorage.setItem('assignment', JSON.stringify(loginInformation))
                setLoginInformation(loginInformation)
                result.success = false
            })
        return result
    }

    function logout() {
        setLoginInformation({ isLoggedIn: false })
        localStorage.removeItem('assignment')
        window.location.reload()
    }

    return {
        loginInformation,
        login,
        logout,
    }
}


const UserInformationContext = createContext<UserInformationContext>({
    loginInformation: {
        isLoggedIn: JSON.parse(localStorage.getItem('assignment') || '{}')?.isLoggedIn ?? false,
        userInformation: JSON.parse(sessionStorage.getItem('assignment') ?? '{}'),
    },
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const auth = useProvideAuth();
    return (
        <UserInformationContext.Provider value={auth}>
            {children}
        </UserInformationContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(UserInformationContext);
};