import { ApolloLink, from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { customToast } from '@/packages/react-toast'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // graphQL error
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, extensions }) => {
      const error = extensions?.validation
        ? Object.values(extensions.validation)
            .find((el) => el)
            ?.toString()
            ?.replace('input.', '')
            ?.replace('.0', '')
        : message

      customToast(error, 'error')
      error.includes('authorized') && window.location.reload()
    })
  // network error
  if (networkError && !graphQLErrors) {
    customToast(networkError.message, 'error')
  }
})

export const makeClient = () => {
  // create link
  const httpLink = new HttpLink({
    uri: `${process.env.SERVER_URL}`,
  })

  return new NextSSRApolloClient({
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : from([errorLink, httpLink]),
    cache: new NextSSRInMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
      mutate: {
        awaitRefetchQueries: true,
      },
    },
  })
}
