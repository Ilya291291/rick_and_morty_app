import React from 'react';
import { Header } from './widgets/header/index'
import { Footer } from './widgets/footer/index';
import './styles/index.scss'
import { AuthProvider } from './app/providers/context/AuthProvider';
import { AppRoutes } from './app/providers/router/index'
import { CustomLayout } from './app/layout';

function App() {

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

export default App;
