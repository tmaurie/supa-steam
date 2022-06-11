import { Flex, Button, Heading, Image, Box} from '@chakra-ui/react';
import { Download } from 'react-feather';

// import SteamLogo from '../public/steam.svg'

export function Header() {
  return (
    <Flex justify='space-around' h='100px' align='center'>


      <Box display='flex'>
        <Heading noOfLines={1} fontWeight='Bold' fontSize='40px' lineHeight='38.24px' zIndex={2}>SupaSteam</Heading>
        <Image w='40px'
               ml={3}
               src='/assets/steam.svg'
               alt='ttt' />
      </Box>


      <Button
        leftIcon={<Download />}
        bg='#214B6B'
        w='153px'
        h='40px'
        borderRadius='30px'
        fontSize='16px'
        lineHeight='15.3px'
        fontWeight='Bold'
      >
        Install
      </Button>

    </Flex>
  );
}
