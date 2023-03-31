
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'
import BasketIcon from './BasketIcon'
import styles from "./css/Navbar.module.css"
import LoginSignUpIcon from './LoginSignUpIcon'
export default function Navbar(){

    return(
        <>
        <Flex border={"2px solid red"} justify={"right"}  ><LoginSignUpIcon /> </Flex> <Flex justify={"flex-end"}><BasketIcon /></Flex>
         <Flex className={styles.navbar} margin={'auto'} height={'50px'} alignItems={'center'}  bg='white' w='100%' boxShadow={"box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"} p={4} color='white'>
          <Box><h1>image</h1></Box>
          <Spacer/>
          <Flex width={'600px'} ><Input style={{borderColor:"black"}} placeholder='Search for Products...' /> <Box  width={"40px"}  border={"2px solid red"} bg={'lightgreen'}> <img width={"100%"} src="https://cdn-icons-png.flaticon.com/128/54/54481.png"></img></Box></Flex>
          <Spacer/>
       
        
        </Flex>
        
        
        </>
    )
}
