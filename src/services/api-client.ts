import axios from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e567b585f2794138bf1b8ca311af2a25',
  },
});

export default axiosInstance;
