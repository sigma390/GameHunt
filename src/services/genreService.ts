import { FetchResponse } from './api-client';
import HttpsService from './HttpsService';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default new HttpsService<FetchResponse<Genre>>('/genres');
