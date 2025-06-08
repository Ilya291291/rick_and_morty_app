import React from 'react';
import MainPage from '../../pages/MainPage';
import Header from '../Header';
import Footer from '../Footer';
import './index.scss'
import { Routes, Route } from 'react-router-dom';
import CategoryPage from '../../pages/CategoryPage';
import RedirectPage from '../../pages/RedirectPage';
import CharactersDetailedPage from '../../pages/CharactersDetailedPage';
import LocationDetailedPage from '../../pages/LocationDetailedPage';
import EpisodesDetailedPage from '../../pages/EpisodesDetailedPage';
import { Category } from '../../types/types';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/category" element={<CategoryPage />}>
        <Route path={`${Category.Characters}/:id`} element={<CharactersDetailedPage />} />
        <Route path={`${Category.Location}/:id`} element={<LocationDetailedPage />} />
        <Route path={`${Category.Episode}/:id`} element={<EpisodesDetailedPage />} />
      </Route>
      <Route path="*" element={<RedirectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
