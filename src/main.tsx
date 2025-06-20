import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);