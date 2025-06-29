import React from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { ILocation } from '../../../shared/types/types'
import { Category } from '../../../shared/types/types';
import { useFetch } from '../../../shared/lib/useFetch';
export const LocationDetailedPage = () => {
    const { id } = useParams<{ id: string }>();
    
     const {
       data, 
     } = useFetch(`https://rickandmortyapi.com/api/${Category.LOCATION}`, {}, id)

  const location = data as ILocation | null

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
