import { default as axiosInstance } from './api-client';

class HttpsService<T> {
  endpt: string;
  constructor(endpt: string) {
    this.endpt = endpt;
  }

  //get All
  getAll = async (params?: unknown) => {
    return axiosInstance
      .get<T[]>(this.endpt, { params })
      .then((res) => res.data)
      .catch((err) => err.message);
  };
}

/*

other way arounf Instead Parameters 
use Config : Axios

getAll = async (config:AxiosRequestConfig) => {
    return axiosInstance
      .get<T[]>(this.endpt, config) 
      .then((res) => res.data)
      .catch((err) => err.message);
  };

*/

export default HttpsService;
