import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import { App } from './app';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorkerRegistration from '../public/sw.js'

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
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((registration) => console.log('Service Worker registered:', registration.scope))
    .catch((error) => console.error('Error registering Service Worker:', error));
}