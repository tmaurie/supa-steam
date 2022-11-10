import { Box, Flex, Heading, HStack, Image, Tag } from '@chakra-ui/react';

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
            justifyContent='space-between' gap={4}>
        <Image src={game.image} borderRadius='15px' alt='test' />

        <Flex
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent='space-between'
          pl={{ base: '20px', lg: '51px' }}
          pt={{ base: '20px', lg: '53px' }}
          pb={{ base: '20px', lg: '34px' }}
          pr={{ base: '20px', lg: '34px' }}
          w='100%'
          pos='relative'
        >
          <Box>
            <Heading style={{ overflowWrap: 'break-word' }} fontSize='28px' fontWeight='semibold' lineHeight='26.77px'>
              {game.title}
            </Heading>
            <HStack spacing={2}>
              {game.tags.map(tag => (
                <Tag>{tag}</Tag>
              ))}
            </HStack>
            <Box
              mt='25px'
              h='10px'
              w='127px'
              borderRadius='20px'
              bg='#214B6B'
            ></Box>
          </Box>

        </Flex>
        <Box
          d='flex'
          justifyContent='space-between'
          flexDirection={{ base: 'row', lg: 'column' }}
          alignItems='flex-end'
        >
          <Heading fontSize='40px' fontWeight='bold'>
            {'$' + game.price.toFixed(2)}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
