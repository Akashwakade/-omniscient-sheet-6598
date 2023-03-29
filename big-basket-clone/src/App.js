
import './App.css';
import { Box,Flex,Spacer,Input } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
       

        <Flex margin={'auto'} height={'50px'} alignItems={'center'}  bg='lightgreen' w='80%' p={4} color='white'>
          <Box><h1>image</h1></Box>
          <Spacer/>
          <Box width={'600px'} border={'2px solid red' }><Input placeholder='Search for Products...' /></Box>
          <Spacer/>
          <Box><h1>image2</h1></Box>

        </Flex>
       
    </div>
  );
}

export default App;
