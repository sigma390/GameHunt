import { FetchResponse } from '../entities/FetchResponse';
import { Games } from '../entities/Games';

import HttpsService from './HttpsService';

export default new HttpsService<FetchResponse<Games>>('/games');
