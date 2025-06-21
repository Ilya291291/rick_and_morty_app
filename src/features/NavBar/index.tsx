import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import RickAndMorty from '../../shared/assets/RickandMorty.png'

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar_img_logo'>
        <img src={RickAndMorty} alt="Rick and Morty Logo" /> 
      </div>
      <div className='navbar_nav_wrapper'>
        <NavLink to='/'>Главная страница</NavLink>
        <NavLink to='/category'>Страница категории</NavLink> 
      </div>
    </nav>
  )
}
