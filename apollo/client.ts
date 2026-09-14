import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// No Subscription required for develop process

const httpLink = createHttpLink({
  uri: 'http://localhost:3008/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
});

export default client;
