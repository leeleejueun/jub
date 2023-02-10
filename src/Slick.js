import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { MyContext } from './Context'
import { useContext } from 'react'
import { useParams } from "react-router-dom";

const Slick = ()=>{
    const [slickGoTo,setSlickGoTo] = useState();
    const [state, setState] = useState({
        slideIndex: 0,
        updateCount: 0
    });
    const slider = useRef();
    const { data } = useContext(MyContext);

      //각 품종별 강아지들 뽑아보기
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        let b = 0;
        let a = [...data.filter(obj=>{
            if(id == '믹스견' && b < 15){
                b++;
                return obj.kindCd.match(id)
            }
            if(id != '믹스견'){
                return obj.kindCd.match(id)
            }
        })];
        setDetail(a)
        //보호종료 아가들 제외하기
    }, [data])

    console.log(detail)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // afterChange: () =>
        //     setState({...state , updateCount: state.updateCount + 1 }),
        beforeChange: (current, next) => setState({...state, slideIndex: next })
    };
    if(!detail) return(<>loading.....</>);
    return (
      <div>
        <input
          onChange={e =>  slider.current.slickGoTo(e.target.value)}
          value={state.slideIndex}
          type="range"
          min={0}
          max={detail.length-1}
          style={{width:'100%'}}
        />

        <Slider ref={slider} {...settings}>
        {
          detail && detail.map((obj, key) => {
            return (<div className='dogs' key={key}>
                      <div className='dogImg'>
                        <img src={obj.popfile} />
                      </div>
                      <ul className='dogDetail'>
                        <li>
                          <img src='/img/Vector.png' />
                          <p>품종  </p>
                          <p>{obj.kindCd}</p>
                        </li>
                        <li>
                          <img src='/img/birth.png' />
                          <p>나이</p>
                          <p>{obj.age}</p>
                        </li>
                        <li>
                          <img src='/img/weight.png' />
                          <p>체중</p>
                          <p>{obj.weight}</p>
                        </li>
                        <li>
                          <img src='/img/color.png' />
                          <p>색상</p>
                          <p>{obj.colorCd}</p>
                        </li>
                        <li>
                          <img src='/img/gender.png' />
                          <p>성별</p>
                          <p>{obj.sexCd}</p>
                        </li>
                        <li>
                          <img src='/img/check.png' />
                          <p>중성화여부  </p>
                          <p>{obj.neuterYn}</p>
                        </li>
                        <li>
                          <img src='/img/time.png' />
                          <p>공고기간</p>
                          <p>{obj.noticeSdt} ~ {obj.noticeEdt}</p>
                        </li>
                        <li>
                          <img src='/img/hospital.png' />
                          <p>보호소  </p>
                          <p>{obj.careNm}</p>
                        </li>
                        <li>
                          <img src='/img/call.png' />
                          <p>보호소 번호</p>
                          <p>{obj.careTel}</p>
                        </li>
                        <li>
                          <img src='/img/address.png' />
                          <p>보호소 주소</p>
                          <p>{obj.careAddr}</p>
                        </li>
                      </ul>
                      <div className="important">
                        <img src='/img/icon11.png' />
                        <p>{obj.specialMark}</p>
                      </div>
                    </div>)
          })
        }
       
        </Slider>
      </div>
    );

}

export default Slick;