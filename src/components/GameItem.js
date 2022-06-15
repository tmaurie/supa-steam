import { Box, Flex, Heading } from '@chakra-ui/react';

export function GameItem(game) {
  return (
    <Box
         key={game.id}
         mr={{ base: "25px", lg: "68px" }}
         ml={{ base: "25px", lg: "68px" }}
         mt={{ base: "0px", lg: "20px" }}
         mb="20px"
         borderRadius="30px"
         bg="#101720"
         w='100%' p={4} color='white'>
      <Flex>
        <img src={game.image}  alt="test"/>
        <Heading>{game.title}</Heading>
      </Flex>
    </Box>
  );
}
