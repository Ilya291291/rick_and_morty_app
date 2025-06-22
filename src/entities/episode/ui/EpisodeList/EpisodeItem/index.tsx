import React, { forwardRef } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../../../shared/types/types';
import { IEpisode } from '../../../../../shared/types/types';

const EpisodeItem = forwardRef<HTMLAnchorElement, IEpisode>((item, ref) => {
  return (
  <NavLink to={`/category/${Category.EPISODE}/${item.id}`} className='card' ref={ref}>
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
})

export default EpisodeItem