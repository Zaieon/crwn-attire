import React from 'react';
import {Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';

const Hats = (props) => {
  console.log(useParams())
  console.log(props)
   return (  
    <div>
      <h2>How to Slay a Dragon</h2>
    </div>
  )
}

function HatsDetail(props) {
  let { paramValue } = useParams()
  console.log(paramValue)
  return (
    <div>
      <h2>More details on Slaying a Dragon</h2>
    </div>
  )
}

const App = (props) => {
  console.log(props)
  return (
    
    <div>
       
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/hats' Component={Hats}></Route>
        <Route path='/hats/:hatsid' Component={HatsDetail}/>
      </Routes>
      
    </div>
  );
}

export default App;
