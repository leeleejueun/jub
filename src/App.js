import './App.scss';
import {useState,useEffect, useRef} from  'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { MyContext } from './Context';
import Breed from './Breed';
import Sido from './Sido';
import Main from './Main';
import Kind from './Kind';

function App() {
  const [city,setCity] = useState();
  const [country,setCountry] = useState();
  const [shelter,setShelter] = useState();
  const [breed,setBreed] = useState();
  const [data,setData] = useState();

  useEffect(()=>{
    // //시도
    // fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=3&pageNo=1&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    // .then(res=>res.json())
    // .then(city=>{
    //   setCity(city.response.body.items)
    // })
    // //시군구
    // fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?upr_cd=6110000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    // .then(res=>res.json())
    // .then(country=>{
    //   setCountry(country.response.body.items)    
    // })
    // //보호소
    // fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?upr_cd=6110000&org_cd=3220000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    // .then(res=>res.json())
    // .then(shelter=>{
    //   setShelter(shelter.response.body.items)    
    // })
    // //품종
    // fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    // .then(res=>res.json())
    // .then(breed=>{
    //   setBreed(breed.response.body.items)    
    // })

    //유기동물1
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=1&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data=>{
      setData(data.response.body.items.item)    
    })

    //유기동물2
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=2&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data2=>{
      setData(data2.response.body.items.item)    
    })

    //유기동물3
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=3&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data3=>{
      setData(data3.response.body.items.item)    
    })

    //유기동물4
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=4&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data4=>{
      setData(data4.response.body.items.item)    
    })
  },[])
  //품종만 뽑아내기
  let name = [];
  const newArr = useRef([]);
  if(data !== undefined){
    data.map((obj)=>{
      name.push(obj.kindCd);
    })
    const set = new Set(name);
    newArr.current = [...set];
    // console.log(newArr);
  }
  

  if(data !== undefined){

    return (
      <MyContext.Provider value={{data:data,newArr:newArr.current,setData:setData}}>
        <BrowserRouter>
          <div className="App">
            <div className='back'>
              <Routes>
                <Route path="/" element={<Main />}></Route>                
                <Route path='/SidoShelter' element={<Sido />}></Route>
                <Route path='/Breed' element={<Breed />}></Route>
                <Route path='/Breed/:id' element={<Kind />}></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </MyContext.Provider>
    );
  }
}

export default App;
