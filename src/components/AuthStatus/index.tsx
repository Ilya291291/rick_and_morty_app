import React from 'react';
import './index.scss';
import { useAuth } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function AuthStatus() {

  const auth = useAuth()
  const navigate = useNavigate()

  if(!auth?.email) return <div>Not logged in</div>

  const handleSignOut = () => {
    auth.logout(() => {
      navigate('/')
    })
  }

  return (
    <p>
      Вы вошли под именем {auth.email}
      <button onClick={handleSignOut}>Выйти</button>
    </p>
  )
}
