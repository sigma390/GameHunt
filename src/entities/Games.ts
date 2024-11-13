import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export interface Games {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
}
