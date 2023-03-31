import Home from './pages/Home';
import Basket from './pages/Basket';
import LoginSignUP from './pages/Login';
import './App.css';
import{Routes,Route}from "react-router-dom"
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home />}  />
         <Route path='/Cart' element={<Basket />}  />
         <Route path='/Login' element={<LoginSignUP />}  />

      </Routes>
       
     
       
       
    </div>
  );
}

export default App;
