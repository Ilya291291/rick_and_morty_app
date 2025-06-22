import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { ICharacter } from '../../../shared/types/types';
import { Category } from '../../../shared/types/types';
import { useFetch } from '../../../shared/lib/useFetch';

export const CharactersDetailedPage = () => {

  const { id } = useParams<{ id: string }>();

  const {
    data, 
  } = useFetch(`https://rickandmortyapi.com/api/${Category.CHARACTER}`, {}, id);

  const character = data as ICharacter | null;

  return (
    <section className='characters_detail'>
      {character && 
        <div className='card'>
          <div><img src={character.image} alt={character.image} /></div>
          <div className='info_wrapper'>
            <span>{`Статус: ${character.status}`}</span>
            <span>{`Вид: ${character.species}`}</span>
            <span>{`Пол: ${character.gender}`}</span>
          </div>
          <div>
            <span>{`Имя: ${character.name}`}</span>
          </div>
          <small>{character.created}</small>
        </div>
      }
    </section>
  )
}
