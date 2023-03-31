import { Flex, Icon, Text } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

export default function BasketIcon() {
  return (
    <Flex alignItems="center">
      <Icon as={FaShoppingBasket} boxSize={6} />
      <Text ml={2} fontWeight="bold">
        Basket
      </Text>
      <Text ml={2} fontWeight="bold" color="gray.500">
        (0)
      </Text>
    </Flex>
  );
}
