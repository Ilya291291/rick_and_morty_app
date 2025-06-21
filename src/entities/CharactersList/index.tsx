import React, { useCallback, useRef, useState } from 'react';
import './index.scss';
import CharactersItem from './CharacterItem';
import { useFetch } from '../../shared/lib/useFetch';
import { Category, ICharacter } from '../../shared/types/types';
import ErrorBoundary from '../../features/ErrorBoundary';
export default function CharactersList(){

  const pagenum = useRef(1)
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { 
    data,
    hasMore, 
    isLoading, 
    error,

} = useFetch(`https://rickandmortyapi.com/api/${Category.CHARACTER}`, {page: pagenum.current})

  const charsList = data as ICharacter[]

  const observer = useRef<IntersectionObserver | null>(null)

  const lastNode = useCallback((node: HTMLAnchorElement) => {

    if(isLoading || !hasMore){
      return
    }

    if(observer.current){
      observer.current.disconnect()
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 200px 0px',
      threshold: 0.1
    };

    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasMore && !isIntersecting){
        setIsIntersecting(true);
        pagenum.current+=1;
      }else {
        setIsIntersecting(false);
      }
    }, 
      observerOptions
    )
    if(node && node instanceof Element){
      observer.current.observe(node)
    }
  }, [hasMore, isLoading, isIntersecting])

  return (
    <ErrorBoundary>
      <div className='characters_wrapper'>
          {
            (Array.isArray(charsList) && !error) && charsList?.length > 0 && charsList.map((item: ICharacter, index: number) => {
            if(charsList?.length - 2 === index + 1){
              return (
                <CharactersItem key={item.id} {...item} ref={lastNode} pagenum={pagenum.current}/>
              )
            }else {
              return (
                <CharactersItem key={item.id} {...item} pagenum={pagenum.current}/>
              )
            }
          })
          }
      </div>
    </ErrorBoundary>
  )
}

