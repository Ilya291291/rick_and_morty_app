import React, { lazy } from 'react';
import './index.scss';
import { Dropdown } from '../../../shared/ui/Dropdown/index'
import { Outlet, useSearchParams, useParams } from "react-router-dom";
import { Category } from '../../../shared/types/types';
import { ErrorBoundary } from '../../../features/errorboundary/index'

const CharactersList = lazy(() => import('../../../entities/character').then(module => ({ default: module.CharactersList })))
const EpisodeList = lazy(() => import('../../../entities/episode').then(module => ({ default: module.EpisodeList })))
const LocationList = lazy(() => import('../../../entities/location').then(module => ({ default: module.LocationList })))

export const CategoryPage = () => {
    const [searchParams, _] = useSearchParams()
    const category = searchParams.get('category')
    const { id } = useParams<{ id: string }>();
    const isDetailView = id !== undefined;

    return (
        <ErrorBoundary>
            <section className='category_page'>
                {!isDetailView && (
                    <>
                        <h1>Страница категории</h1>
                        <Dropdown />
                        {category === Category.CHARACTER && <CharactersList />}
                        {category === Category.EPISODE && <EpisodeList />}
                        {category === Category.LOCATION && <LocationList />}
                    </>
                )}
                <Outlet />
            </section>
        </ErrorBoundary>
    );
}
