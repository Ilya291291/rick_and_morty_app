import React, { forwardRef } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../shared/types/types';
import { ILocation } from '../../../shared/types/types';

const LocationItem = forwardRef<HTMLAnchorElement, ILocation>((item, ref) => {
  return (
    <NavLink to={`/category/${Category.LOCATION}/${item.id}`} className='card_location' ref={ref}>
        <div className='info_wrapper'>
          <span>{`Тип: ${item.type}`}</span>
          <span>{`Разрешение : ${item.dimension}`}</span>
        </div>
        <div>
          <span>{`Название : ${item.name}`}</span>
        </div>
        <small>{item.created}</small>
    </NavLink>
  )
})
export default LocationItem;