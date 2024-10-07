import useGames from '../hooks/useGames';

export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: GamesProps[];
}
export interface GamesProps {
  id: number;
  name: string;
}

const GameGrid = () => {
  const { games, errmsg } = useGames();

  return (
    <>
      <div>
        {errmsg && <p>{errmsg}</p>}
        <ul>
          {games.map((game) => {
            return <li key={game.id}>{game.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default GameGrid;
