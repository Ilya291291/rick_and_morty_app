import React from 'react';
import Header from './widgets/Header';
import Footer from './widgets/Footer';
import './styles/index.scss'
import { AuthProvider } from './app/providers/context/AuthProvider';
import { AppRoutes } from './app/providers/router/index'
import { CustomLayout } from './app/layout';

function App() {

  return (
    // <div className="App">
    <CustomLayout>
      <AuthProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </CustomLayout>
    // </div>
  )
}

export default App;
