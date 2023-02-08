import React, { useState } from 'react'
import { MyContext } from './Context'
import { useContext } from 'react'
import './Breed.scss';
import Pagination from './Pagination';
import { Link, useParams } from 'react-router-dom';

const Breed = () => {
  const params = useParams();

  const { newArr } = useContext(MyContext);

  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // if(newArr !== undefined){

  // let aa = newArr.fliter(text => );
  // newArr.filter(text => text.slice(0,3) === '[개]').map((obj) => {
  //   console.log(obj);
  // })
  // }
  if (newArr !== undefined) {
    return (
      <>
        <header>
          <Link to="/">
            <img src='./img/logo.png' />
          </Link>
          <h1>BREED</h1>
          <div className='side'>
            <a><img src='./img/search.png' /></a>
            <a><img src='./img/shopping_bag.png' /></a>
            <div className='face'>
              <img src='./img/juju.jpg' />
            </div>
          </div>
        </header>
        <main>
          <div className='breed'>
            {
              newArr.filter(text => text.slice(0, 3) === '[개]').slice(offset, offset + limit).map((obj, key) => {
                return <figure key={key}>
                  <Link to={`/Breed/${obj.substring(4)}`}>
                    <img src='./img/dog2.png' />
                    <figcaption>{obj.substring(4)}</figcaption>
                  </Link>
                </figure>
              })
            }
          </div>
          <Pagination
            total={newArr.filter(text => text.slice(0, 3) === '[개]').length}
            limit={limit}
            page={page}
            setPage={setPage} />
        </main>
      </>
    )
  }
}

export default Breed