import React from 'react';
import MainPage from '../../pages/MainPage';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import CategoryPage from '../../pages/CategoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="category" element={<CategoryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
