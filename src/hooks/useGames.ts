// import { GameQuery } from '../App';
// import { Games } from '../components/GameGrid';
// import useData from './useData';

// const useGames = (
//   // selectedGenre: Genre | null,
//   // selectedPlatform: Platform | null
//   gameQuery: GameQuery
// ) => {
//   // Create requestConfig dynamically based on selectedGenre

//   return useData<Games>(
//     '/games',
//     // { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
//     // [selectedGenre?.id, selectedPlatform?.id]
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchTxt,
//       },
//     },
//     [gameQuery]
//   );
// };

//========================= >New WAY<==================================
// export default useGames;
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Games } from '../components/GameGrid';
import gameService from '../services/gameService';
import { FetchResponse } from './useData';

const useGames = (gameQuery: GameQuery) => {
  const qry = useQuery<FetchResponse<Games>>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      gameService.getAll({
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTxt,
      }),
  });
  return qry;
};

export default useGames;
