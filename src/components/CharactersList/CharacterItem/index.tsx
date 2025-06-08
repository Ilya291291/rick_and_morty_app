import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../types/types';
import { ICharacter } from '../../../types/types';

export default function CharactersItem(item: ICharacter){
  return (
  <NavLink to={`${Category.Characters}/${item.id}`} className='card_char'>
      <div >
        <div><img src={item.image} alt={item.image} /></div>
        <div className='info_wrapper'>
          <span>{`Статус: ${item.status}`}</span>
          <span>{`Вид: ${item.species}`}</span>
          <span>{`Пол: ${item.gender}`}</span>
        </div>
        <div>
          <span>{`Имя: ${item.name}`}</span>
        </div>
        <small>{item.created}</small>
      </div>
  </NavLink>
  )
}
