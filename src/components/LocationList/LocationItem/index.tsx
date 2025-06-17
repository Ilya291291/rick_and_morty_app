import React, { forwardRef } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../types/types';
import { ILocation } from '../../../types/types';

const LocationItem = forwardRef<HTMLAnchorElement, ILocation>((item, ref) => {
  return (
    <NavLink to={`/category/${Category.Location}/${item.id}`} className='card_location' ref={ref}>
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