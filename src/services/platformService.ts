import { FetchResponse } from '../entities/FetchResponse';
import { Platform } from '../entities/Platform';
import HttpsService from './HttpsService';

export default new HttpsService<FetchResponse<Platform>>(
  '/platforms/lists/parents'
);
