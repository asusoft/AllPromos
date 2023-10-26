import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshAcessToken } from './services/authService';

const httpLink = new HttpLink({
    uri: 'https://api.quickclick.online/content/graphql'
});

const authLink = setContext(async (_, { headers }) => {
    const token = await AsyncStorage.getItem('authToken');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors && graphQLErrors.some(error => error.message === 'UNAUTHORIZED')) {
        return refreshAcessToken()
            .then(accessToken => {
                const oldHeaders = operation.getContext().headers;
                operation.setContext({
                    headers: {
                        ...oldHeaders,
                        authorization: `Bearer ${accessToken}`,
                    },
                });
                return forward(operation);
            });
    }
});

const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache()
});

export default client;