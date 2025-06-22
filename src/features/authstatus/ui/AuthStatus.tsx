import React from 'react';
import './index.scss';
import { useAuth } from '../../../app/providers/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

export const AuthStatus = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  if(!auth?.email) return (
    <Result 
      icon={<UserOutlined style={{ color: '#e2e8ed', cursor: 'pointer' }} onClick={() => navigate('/login')}/>} 
      title="Вы не авторизованы"
    />
  )

  const handleSignOut = () => {
    auth.logout(() => {
      navigate('/')
    })
  }

  return (
    <Result 
      icon={<SmileOutlined style={{ color: '#e2e8ed', cursor: 'pointer'}}/>}
      title={`Вы вошли под именем ${auth.email}`}
      extra={<Button style={{ backgroundColor: '#e2e8ed' }} onClick={handleSignOut}>Выйти</Button>}
    />
  )
}
