import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { MyContext } from './Context';
import './Kind.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from './Slick';


const Kind = () => {
  const { data, newArr } = useContext(MyContext);
  

  
  if (newArr !== undefined) {
  return (
    <>
      <header>
        <Link to="/">
        <img src='/img/logo.png' />
        </Link>
        <h1>BREED</h1>
        <div className='side'>
          <a><img src='/img/search.png' /></a>
          <a><img src='/img/shopping_bag.png' /></a>
          <div className='face'>
            <img src='/img/juju.jpg' />
          </div>
        </div>
      </header>
      <main>
        <Slick></Slick>
      </main>
    </>
  )}
}

export default Kind