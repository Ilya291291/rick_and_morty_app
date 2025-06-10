import React from 'react'
import MainPage from '../../pages/MainPage';
import '../../styles/index.scss'
import { Routes, Route } from 'react-router-dom';
import CategoryPage from '../../pages/CategoryPage'
import RedirectPage from '../../pages/RedirectPage';
import CharactersDetailedPage from '../../pages/CharactersDetailedPage';
import LocationDetailedPage from '../../pages/LocationDetailedPage';
import EpisodesDetailedPage from '../../pages/EpisodesDetailedPage';
import { Category } from '../../types/types';
import LogIn from '../../pages/LogIn';
import PrivateRoute from '../../components/PrivateRoute';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/category" element={<PrivateRoute><CategoryPage /></PrivateRoute>}>
            <Route path={`${Category.Characters}/:id`} element={<PrivateRoute><CharactersDetailedPage /></PrivateRoute>} />
            <Route path={`${Category.Location}/:id`} element={<PrivateRoute><LocationDetailedPage /></PrivateRoute>} />
            <Route path={`${Category.Episode}/:id`} element={<PrivateRoute><EpisodesDetailedPage /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<RedirectPage />} />
    </Routes>
  )
}
