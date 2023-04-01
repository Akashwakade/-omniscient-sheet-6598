import Home from './pages/Home';
import Basket from './pages/Basket';
import LoginSignUP from './pages/Login';
import './App.css';
import{Routes,Route,Switch}from "react-router-dom"
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'
import Signup from './pages/LoignwithName';


function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home />}  />
         <Route path='/Cart' element={<Basket />}  />
         <Route path='/Login' element={<LoginSignUP />}  />
         <Route path='/Signup' element={<Signup />} />
      </Routes>
       
     
       
       
    </div>
  );
}

export default App;
