import React, { useState, useEffect } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { getLocation } from '../../services/getLocation';
import { ILocation } from '../../types/types';

export default function LocationDetailedPage() {
  const {id} = useParams()
  const [location, setLocation] = useState<ILocation | null>(null);
  useEffect(() => {
    getLocation()
    .then((response) => {
      const foundEpisode = response.find(episode => episode.id === (id ? parseInt(id) : NaN))
      if(foundEpisode){
        setLocation(foundEpisode)
      }else {
        setLocation(null)
      }
    })
  }, [id])  
  return (
    <section>
      {location && 
      <div className='card'>
        <div className='info_wrapper'>
          <span>{`Тип: ${location.type}`}</span>
          <span>{`Разрешение : ${location.dimension}`}</span>
        </div>
        <div>
          <span>{`Название : ${location.name}`}</span>
        </div>
        <small>{location.created}</small>
      </div>}
    </section>
  )
}
