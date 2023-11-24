import React, { useState } from 'react'


const Images =[
  
  "../public/01.JPG",
  "../public/02.JPG",
  "../public/03.JPG",
  "../public/04.JPG",
  "../public/05.JPG",
  "../public/06.JPG",
  "../public/07.JPG",
  "../public/08.JPG",
];
export default function App() {
  const [current , setCurrent] = useState(0);
  function preValue(){
    setCurrent(current === 0  ? Images.length -1 : current - 1) ;
  }
  function nextValue(){
    setCurrent(current === Images.length-1 ? 0 : current + 1);
  }
  return (
    <div className='mainContainer'>
      <button onClick={preValue}>Back</button>
      {
        Images.map(
          (values , index)=>
          current === index && (
            <div key={values}>
              <img width="300" src={values} alt="Image" />
            </div>
          )
        )
      }
      <button onClick={nextValue}>Next</button>
    </div>
  )
}

