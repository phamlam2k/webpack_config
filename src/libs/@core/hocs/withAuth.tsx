import LoadingLayout from '@libs/@core/components/LoadingLayout'
import useGetProfileData from '@libs/hooks/useGetProfileData'
import { ComponentType, FC } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const ComponentWithAuth: FC<P> = (props) => {
    const navigate = useNavigate()
    const authUser = localStorage.getItem('accessToken')

    if (!authUser) {
      setTimeout(() => {
        navigate('/auth/login')
      }, 1000)

      return <LoadingLayout />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: useProfile, isLoading } = useGetProfileData()

    if (isLoading) {
      return <LoadingLayout />
    }

    if (!useProfile) {
      return <Navigate to='/auth/login' />
    }

    if (authUser && useProfile) {
      return <WrappedComponent {...(props as P)} />
    }

    return <Navigate to='/auth/login' replace />
  }

  return ComponentWithAuth
}

export default withAuth
