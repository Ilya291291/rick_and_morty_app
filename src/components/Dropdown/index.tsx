import React, {useState, useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import './index.scss';
import { Category } from '../../shared/types/types';

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
        <option value={Category.CHARACTER} className='option'>{Category.CHARACTER}</option>
        <option value={Category.LOCATION} className='option'>{Category.LOCATION}</option>
        <option value={Category.EPISODE} className='option'>{Category.EPISODE}</option>
      </select>
    </form>
  )
}
