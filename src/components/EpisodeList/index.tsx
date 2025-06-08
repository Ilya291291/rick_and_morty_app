import React, { useEffect, useState } from 'react';
import './index.scss';
import { getEpisode } from '../../services/getEpisode';
import EpisodesItem from './EpisodeItem';
import { IEpisode } from '../../types/types';

export default function EpisodeList(){
  const [episodes, setEpisodes] = useState<IEpisode[] | null>(null);
  
  useEffect(() => {
    getEpisode().then(result => {
      setEpisodes(result)
    })
  }, []);
  return (
    <div className='episode_wrapper'>
      {episodes && episodes?.length > 0 && episodes.map((item: IEpisode) => {
        return (
            <EpisodesItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}

