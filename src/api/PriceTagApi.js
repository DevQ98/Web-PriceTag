import axios from 'axios';
import axiosClient from './axiosClient';
class PriceTagApi {
  getAll = (params) => {
    const url = '/pricetag';
    return axiosClient.get(url, { params });
  };
}
const priceTagApi = new PriceTagApi();
export default priceTagApi;
