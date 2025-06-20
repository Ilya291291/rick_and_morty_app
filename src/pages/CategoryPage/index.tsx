import React, { lazy } from 'react';
import './index.scss';
import Dropdown from '../../components/Dropdown';
import { Outlet, useSearchParams, useParams } from "react-router-dom";
import { Category } from '../../shared/types/types';
import ErrorBoundary from '../../components/ErrorBoundary';

const CharactersList = lazy(() => import('../../components/CharactersList'))
const EpisodeList = lazy(() => import('../../components/EpisodeList'))
const LocationList = lazy(() => import('../../components/LocationList'))

export default function CategoryPage() {
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
