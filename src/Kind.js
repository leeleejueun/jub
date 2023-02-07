import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from './Context';
import './Kind.scss';


const Kind = () => {
    const {data} = useContext(MyContext);
    const {id} = useParams();
    const [pro,setPro]=useState();    

    //각 품종별 강아지들 뽑아보기
    const [detail,setDetail] = useState();
    useEffect(()=>{
        setDetail(data.filter(obj=>obj.kindCd.match(id)))
        //보호종료 아가들 제외하기
        setPro(data.filter(obj => !obj.processState.match('종료')))
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
                                <div>
                                    <img src={obj.popfile} />
                                </div>
                                <figcaption>나이{obj.age} / 성별{obj.sexCd}</figcaption>
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