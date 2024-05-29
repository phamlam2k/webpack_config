import LoginTemplate from '@modules/auth/templates/login.template'
import DashboardTemplate from '@modules/dashboard/templates/dashboard.layout'
import { Navigate, RouteObject } from 'react-router-dom'
import RouteTemplate from '@modules/dashboard/templates/route.template'

const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <DashboardTemplate />,
    children: [
      {
        path: '/',
        element: <Navigate to='/route' replace />
      },
      {
        path: '/route',
        element: <RouteTemplate />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginTemplate />
  }
]

export default ROUTES
