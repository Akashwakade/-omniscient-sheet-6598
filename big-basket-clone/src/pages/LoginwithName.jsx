import { useState } from "react";
import axios from "axios";
import { Flex, Input,Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// login with name mean signup means login
 export default function Signup({setIsLoggedIn}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate=useNavigate()
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get('http://localhost:8080/users');
        const users=response.data
        console.log(name,email,password)
        // console.log(users)
       const user=users.find(user=>user.name===name && user.password==password)
       console.log(user)
       if(user){
        alert("login success")
        setIsLoggedIn(true)
        navigate('/');
       }else{
        setError('invalid name or password')
       }
          
        
      
        // if(user){

        //   alert('success')
        // }
        // else{
        //   setError('Invalid email or password')
        // }
        // Redirect to login page
      } catch (error) {
        setError(error.response.data);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        
        <Flex margin={"300px 100px 100px 450px"}width={"30%"} flexDir={"column"}>
        <Input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <Input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {error && <div>{error}</div>}
        <Button type="submit">Login</Button>
        </Flex>
        
      </form>
    );
  }
 
 