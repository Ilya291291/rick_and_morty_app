import React, {useState, useEffect} from 'react';
import { useSearchParams } from "react-router";
import './index.scss';
import { Category } from '../../types/types';

export default function Dropdown() {

  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const currentCategory = searchParams.get('category');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
    setSearchParams({category: event.target.value})
  }

  useEffect(() => {
    if (currentCategory) {
      setValue(currentCategory);
    } else {
      setValue("")
    }
  }, [currentCategory]);

  return (
    <form className='form'>
      <select name="category" id="category" value={value} onChange={handleChange} className='custom_select'>
        <option value='' className='option'>Выбери категорию</option>
        <option value={Category.Characters} className='option'>{Category.Characters}</option>
        <option value={Category.Location} className='option'>{Category.Location}</option>
        <option value={Category.Episode} className='option'>{Category.Episode}</option>
      </select>
    </form>
  )
}
