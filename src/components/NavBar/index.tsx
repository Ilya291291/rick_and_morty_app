import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/category'>category</NavLink>
    </nav>
  )
}
