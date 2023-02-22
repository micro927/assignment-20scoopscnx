import React, { useState, useEffect, createContext } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from './AuthService';

import Login from '../components/Login';

const UserContext = createContext();

export const UserProvider = ({ children }): JSX.Element => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const checkLoggedIn = async () => {
            let cuser = isAuthenticated();
            if (cuser === null) {
                localStorage.setItem('user', '');
                cuser = '';
            }

            setCurrentUser(cuser);
        };

        checkLoggedIn();
    }, []);

    console.log('usercontext', currentUser);

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {currentUser?.token ? children : <Login />}
        </UserContext.Provider>
    );
};


export default UserContext;