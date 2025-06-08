import React from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import { Category } from '../../../types/types';
import { ILocation } from '../../../types/types';

export default function LocationItem(item: ILocation){
  return (
    <NavLink to={`/category/${Category.Location}/${item.id}`} key={item.id} className='card_location'>
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
}