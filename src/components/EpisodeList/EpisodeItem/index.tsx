import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../types/types';
import { IEpisode } from '../../../types/types';

export default function EpisodeItem(item: IEpisode){
  return (
  <NavLink to={`/category/${Category.Episode}/${item.id}`} className='card'>
        <div className='info_wrapper'>
          <span>{`Эпизод №: ${item.episode}`}</span>
          <span>{`В эфире с : ${item.air_date}`}</span>
        </div>
        <div>
          <span>{`Имя: ${item.name}`}</span>
        </div>
        <small>{item.created}</small>
    </NavLink>
  )
}