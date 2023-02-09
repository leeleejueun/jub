import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { MyContext } from './Context';
import './Kind.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Kind = () => {
  const { data, newArr } = useContext(MyContext);
  const { id } = useParams();

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${detail[i].popfile}`} />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  //각 품종별 강아지들 뽑아보기
  const [detail, setDetail] = useState();
  useEffect(() => {
    setDetail(data.filter(obj=>obj.kindCd.match(id)))
    //보호종료 아가들 제외하기
  }, [])
  console.log(detail)
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
        <Slider className='dogInner' {...settings}>
        {
          detail && detail.map((obj, key) => {
            return (<div className='dogs' key={key}>
                      <div className='dogImg'>
                        <img src={obj.popfile} />
                      </div>
                      <div className='dogDetail'>
                        <p>{obj.kindCd}</p>
                        <p>{obj.happenPlace}</p>
                        <p>{obj.colorCd}</p>
                        <p>{obj.age}</p>
                        <p>{obj.weight}</p>
                        <p>{obj.noticeSdt}</p>
                        <p>{obj.noticeEdt}</p>
                        <p>{obj.processState}</p>
                        <p>{obj.sexCd}</p>
                        <p>{obj.neuterYn}</p>
                        <p>{obj.specialMark}</p>
                        <p>{obj.careNm}</p>
                        <p>{obj.careTel}</p>
                        <p>{obj.careAddr}</p>
                        <p>{obj.orgNm}</p>
                        <p>{obj.chargeNm}</p>
                        <p>{obj.officetel}</p>
                        <p>{obj.noticeComment}</p>
                      </div>
                    </div>)
          })
        }
        </Slider>
      </main>
    </>
  )}
}

export default Kind