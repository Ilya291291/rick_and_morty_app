import React from 'react';
import { Select } from 'antd';
import { Category } from '../../types/types';
import { useSearchParams } from 'react-router-dom';

export const Dropdown = () => {

  const [_, setSearchParams] = useSearchParams()

  const handleChange = (value) => {
    setSearchParams({category: value})
  }

  return (
    <Select
        placeholder='Выбери категорию'
        onChange={handleChange}
        options={[
            {value: Category.CHARACTER, label: Category.CHARACTER},
            {value: Category.EPISODE, label: Category.EPISODE},
            {value: Category.LOCATION, label: Category.LOCATION}
        ]}
        style={{ marginBottom: '30px', maxWidth: '300px', width: '100%' }}
    >
    </Select>
  )
}