import LoadingLayout from '@libs/@core/components/LoadingLayout'
import useGetProfileData from '@libs/hooks/useGetProfileData'
import { ComponentType, FC } from 'react'
import { Navigate } from 'react-router-dom'

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const ComponentWithAuth: FC<P> = (props) => {
    const authUser = localStorage.getItem('accessToken')

    if (!authUser) {
      setTimeout(() => {
        return <Navigate to='/login' />
      }, 300)

      return <LoadingLayout />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: useProfile, isLoading } = useGetProfileData()

    console.log({ useProfile })

    if (isLoading) {
      return <LoadingLayout />
    }

    if (!useProfile) {
      return <Navigate to='/login' />
    }

    if (authUser && useProfile) {
      return <WrappedComponent {...(props as P)} />
    }

    return <Navigate to='/login' />
  }

  return ComponentWithAuth
}

export default withAuth
