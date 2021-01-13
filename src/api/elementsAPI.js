import axios from 'axios';
import axiosClient from './axiosClient';
class elementsApi {
  getAllElements = (params) => {
    const url = '/elements';
    return axiosClient.get(url, { params });
  };

  postAllElement = (params) => {
    const url = `/elements`;
    return axiosClient.post(url, { params });
  };
}
const eleApi = new elementsApi();
export default eleApi;
