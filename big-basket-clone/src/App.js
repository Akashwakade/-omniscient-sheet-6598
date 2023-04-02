import Home from './pages/Home';
import Basket from './pages/Basket';
import LoginSignUP from './pages/Login';
import './App.css';
import{Routes,Route,Switch}from "react-router-dom"
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'
import Signup from './pages/LoginwithName';
import { useState } from 'react';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home isLoggedIn={isLoggedIn} />}  />
         <Route path='/Cart' element={<Basket />}  />
         <Route path='/Login' element={<LoginSignUP />}  />
         {/* is signup is login */}
         <Route path='/Signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
       
     
       
       
    </div>
  );
}

export default App;
