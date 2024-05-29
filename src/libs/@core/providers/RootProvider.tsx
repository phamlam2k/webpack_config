import { queryClient } from '@libs/@core/constants/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { APIProvider } from '@vis.gl/react-google-maps'

type IRootProviderProps = {
  children: React.ReactNode
}

const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <APIProvider apiKey='AIzaSyBEYKsBNZdwFNwobQFD8XNtN-DKSk70LA0'>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </APIProvider>
  )
}

export default RootProvider
