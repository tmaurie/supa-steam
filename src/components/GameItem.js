import { Box, Flex, Heading, Image } from '@chakra-ui/react';

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
        <Image src={game.image} borderRadius="15px" alt="test"/>
        <Heading>{game.title}</Heading>
      </Flex>
    </Box>
  );
}
