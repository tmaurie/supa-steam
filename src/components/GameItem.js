import { Box, Flex, Heading, Image, Tag } from '@chakra-ui/react';

export function GameItem(game) {
  return (
    <Box
      key={game.id}
      mr={{ base: '25px', lg: '68px' }}
      ml={{ base: '25px', lg: '68px' }}
      mt={{ base: '0px', lg: '20px' }}
      mb='20px'
      borderRadius='30px'
      bg='#101720'
      w='100%' p={4} color='white'>
      <Flex flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent='left'>
        <Image src={game.image} borderRadius='15px' alt='test' />
        <Flex wrap='wrap' mt='12px' flexDirection="column">
          <Heading>{game.title}</Heading>

          <ul>
            {game.tags.map(item => (
              <Tag>{item}</Tag>
            ))}
          </ul>
          </Flex>
        </Flex>
    </Box>
);
}
