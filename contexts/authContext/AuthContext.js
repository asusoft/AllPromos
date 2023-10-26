import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser, fetchUserData } from '../../server/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [authUser, setAuthUser] = useState(null)

    const signInUser = async (login, password) => {
        const result = await attemptLogin(login, password);

        if (isSuccessfulLogin(result)) {
            await saveAuthToken(result.accessToken);
        } else {
            throw new Error(result.status);
        }
    };

    const attemptLogin = async (login, password) => {
        try {
            return await loginUser(login, password);
        } catch (error) {
            throw new Error('Failed to login user:', error);
        }
    };

    const isSuccessfulLogin = (result) => result.__typename === 'TokenPair';

    const saveAuthToken = async (token) => {
        setAuthToken(token);
        await AsyncStorage.setItem('authToken', token);
    };


    const fetchAndHandleUserData = async () => {
        try {
            const userData = await fetchUserData();

            if (userData.__typename === 'User') {
                setAuthUser(userData)
            } else if (userData.__typename === 'BaseError') {
                console.error('Error fetching user data:', userData.status);
            }
        } catch (error) {
            console.error('Error occurred while fetching user data:', error);
        }
    };

    React.useEffect(() => {
        async function fetchData() {
            await fetchAndHandleUserData()
        }

        if (authToken) {
            fetchData()
        }
    }, [authToken])

    return (
        <AuthContext.Provider value={{ authToken, setAuthToken, signInUser, authUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
