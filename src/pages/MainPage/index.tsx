import React, {useState, useEffect} from 'react';
import './index.scss';
import characters from './fixtures/characters.json';

export default function MainPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.resolve().then(() => {
      setData(characters)
    });
  }, []);

  console.log(characters);

  return (
    <section>
        MainPage
    </section>
  )
}
