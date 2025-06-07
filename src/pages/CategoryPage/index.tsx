import React, { useState, useEffect } from 'react';
import './index.scss';
import Dropdown from '../../components/Dropdown';
import { useSearchParams } from "react-router";
import { Category } from '../../types/types';
import { getCharacters } from '../../services/getCharacters';
import { getEpisode } from '../../services/getEpisode';
import { getLocation } from '../../services/getLocation';


export default function CategoryPage() {
    const [searchParams, _] = useSearchParams()
    // console.log(searchParams.get('category'))
    const category = searchParams.get('category')
    const [data, setData] = useState(null)
    useEffect(() => {
      switch(category){
        case Category.Characters: {
          getCharacters().then(result => {
            setData(result)
          })
        }
        case Category.Episode: {
          getEpisode().then(result => {
            setData(result)
          })
        }
        case Category.Location: {
          getLocation().then(result => {
            setData(result)
          })
        }
        default: {
          break
        }
      }
    }, [category])
    console.log(category, data)
  return (
    <section>
        CategoryPage
        <Dropdown />
    </section>
  )
}
