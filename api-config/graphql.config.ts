import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
  } from '@apollo/client';
  // Function to create an Apollo Client instance and connect to the GraphQL backend
  const gqlClientConnect = () => {
    // Create a new InMemoryCache instance
    const cache = new InMemoryCache({
      addTypename: false,
      typePolicies: {},
    });
  // Create an HttpLink instance to connect to the GraphQL server
    const httpLink = createHttpLink({
      uri: process.env.NEXT_PUBLIC_GQL_ENDPOINT,
      useGETForQueries: false, // Use GET method for queries
      fetchOptions: {
      }
    }); 

  // Create the ApolloClient instance
    const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
      ssrMode: typeof window === 'undefined', // Set SSR mode based on whether the window object is available
      cache, // Assign the previously created InMemoryCache instance
      link: httpLink, // Assign the HttpLink instance as the link for the ApolloClient
    });
    return apolloClient; // Return the ApolloClient instance
  };
  export default gqlClientConnect;