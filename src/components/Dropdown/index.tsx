import React, {useState, useEffect} from 'react';
import { useSearchParams } from "react-router";
import './index.scss';
import { Category } from '../../types/types';

export default function Dropdown() {

  // enum Category {
  //     Location = "location",
  //     Characters = "characters",
  //     Episode = "episode"
  // }

  const [value, setValue] = useState("")
  const [_, setSearchParams] = useSearchParams()

  const handleChange = (event) => {
    setValue(event.target.value)
    setSearchParams({category: event.target.value})
  }

  return (
    <form>
      <select name="category" id="category" value={value} onChange={handleChange}>
        <option value=''>Выбери категорию</option>
        <option value={Category.Characters}>{Category.Characters}</option>
        <option value={Category.Location}>{Category.Location}</option>
        <option value={Category.Episode}>{Category.Episode}</option>
      </select>
    </form>
  )
}
