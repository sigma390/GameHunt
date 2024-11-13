import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data?.results[0].data[480]);
  if (isLoading) return <div>Loading</div>;
  if (error) throw new Error();
  return (
    <video
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
      controls
    />
  );
};

export default GameTrailer;
