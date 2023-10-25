import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser, fetchUserData } from '../../server/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [authUser, setAuthUser] = useState(null)

    const signInUser = async (login, password) => {
        try {
            const result = await loginUser(login, password);
            if (result.__typename === 'TokenPair') {
                const token = result.accessToken;
                setAuthToken(token);
                await AsyncStorage.setItem('authToken', token);
            } else {
                console.log("Error:", result.status);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
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
