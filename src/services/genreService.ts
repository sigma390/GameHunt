import { FetchResponse } from '../entities/FetchResponse';
import { Genre } from '../entities/Genre';
import HttpsService from './HttpsService';
export default new HttpsService<FetchResponse<Genre>>('/genres');
