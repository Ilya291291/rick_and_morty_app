import React, { ReactNode } from 'react';
import './index.scss';
import { useAuth } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({ children } : PrivateRouteProps) {

  const auth = useAuth()
  const location = useLocation();
  console.log(location)

  if(!auth?.email && !auth?.password) {
    return <Navigate to='/login' state={{from: location.pathname}} replace/>
  }

  return children
}
