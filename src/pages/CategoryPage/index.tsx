import React from 'react';
import './index.scss';
import Dropdown from '../../components/Dropdown';
import { Outlet, useSearchParams, useParams } from "react-router";
import { Category } from '../../types/types';
import CharactersList from '../../components/CharactersList';
import EpisodeList from '../../components/EpisodeList';
import LocationList from '../../components/LocationList';


export default function CategoryPage() {
    const [searchParams, _] = useSearchParams()
    const category = searchParams.get('category')
    const { id } = useParams<{ id: string }>();
    const isDetailView = id !== undefined;

    return (
        <section className='category_page'>
            {!isDetailView && (
                <>
                    <h1>Страница категории</h1>
                    <Dropdown />
                    {category === Category.Characters && <CharactersList />}
                    {category === Category.Episode && <EpisodeList />}
                    {category === Category.Location && <LocationList />}
                </>
            )}
            <Outlet />
        </section>
    );
}
