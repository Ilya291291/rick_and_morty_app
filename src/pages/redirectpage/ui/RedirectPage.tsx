import React from 'react';
import { Button, Result } from 'antd';

export const RedirectPage = () => {
  return (
    <Result 
      status='404'
      title='404'
      subTitle='Извините, такой страницы не существует.'
      extra={<Button style={{ backgroundColor: '#e2e8ed' }} href='/'>На главную</Button>}
    />
  )
}
