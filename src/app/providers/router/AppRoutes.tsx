import React, { lazy, Suspense } from 'react'
import { MainPage } from '../../../pages/mainpage/index';
import { Routes, Route } from 'react-router-dom';
import { Category } from '../../../shared/types/types';
import { AntForm } from '../../../shared/ui/Form/AntForm'
import { PrivateRoute } from '../../../features/privateroute/index';
import { AntSpin } from '../../../shared/ui/Spin'

const CategoryPage = lazy(() => import('../../../pages/categorypage').then(module => ({ default: module.CategoryPage})))
const RedirectPage = lazy(() => import('../../../pages/redirectpage').then(module => ({ default: module.RedirectPage })))
const CharactersDetailedPage = lazy(() => import('../../../pages/charactersdetailedpage').then(module => ({ default: module.CharactersDetailedPage })))
const LocationDetailedPage = lazy(() => import('../../../pages/locationdetailedpage').then(module => ({ default: module.LocationDetailedPage })))
const EpisodesDetailedPage = lazy(() => import('../../../pages/episodesdetailedpage').then(module => ({ default: module.EpisodesDetailedPage })))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<AntSpin />}>
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
