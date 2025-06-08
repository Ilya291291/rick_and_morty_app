import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { getCharacters } from '../../services/getCharacters';
import { ICharacter } from '../../types/types';

export default function CharactersDetailedPage() {
  const { id }: { id?: string } = useParams();
  const [character, setCharacter] = useState<ICharacter | null>(null);
  useEffect(() => {
    getCharacters()
    .then((response) => {
      const foundCharacter: ICharacter | undefined = response.find(character => character.id === (id ? parseInt(id) : NaN))
      if(foundCharacter){
        setCharacter(foundCharacter)
      }else {
        setCharacter(null)
      }
    })
  }, [id])
  return (
    <section className='characters_detail'>
        {character && <div className='card'>
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
      </div>}
    </section>
  )
}
