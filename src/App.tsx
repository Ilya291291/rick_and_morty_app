import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/index.scss'
import { AuthProvider } from './context/AuthProvider';
import AppRoutes from './components/AppRoutes';
import { FormfromAnt } from './shared/ui/Form/Form'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <FormfromAnt />
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App;
