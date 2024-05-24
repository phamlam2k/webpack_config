import RouteTemplate from '@modules/router-management/templates/route.template'
import LoginTemplate from '@modules/auth/templates/login.template'
import DashboardTemplate from '@modules/dashboard/templates/dashboard.template'
import { Navigate, RouteObject } from 'react-router-dom'

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
