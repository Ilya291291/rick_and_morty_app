import React, { forwardRef } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../types/types';
import { ICharacter } from '../../../types/types';

 const CharactersItem = forwardRef<HTMLAnchorElement, ICharacter>((item, ref) => {
  return (
    <NavLink to={`${Category.Character}/${item.id}`} className='card_char' ref={ref}>
        <div>
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
 })

export default CharactersItem