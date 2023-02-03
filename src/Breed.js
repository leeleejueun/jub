import React, { useState } from 'react'
import { MyContext } from './Context'
import { useContext } from 'react'
import './Breed.scss';
import Pagination from './Pagination';

const Breed = () => {
  const{newArr} = useContext(MyContext);
  
  const [limit,setLimit] = useState(9);
  const [page,setPage]=useState(1);
  const offset = (page -1)*limit;
  if(newArr.length){
    console.log(newArr);
  }

  // if(newArr !== undefined){

    // let aa = newArr.fliter(text => );
    // newArr.filter(text => text.slice(0,3) === '[개]').map((obj) => {
    //   console.log(obj);
    // })
  // }
  if(newArr !== undefined){
  return (
    <>
      <header>
        <img src='./img/logo.png' />
        <h1>BREED</h1>
        <div className='side'>
          <a><img src='./img/search.png'/></a>
          <a><img src='./img/shopping_bag.png'/></a>
          <div className='face'>
            <img src='./img/juju.jpg'/>
          </div>
        </div>
      </header>
      <main>
        {
          newArr.filter(text => text.slice(0,3) === '[개]').slice(offset, offset + limit).map((obj) => {
            return <figure>
            <a><img src='./img/yellowPaw.png' /></a>
            <figcaption>{obj.substring(4)}</figcaption>
          </figure>
          })
        }
        <Pagination
        total = {newArr.length}
        limit = {limit}
        page={page}
        setPage={setPage} />
      </main>
    </>
  )
      }
}

export default Breed