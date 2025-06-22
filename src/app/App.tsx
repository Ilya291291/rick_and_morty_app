import React from 'react';
// import { Header } from '../widgets/header/index'
// import { Footer } from '../widgets/footer/index';
import { Header } from '../widgets/header';
import { Footer } from '../widgets/footer';
import '../styles/index.scss'
import { AuthProvider } from './providers/context/AuthProvider';
import { AppRoutes } from './providers/router/index'
import { CustomLayout } from './layout';

export const App = () => {

  return (
    <CustomLayout>
      <AuthProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </CustomLayout>
  )
}
