import React, { useCallback, useRef, useState } from 'react';
import './index.scss';
import EpisodesItem from './EpisodeItem';
import { IEpisode } from '../../types/types';
import { useFetch } from '../../hooks/useFetch';
import { Category } from '../../types/types';
import ErrorBoundary from '../ErrorBoundary';

export default function EpisodeList(){

const pagenum = useRef(1)
  const [isIntersecting, setIsIntersecting] = useState(false);

  const { 
    data,
    hasMore, 
    isLoading, 
    error, 
  } = useFetch(`https://rickandmortyapi.com/api/${Category.Episode}`, {page: pagenum.current})

  const episodes = data as IEpisode[]

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
    if(node){
      observer.current.observe(node)
    }
  }, [hasMore, isLoading, isIntersecting])

  return (
    <ErrorBoundary>
      <div className='episode_wrapper'>
        {
          (episodes.length && !error) && episodes.map((item: IEpisode, index) => {
            if(episodes?.length - 2 === index + 1){
              return (
                <EpisodesItem key={item.id} {...item} ref={lastNode} />
              )
            }else {
              return (
                <EpisodesItem key={item.id} {...item} />
              )
            }})
          }
      </div>
    </ErrorBoundary>
  )
}

