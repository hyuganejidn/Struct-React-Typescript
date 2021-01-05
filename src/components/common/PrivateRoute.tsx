import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface PrivateRouteProps {
  component: React.FC<RouteProps>
}

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('access-token') ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
      }
    />
  )
}
