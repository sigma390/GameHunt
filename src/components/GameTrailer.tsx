import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number | undefined;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId!);

  // Render nothing if loading or if there's an error
  if (isLoading || error) return null;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
