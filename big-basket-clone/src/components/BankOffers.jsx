import { SimpleGrid, Image,Box } from '@chakra-ui/react';
export default function BankOffers(){
 return(
  <> 
     <Box fontSize={"lg"}>Bank Offers</Box>
     <br></br>
   <SimpleGrid columns={[1,2,4]} spacing={2} width="80%"  margin={"auto"}>
      <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_simple-all_360_250323.jpg" />
      <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_mobikwik_360_250323.jpg" />
      <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_paytm_360_250323.jpg" />
      <Image src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_freecharge_360_250323.jpg" />
      
    </SimpleGrid>
  
  
  </>

 )
}



