import React, { useRef, useState, useCallback } from 'react';
import './index.scss';
import LocationItem from './LocationItem';
import { IData, ILocation } from '../../../../shared/types/types';
import { useFetch } from '../../../../shared/lib/useFetch';
import { Category } from '../../../../shared/types/types';
import { ErrorBoundary } from '../../../../features/errorboundary'

export const LocationList = () => {

 const pagenum = useRef(1)
   const [isIntersecting, setIsIntersecting] = useState(false);
 
   const { 
     data,
     hasMore, 
     isLoading,
     error
   } = useFetch(`https://rickandmortyapi.com/api/${Category.LOCATION}`, {page: pagenum.current})

   const locations = data as ILocation[]
 
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
      <div className='locations_wrapper'>
        {
          (Array.isArray(locations) && !error) && locations?.length > 0 && locations.map((item: ILocation, index) => {
            if(locations?.length - 2 === index + 1){
              return (
                <LocationItem key={item.id} {...item} ref={lastNode} />
              )
            }else {
              return (
                <LocationItem key={item.id} {...item} />
              )
            }})
          }
      </div>
    </ErrorBoundary>
  );
}

