import client from "../apolloClient";
import { LOGIN_QUERY, FETCH_USER_QUERY } from "../queries/userQueries";

export const loginUser = async (login, password) => {
    const response = await client.query({
        query: LOGIN_QUERY,
        variables: { login, password }
    });
    return response.data.createTokens;
};

export const fetchUserData = async () => {
    const response = await client.query({
        query: FETCH_USER_QUERY
    });
    return response.data.getMe;
};