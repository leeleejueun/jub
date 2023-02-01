import './App.scss';
import {useState,useEffect} from  'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { MyContext } from './Context';
import Breed from './Breed';

function App() {
  const [city,setCity] = useState();
  const [country,setCountry] = useState();
  const [shelter,setShelter] = useState();
  const [breed,setBreed] = useState();
  const [data,setData] = useState();

  useEffect(()=>{
    //시도
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?numOfRows=3&pageNo=1&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(city=>{
      setCity(city.response.body.items)
    })
    //시군구
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?upr_cd=6110000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(country=>{
      setCountry(country.response.body.items)    
    })
    //보호소
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?upr_cd=6110000&org_cd=3220000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(shelter=>{
      setShelter(shelter.response.body.items)    
    })
    //품종
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(breed=>{
      setBreed(breed.response.body.items)    
    })

    //유기동물
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=2&numOfRows=100&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data=>{
      setData(data.response.body.items.item)    
    })
  },[])
  // console.log(city)
  // console.log(country)
   console.log(shelter)
  // console.log(breed)
  // console.log(data)

  if(data !== undefined){

    return (
      <MyContext.Provider>
        <BrowserRouter>
          <div className="App">
            <div className='back'>
              {/* <Routes>
                <Route> */}
                  <div className='line'>
                    <img src='./img/line.png'/>
                  </div>
                  <div className='header'>
                    <div className='logo'>
                      <img src='./img/logo.png'/>
                    </div>
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
                {/* </Route>
              </Routes> */}
            </div>
          </div>
        </BrowserRouter>
      </MyContext.Provider>
    );
  }
}

export default App;
