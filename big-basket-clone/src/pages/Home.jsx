import { Box, Flex } from "@chakra-ui/react"
import BankOffers from "../components/BankOffers"
import BestSeller from "../components/BestSeller"
import Footer from "../components/Footer"
import ImageSlider from "../components/imageSlider"
import Navbar from "../components/Navbar"
import SixImages from "../components/SixImages"
import SignUpModal from "./Login"
import Signup from "./LoignwithName"
export default function Home(){
    return(

        <>
      
       
        
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
        

        {/* footer part */}
        <Footer />
        
        </>
    )
}