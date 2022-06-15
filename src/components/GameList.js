import { supabase } from '../api/api';
import { useEffect, useState } from 'react';
import { GameItem } from './GameItem';

export function GameList() {

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    let { data, error } = await supabase
      .from('steam')
      .select('*')
      .limit(5);
    if (error) console.log('error', error);
    else setGames(data);
  };

  useEffect(() => {
    fetchGames().catch(console.error);
  }, []);

  return (
    <ul>
      {games.map(item => (
        <GameItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
