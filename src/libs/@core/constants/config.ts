import { handleLogout } from '@libs/utils/apis/auth'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        if (failureCount > 1) {
          handleLogout()
          return false
        }

        if (!error.response) return false

        if (error.response && error.response.status === 401) return true
        else return false
      },
      staleTime: 1000 * 60 * 60 * 24,
      networkMode: 'always',
      retryDelay: 1000
    },
    mutations: {
      retry: (failureCount, error: any) => {
        if (failureCount > 1) {
          handleLogout()
          return false
        }

        if (!error.response) return false

        if (error.response.status === 401) return true
        else return false
      },
      retryDelay: 1000,
      networkMode: 'always'
    }
  }
})
