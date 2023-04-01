import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import SignUpModal from "../pages/Login";
import { Link } from "react-router-dom";
export default function LoginSignUpIcon() {
//  const handleClick=()=>{
//     alert('hello')
    
//  }

  
  return (
    
    <Flex border={"2px solid black"} alignItems="center">
      <Icon as={FaUserCircle} boxSize={6} />
      <Text  ml={2} mr={4} fontWeight="bold">
        <Link to="/Login">
       <button> Login / Sign Up </button></Link>
      </Text>
      
      <IconButton
        aria-label="Login/Sign Up"
        icon={<Icon as={FaUserCircle} boxSize={6} />}
        variant="ghost"
      />
    </Flex>
  );
}
