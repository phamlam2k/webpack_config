import { lazy } from 'react'

/* Authentication */
export const AuthTemplate = lazy(
  () => import('@modules/auth/templates/_auth.template')
)
export const LoginTemplate = lazy(
  () => import('@modules/auth/templates/login.template')
)

/* Dashboard */
export const DashboardTemplate = lazy(
  () => import('@modules/dashboard/templates/_dashboard.template')
)
export const RouteTemplate = lazy(
  () => import('@modules/dashboard/templates/route.template')
)
export const LeafMapTemplate = lazy(
  () => import('@modules/dashboard/templates/leafmap.template')
)
