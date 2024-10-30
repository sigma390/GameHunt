import useGenre from './useGenre';

const useGen = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((g) => g.id === id);
};

export default useGen;
