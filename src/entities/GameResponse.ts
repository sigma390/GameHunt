import { Games } from './Games';

//==============> OLD ways<=============
// interface Props {
//   selectedGenre: Genre | null;
//   selectedPlatform: Platform | null;
// }
export interface GameResponse {
  count: number;
  next: string;
  previous: string;
  results: Games[];
}
