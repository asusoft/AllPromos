import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginUser, fetchUserData, signOutUser } from '../../../server/services/authService';


type User = {
    __typename: 'User';
    id: string;
    login: string;
    email: string;
    dateOfBirth: string;
    description: string;
    name: string;
    phone: string;
    sex: string;
    address: {
        city: string;
    };
    subscribersCount: number;
    website: string;
    shortDescription: string;
    avatar: {
        path: string;
    };
    likesCount: number;
    viewsCount: number;
};

interface AuthContextData {
    authToken: string | null;
    signInUser: (login: string, password: string) => Promise<void>;
    authUser: User | null;
    signOut: () => Promise<void>;
}


interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData | null>(null);


export const AuthContextProvider: React.FunctionComponent<AuthContextProviderProps> = ({ children }) => {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [authUser, setAuthUser] = useState<User | null>(null)


    React.useEffect(() => {
        const fetchAuthToken = async () => {
            try {
                const authTokenFromStorage = await AsyncStorage.getItem('authToken');
                setAuthToken(authTokenFromStorage);
            } catch (error) {
                console.error('Error fetching authToken:', error);
            }
        };

        fetchAuthToken();
    }, []);

    const signInUser = async (login: string, password: string) => {
        const result = await attemptLogin(login, password);

        if (result.__typename === 'TokenPair') {
            await saveAuthTokens(result.accessToken, result.refreshToken);
        } else {
            throw new Error(result.status);
        }
    };

    const attemptLogin = async (login: string, password: string) => {
        try {
            return await loginUser(login, password);
        } catch (error: any) {
            throw new Error('Failed to login user:' + error.message);
        }
    };

    const saveAuthTokens = async (accessToken: string, refreshToken: string) => {
        setAuthToken(accessToken);
        await AsyncStorage.setItem('authToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
    };

    const signOut = async () => {
        await signOutUser();
        setAuthToken(null)
        setAuthUser(null)
    }

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
        <AuthContext.Provider value={{ authToken, signInUser, authUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }
    return context;
};
