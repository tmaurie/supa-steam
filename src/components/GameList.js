import { supabase } from '../api/api';
import { useEffect, useState } from 'react';
import { GameItem } from './GameItem';
import { Flex } from '@chakra-ui/react';

export function GameList() {

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    let { data, error } = await supabase
      .from('steam')
      .select('*')
      .limit(200);
    if (error) console.log('error', error);
    else setGames(data);
  };

  useEffect(() => {
    fetchGames().catch(console.error);
  }, []);

  return (
    <Flex direction={"column"} bg="brand.darkblue" color="brand.white">
      {games.map(item => (
        <GameItem key={item.id} {...item} />
      ))}
    </Flex>
  );
}
