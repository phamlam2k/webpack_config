import { queryClient } from '@libs/@core/constants/config'
import theme from '@libs/@core/constants/theme'
import { ThemeProvider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import { APIProvider } from '@vis.gl/react-google-maps'

type IRootProviderProps = {
  children: React.ReactNode
}

const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <APIProvider apiKey='AIzaSyBEYKsBNZdwFNwobQFD8XNtN-DKSk70LA0'>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </APIProvider>
    </ThemeProvider>
  )
}

export default RootProvider
