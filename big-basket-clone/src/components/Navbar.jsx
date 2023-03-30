import { RangeSliderFilledTrack } from "@chakra-ui/react";
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'
import {BsSearch} from 'react-icons/fa'
export default function Navbar(){

    return(
        <>
         <Flex margin={'auto'} height={'50px'} alignItems={'center'}  bg='lightgreen' w='80%' p={4} color='white'>
          <Box><h1>image</h1></Box>
          <Spacer/>
          <Box width={'600px'} border={'2px solid red' }><Input placeholder='Search for Products...' /><BsSearch /></Box>
          <Spacer/>
          <Box><h1>image2</h1></Box>

        </Flex>
        
        </>
    )
}
