import { SimpleGrid, Image } from '@chakra-ui/react';

export default function SixImages() {
  return (
    <SimpleGrid columns={6} spacing={2} width="80%" margin={"auto"}>
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_01.png" />
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_02.png" />
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_03.png" />
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_04.png" />
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_05.png" />
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_06.png" />
    </SimpleGrid>
  );
}
