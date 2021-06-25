import React, { useState } from 'react'
import './App.css';
//COMPONENTS
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';

function App() {
  const [data, setData] = useState( {} );

  React.useEffect(() => {
    // setTimeout(() => {
    //     console.log('USE EFFECT');
    // }, 2000);
    fetch('https://api.nasa.gov/planetary/apod?api_key=RaJ64VndJwamyMwE3UMlSt5dofvuCifsPVj2cs01')
    .then((res) => res.json())
    .then((dataApi) => setData(dataApi));
  }, [])
  
  console.log(data);
  return (
    <div className='container'>
      <Header />
      <CardComponent data={data} />
    </div>
  )
}

export default App

