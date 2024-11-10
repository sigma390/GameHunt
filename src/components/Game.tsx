import { useParams } from 'react-router-dom';

const Game = () => {
  const query = useParams();
  const { id } = query;
  console.log(query);
  return <div>{id}</div>;
};

export default Game;
