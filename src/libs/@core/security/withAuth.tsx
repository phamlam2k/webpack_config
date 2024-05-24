import React from 'react'
import { Navigate } from 'react-router-dom'

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const ComponentWithAuth = (props: any) => {
    const authUser = localStorage.getItem('authenticated')

    if (!authUser) {
      return <Navigate to='/login' />
    }

    return <WrappedComponent {...props} />
  }

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return ComponentWithAuth
}

export default withAuth
