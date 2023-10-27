import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';


const App = (props) => {
  console.log(props)
  return (
    
    <div>
       
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/shop' element = {<Shop />} />
      </Routes>
      
    </div>
  );
}

export default App;
