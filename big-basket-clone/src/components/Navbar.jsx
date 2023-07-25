
import { Box,Flex,Spacer,Input,Icon } from '@chakra-ui/react'
import BasketIcon from './BasketIcon'
import { useState,useReducer } from 'react'
import styles from "./css/Navbar.module.css"
import LoginSignUpIcon from './LoginSignUpIcon'
import { Search2Icon } from '@chakra-ui/icons'
import axios from 'axios'
import { getData } from './api'





export default function Navbar({isLoggedIn}){

  

    
    
    

    
      // const [searchQuery, setSearchQuery] = useState('');
    
      // const handleSearchChange = (event) => {
      //   setSearchQuery(event.target.value);
      // }
    
      // const filteredProducts = data.filter(product => {
      //   return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      // });




    return(
        <>
        <Flex  justify={"right"}  > <LoginSignUpIcon isLoggedIn={isLoggedIn}/>  </Flex><Flex justify={"flex-end"}><BasketIcon /></Flex>
         <Flex className={styles.navbar} margin={'auto'} height={'50px'} alignItems={'center'}  bg='white' w='100%' boxShadow={"box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"} p={4} color='white'>
          <Box><h1>image</h1></Box>
          <Spacer/>


          <Flex width={'600px'} ><Input  type='text' color={'black'} style={{borderColor:"black"}} placeholder='Search for Products...' /> 
          
          <Box  width={"40px"}  border={"2px solid red"} bg={'lightgreen'}> <Search2Icon /></Box></Flex>
          <Spacer/>
         
          {/* <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul> */}
        
        </Flex>
        
        
        </>
    )
}
