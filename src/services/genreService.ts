import { FetchResponse } from '../hooks/useData';
import HttpsService from './HttpsService';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default new HttpsService<FetchResponse<Genre>>('/genres');
