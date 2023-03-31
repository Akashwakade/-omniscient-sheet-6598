import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import { auto } from "@popperjs/core";

export default function Footer() {
  return (
    <Flex
      as="footer"
    //   bg="gray.100"
      py={8}
      px={[4, 8]}
      direction={["column", "column", "row"]}
      justify="space-between"
      align="flex-start"
      width="80%"
      margin={auto}
    >
      <VStack spacing={6} mb={[8, 8, 0]}>
        <Text fontWeight="bold" fontSize="2xl">
          BigBasket
        </Text>
        <Link href="#">About Us</Link>
        <Link href="#">Careers</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Press</Link>
      </VStack>
      <VStack spacing={6} mb={[8, 8, 0]}>
        <Text fontWeight="bold" fontSize="2xl">
          Need Help?
        </Text>
        <Link href="#">FAQs</Link>
        <Link href="#">Contact Us</Link>
        <Link href="#">T&C</Link>
        <Link href="#">Privacy Policy</Link>
      </VStack>
      <VStack spacing={6}>
        <Text fontWeight="bold" fontSize="2xl">
          Download Our App
        </Text>
        <Text fontSize="sm">
          Exclusive offers and discounts on the go!
        </Text>
        <Flex>
          <Link mr={4}>
            <img src="https://www.bbassets.com/static/v2653/custPage/build/content/img/Google-App-store-icon.png" alt="Download on the App Store" />
          </Link>
          <Link>
            <img src="https://www.bbassets.com/static/v2653/custPage/build/content/img/Apple-App-store-icon.png" alt="Get it on Google Play" />
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
}
