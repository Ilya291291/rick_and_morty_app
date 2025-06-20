import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import hello_icon from '../../shared/assets/hello_icon.webp'
import AuthStatus from '../../components/AuthStatus'
import { useAuth } from '../../context/AuthProvider';

export default function MainPage() {

  const auth = useAuth();

  return (
    <section className='mainpage'>
      <h1>Рады приветствовать тебя на этой странице</h1>
      <div className='mainpage_img'>
        <img src={hello_icon} alt="greetings, my friend from Ricky and Morty" />
      </div>
      <h2>Используй кнопку ниже для перехода на страницу категорий</h2>
      <NavLink to="/category">Здесь можно выбрать категорию</NavLink>
      {!auth?.email && !auth?.password && <NavLink to="/login">Войти в систему</NavLink>}
      <AuthStatus />
    </section>
  )
}
