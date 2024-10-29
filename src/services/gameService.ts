import { Games } from '../components/GameGrid';
import { FetchResponse } from './api-client';

import HttpsService from './HttpsService';

export default new HttpsService<FetchResponse<Games>>('/games');
