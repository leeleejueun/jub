import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
  <>
  
    <div className='line'>
      <img src='./img/line.png'/>
    </div>
    <div className='header'>
      <Link to="/" className='logo'>
        <img src='./img/logo.png'/>
      </Link>
      <div className='menu'>
        <ul>
          <li><Link to="/SidoShelter">sido shelter</Link></li>
          <li><Link to="/Breed">breed</Link></li>
        </ul>
      </div>
      <div className='side'>
        <a><img src='./img/search.png'/></a>
        <a><img src='./img/shopping_bag.png'/></a>
        <div className='face'></div>
      </div>
    </div>
    <div className='main'>
      <div className='title'>
        <p>Dogs leave pawprints<br />on our heart</p>
        <div className='icon'>
          <img src='./img/heart.png'/>
        </div>
      </div>
      <div className='bigI'>
        <img src='./img/big.png'/>
      </div>
      <div className='smallI'>
        <img src='./img/small.png'/>
      </div>
      <div className='lan'>
        <button>KO</button>
        <button>EN</button>
      </div>
    </div>
    <div className='footer'>
      <div className='dog'>
        <div className='inner'>
          <img src='./img/mlik.png'/>
          <p>DOG</p>
        </div>
      </div>
      <div className='cat'>
        <div className='inner'>
          <img src='./img/zziboo.png'/>
          <p>CAT</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Main