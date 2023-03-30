import { Box, Flex } from "@chakra-ui/react"
import BankOffers from "../components/BankOffers"
import BestSeller from "../components/BestSeller"
import ImageSlider from "../components/imageSlider"
import Navbar from "../components/Navbar"
import SixImages from "../components/SixImages"

export default function Home(){
    return(

        <>
        <h1>home</h1>
        <Navbar />
        <ImageSlider />
        <SixImages />
        <br></br>
        
       
        <BankOffers />
        <br></br>
        <Box fontSize={"lg"}>Best Seller</Box>
        <Flex width={"80%"} margin={"auto"}>
        <BestSeller />
        </Flex>
        
        </>
    )
}