import './App.scss';
import {useState,useEffect, useRef} from  'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { MyContext } from './Context';
import Breed from './Breed';
import Sido from './Sido';
import Main from './Main';
import Kind from './Kind';

function App() {
  const [data,setData] = useState();
  const [pro,setPro]=useState();

  useEffect(()=>{
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

    //유기동물5
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=5&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data5=>{
      setData(data5.response.body.items.item)    
    })

    //유기동물6
    fetch(`http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20211201&endde=20211231&pageNo=6&numOfRows=1000&serviceKey=IhwtVFipeu6nZyGrdxBURBuhH1LUYVdDuftZhldVrd6zyQhAVmaeyEpgqtEPlA865XSikOQ8RTlNrsMPGd2ABg%3D%3D&_type=json`)
    .then(res=>res.json())
    .then(data6=>{
      setData(data6.response.body.items.item)    
    })
    // //보호종료 아가들 제외하기
    // setPro(data.filter(obj => !obj.processState.match('종료')))

  },[])
  //console.log(pro)




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
