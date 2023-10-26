import client from "../apolloClient";
import { LOGIN_QUERY, FETCH_USER_QUERY, REFRESH_ACCESS_TOKEN, DELETE_REFRESH_TOKEN } from "../queries/userQueries";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (login, password) => {
    const response = await client.query({
        query: LOGIN_QUERY,
        variables: { login, password }
    });
    return response.data.createTokens;
};

export const refreshAcessToken = async () => {
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

export const invalidateRefreshToken = async () => {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (refreshToken) {
        await client.query({
            query: DELETE_REFRESH_TOKEN,
            variables: { refreshToken }
        });
    }
};

export const signOutUser = async () => {
    await invalidateRefreshToken();
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('refreshToken');

    client.clearStore();
};

export const fetchUserData = async () => {
    const response = await client.query({
        query: FETCH_USER_QUERY
    });
    return response.data.getMe;
};