import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from './Context';


const Kind = () => {
    const {data} = useContext(MyContext);
    const {id} = useParams();
    console.log(id);
    

    //각 품종별 강아지들 뽑아보기
    // if(data.kindCd.slice(0,3)==='[개]' && data.kindCd.substring(4)===newArr.)
    const [detail,setDetail] = useState();
    const [pro,setPro]=useState();

    useEffect(()=>{
        setDetail(data.filter(obj=>obj.kindCd.match(id)))
        setPro(data.filter(obj => obj.processState.match('종료')))
    },[])    
    console.log(detail)
    console.log(pro)

  return (
    <>
      <header>
        <Link to="/">
          <img src='./img/logo.png' />
        </Link>
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
        <div className='dogs'>
            {
                detail && detail.map((obj,key)=>{
                    return (<figure key={key}>
                                <img src={obj.popfile} />
                                <figcaption></figcaption>
                            </figure>)
                })
            }
        </div>
        <div className='dog'>
            <div className='dogImg'>
            </div>
            <div className='dogDetail'>
            </div>
        </div>
      </main>
    </>
  )
}

export default Kind