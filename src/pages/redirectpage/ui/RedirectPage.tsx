import React from 'react';
import './index.scss';
import notFound from '../../assets/notFound.webp'

export const RedirectPage = () => {
  return (
    <section>
        <img src={notFound} alt='Not Found' className='notfound_img'/>
    </section>
  )
}
