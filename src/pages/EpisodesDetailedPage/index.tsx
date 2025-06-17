import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { IEpisode } from '../../types/types';
import { useFetch } from '../../hooks/useFetch';
import { Category } from '../../types/types';

export default function EpisodesDetailedPage() {

  const { id } = useParams<{ id: string }>();
  
   const {
     data, 
   } = useFetch(`https://rickandmortyapi.com/api/${Category.Episode}`, {}, id);

  const episode = data as IEpisode | null

  return (
    <section>
      {episode && 
      <div className='card'>
        <div className='info_wrapper'>
          <span>{`Эпизод №: ${episode.episode}`}</span>
          <span>{`В эфире с : ${episode.air_date}`}</span>
        </div>
        <div>
          <span>{`Имя: ${episode.name}`}</span>
        </div>
        <small>{episode.created}</small>
      </div>}
    </section>
  )
}
