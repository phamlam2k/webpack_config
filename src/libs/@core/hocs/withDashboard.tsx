import LoadingLayout from '@libs/@core/components/LoadingLayout'
import useGetProfileData from '@libs/hooks/useGetProfileData'
import { ComponentType, FC } from 'react'
import { Navigate } from 'react-router-dom'

const withDashboard = <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const ComponentWithAuth: FC<P> = (props) => {
    const authUser = localStorage.getItem('accessToken')

    console.log({ authUser })

    if (!authUser) {
      return <WrappedComponent {...(props as P)} />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: useProfile, isLoading } = useGetProfileData()

    if (isLoading) {
      return <LoadingLayout />
    }

    if (useProfile.statusCode === 2001) {
      return <Navigate to='/' />
    }

    if (!useProfile || useProfile.statusCode !== 2001) {
      return <WrappedComponent {...(props as P)} />
    }

    return <Navigate to='/' />
  }

  return ComponentWithAuth
}

export default withDashboard
