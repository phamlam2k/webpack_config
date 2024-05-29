import ROUTES from '@libs/@core/constants/routes'
import RootProvider from '@libs/@core/providers/RootProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter(ROUTES)

export default function App() {
  return (
    <RootProvider>
      <RouterProvider router={routes} />
    </RootProvider>
  )
}
