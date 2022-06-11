import * as React from 'react';
import {
  ChakraProvider,
  extendTheme, Box, Grid, VStack,
} from '@chakra-ui/react';
import { Header } from './components/Header';
import { GameList } from './components/GameList';

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh' p={3}>

          <VStack spacing={8}>
            <GameList />


          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
