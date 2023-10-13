import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_URL,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  ssrMode: typeof window === 'undefined',
  name: 'amazon-clone',
  version: '1.0',
});
export default client;
