import { FetchResponse } from './api-client';
import HttpsService from './HttpsService';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new HttpsService<FetchResponse<Platform>>(
  '/platforms/lists/parents'
);
