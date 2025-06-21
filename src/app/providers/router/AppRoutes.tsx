import React, { lazy, Suspense } from 'react'
import MainPage from '../../../pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import { Category } from '../../../shared/types/types';
import { AntForm } from '../../../shared/ui/Form/AntForm'
import PrivateRoute from '../../../features/PrivateRoute';

const CategoryPage = lazy(() => import('../../../pages/CategoryPage'))
const RedirectPage = lazy(() => import('../../../pages/RedirectPage'))
const CharactersDetailedPage = lazy(() => import('../../../pages/CharactersDetailedPage'))
const LocationDetailedPage = lazy(() => import('../../../pages/LocationDetailedPage'))
const EpisodesDetailedPage = lazy(() => import('../../../pages/EpisodesDetailedPage'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<AntForm />} />
            <Route path="/category" element={<PrivateRoute><CategoryPage /></PrivateRoute>}>
            <Route path={`${Category.CHARACTER}/:id`} element={<PrivateRoute><CharactersDetailedPage /></PrivateRoute>} />
            <Route path={`${Category.LOCATION}/:id`} element={<PrivateRoute><LocationDetailedPage /></PrivateRoute>} />
            <Route path={`${Category.EPISODE}/:id`} element={<PrivateRoute><EpisodesDetailedPage /></PrivateRoute>} />
        </Route>
        <Route path="*" element={<RedirectPage />} />
    </Routes>
    </Suspense>
  )
}
