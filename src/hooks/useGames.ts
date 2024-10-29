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
import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Games } from '../components/GameGrid';
import { FetchResponse } from '../services/api-client';
import gameService from '../services/gameService';

// const useGames = (gameQuery: GameQuery) => {
//   const qry = useQuery<FetchResponse<Games>>({
//     queryKey: ['games', gameQuery],
//     queryFn: () =>
//       gameService.getAll({
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchTxt,
//       }),
//   });
//   return qry;
// };

/*
other Way is  
But we have to Create apiClint everytime


const apiClinet = new ApiClinet<Games>();

useQuery({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClinet.getAll({
  genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTxt,
  })
})
*/

//===================> Implementing Infinite Query <===================
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Games>>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTxt,
        page: pageParam,
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    initialPageParam: 1, // Add this line to specify the initial page parameter
  });
};

export default useGames;
