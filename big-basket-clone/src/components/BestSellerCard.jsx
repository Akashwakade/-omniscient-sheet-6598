import { Box, Card, CardBody,Image,Heading,Text,
    Divider,CardFooter,ButtonGroup,Button
 } from "@chakra-ui/react";

export default function BestSellerCard({image,name,price}){
 
    return(
      
      
       <Card>
        <CardBody>
          
            <Image src={image} width={"100%"} />
          <Heading size={"md"}>Name : {name}</Heading>  
 
            <Text color='blue.600' fontSize='2xl'>
            Price :₹{price}
         </Text>
      
        </CardBody>
        <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
        </Card>
        
          
    )
}