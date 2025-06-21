import React, { ReactNode } from 'react';
import './index.scss';
import { useAuth } from '../../app/providers/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({ children } : PrivateRouteProps) {

  const auth = useAuth()
  const location = useLocation();

  if(!auth?.email && !auth?.password) {
    return <Navigate to='/login' state={{from: location.pathname}} replace/>
  }

  return <>{children}</>
}
