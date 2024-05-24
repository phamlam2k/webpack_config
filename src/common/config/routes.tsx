import RouteTemplate from '@modules/router-management/templates/route.template'
import LoginTemplate from '@modules/auth/templates/login.template'

const ROUTES = [
  {
    path: '/',
    element: <RouteTemplate />
  },
  {
    path: '/login',
    element: <LoginTemplate />
  }
]

export default ROUTES
