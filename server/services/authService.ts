import client from "../apolloClient";
import { LOGIN_QUERY, FETCH_USER_QUERY, REFRESH_ACCESS_TOKEN, DELETE_REFRESH_TOKEN } from "../queries/userQueries";
import AsyncStorage from '@react-native-async-storage/async-storage';


type AuthResponce = {
    __typename: "TokenPair";
    accessToken: string;
    refreshToken: string;
    status: string;
};

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

type BaseError = {
    __typename: 'BaseError';
    status: string;
};

  

export const loginUser = async (login: string, password: string): Promise<AuthResponce> => {
    const response = await client.query({
        query: LOGIN_QUERY,
        variables: { login, password }
    });
    return response.data.createTokens;
};

export const refreshAcessToken = async (): Promise<string> => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const { data } = await client.query({
        query: REFRESH_ACCESS_TOKEN,
        variables: { refreshToken }
    });

    if (data.refreshAccessToken.__typename === 'AccessToken') {
        await AsyncStorage.setItem('authToken', data.refreshAccessToken.accessToken);
        return data.refreshAccessToken.accessToken;
    } else {
        throw new Error('Failed to refresh access token');
    }
};

export const invalidateRefreshToken = async (): Promise<void> => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (refreshToken) {
        await client.query({
            query: DELETE_REFRESH_TOKEN,
            variables: { refreshToken }
        });
    }
};

export const signOutUser = async (): Promise<void> => {
    await invalidateRefreshToken();
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('refreshToken');

    client.clearStore();
};

export const fetchUserData = async (): Promise<User | BaseError> => {
    const response = await client.query({
        query: FETCH_USER_QUERY
    });
    return response.data.getMe;
};