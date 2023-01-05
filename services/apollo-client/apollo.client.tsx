import { ApolloClient, InMemoryCache } from '@apollo/client';

export const API_URI = 'https://api.spacex.land/graphql/';

const createApolloClient = () => {
  return new ApolloClient({
    uri: API_URI,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
