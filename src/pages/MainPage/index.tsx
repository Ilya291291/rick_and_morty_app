import React, {useState, useEffect} from 'react';
import './index.scss';
import { getCharacters } from '../../services/getCharacters';

export default function MainPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getCharacters().then(result => {
      setData(result)
    })
  }, []);

  return (
    <section className='mainpage'>
        {data?.length && data.map((item) => (
          <div className='card' key={item.id}>
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
        ))}
    </section>
  )
}
