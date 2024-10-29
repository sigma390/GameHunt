import { Games } from '../components/GameGrid';
import { FetchResponse } from '../hooks/useData';
import HttpsService from './HttpsService';

export default new HttpsService<FetchResponse<Games>>('/games');
