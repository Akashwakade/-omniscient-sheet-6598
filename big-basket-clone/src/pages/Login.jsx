import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import LoginSignUpIcon from "../components/LoginSignUpIcon";
import { Link } from "react-router-dom";


export default function LoginSignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setName]=useState("")
  const[isOpen,setIsOpen]=useState(true)
   const onClose=()=>{
    setIsOpen(false)
  }

  //signup function


  const handleSignUp = () => {
    // Handle sign up logic here
   // console.log(email,password,name)
       axios.post("http://localhost:8080/users", {
        name,
        email,
        password,
});

 
   

     

  
      
     
   };

  return (
   <> <h1>welcome to login/signup page</h1>
     <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create an account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="email" mb={3}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="name" mb={3}>
            <FormLabel>Name</FormLabel>
            <Input type="name" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
         <Link to="/Signup"><p>if you are already a user click here to login</p><Button colorScheme="blue" mr={3} onClick={handleSignUp}>
            Sign Up
          </Button></Link>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </> 
  )
}
