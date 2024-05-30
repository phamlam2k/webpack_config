import { ROUTE_LINK } from '@libs/@core/constants/const'
import {
  AuthTemplate,
  DashboardTemplate,
  LeafMapTemplate,
  LoginTemplate,
  RouteTemplate
} from '@libs/@core/constants/lazy'
import { Suspense } from 'react'
import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

const ROUTES = createRoutesFromElements(
  <>
    <Route
      path='/'
      element={
        <Suspense
          fallback={
            <p
              style={{
                fontSize: 50
              }}
            >
              Loading....
            </p>
          }
        >
          <DashboardTemplate />
        </Suspense>
      }
    >
      <Route
        path='/'
        element={<Navigate to={ROUTE_LINK.GOOGLE_MAP} replace />}
      />
      <Route path={ROUTE_LINK.GOOGLE_MAP} element={<RouteTemplate />} />
      <Route path={ROUTE_LINK.LEAFMAP} element={<LeafMapTemplate />} />
    </Route>
    <Route
      path='/auth/'
      element={
        <Suspense
          fallback={
            <p
              style={{
                fontSize: 50
              }}
            >
              Loading....
            </p>
          }
        >
          <AuthTemplate />
        </Suspense>
      }
    >
      <Route path='' element={<Navigate to='/auth/login' replace />} />
      <Route path='login' element={<LoginTemplate />} />
    </Route>
  </>
)

export default ROUTES
