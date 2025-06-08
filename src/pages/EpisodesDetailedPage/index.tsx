import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { getEpisode } from '../../services/getEpisode';
import { IEpisode } from '../../types/types';

export default function EpisodesDetailedPage() {
  const { id }: { id?: string } = useParams();
  const [episode, setepisode] = useState<IEpisode | null>(null);
  useEffect(() => {
    getEpisode()
    .then((response) => {
      const foundEpisode: IEpisode | undefined = response.find(episode => episode.id === (id ? parseInt(id) : NaN))
      if(foundEpisode){
        setepisode(foundEpisode)
      }else {
        setepisode(null)
      }
    })
  }, [id])
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
