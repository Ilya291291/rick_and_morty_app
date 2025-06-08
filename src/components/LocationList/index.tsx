import React, { useEffect, useState } from 'react';
import './index.scss';
import { getLocation } from '../../services/getLocation';
import LocationItem from './LocationItem';
import { ILocation } from '../../types/types';

export default function LocationList(){
  const [locations, setLocations] = useState<ILocation[] | null>(null);
  
  useEffect(() => {
    getLocation().then(result => {
      setLocations(result)
    })
  }, []);
  return (
    <div className='locations_wrapper'>
      {locations && locations.length > 0 && locations.map((item: ILocation) => {
        return (
          <LocationItem key={item.id} {...item} />
        );
      })}
    </div>
  );
}

