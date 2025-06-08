import React, { useEffect, useState } from 'react';
import './index.scss';
import { getCharacters } from '../../services/getCharacters';
import CharactersItem from './CharacterItem';
import { ICharacter } from '../../types/types';
export default function CharactersList(){
  const [characters, setCharacters] = useState<ICharacter[] | null>(null);
  
  useEffect(() => {
    getCharacters().then(result => {
      setCharacters(result)
    })
  }, []);
  return (
    <div className='characters_wrapper'>
      {characters && characters?.length > 0 && characters.map((item: ICharacter) => {
        return (
          <CharactersItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}

