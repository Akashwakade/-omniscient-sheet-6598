import { Box } from "@chakra-ui/react";

export default function BestSellerCard({image,name,price}){
 
    return(
      
      
       
        
        <Box style={{border:"1px solid black",margin:"10px" ,width:"20%"}}>
            <img src={image} width={"100%"} />
            <h1>Name : {name}</h1>
            <p> Price : {price}</p>
        </Box>
        
          
    )
}