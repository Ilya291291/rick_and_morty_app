import React from 'react';
import { Layout } from 'antd';

const layOutStyle: React.CSSProperties = {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '30px'
}

export const CustomLayout = ({ children }) => {
    return (
      <Layout style={layOutStyle}>
        {children}
      </Layout>
    )
}