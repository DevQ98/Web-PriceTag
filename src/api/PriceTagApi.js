import axios from 'axios';
import axiosClient from './axiosClient';
class PriceTagApi {
  getAllPriceTag = (params) => {
    const url = '/pricetag';
    return axiosClient.get(url, { params });
  };

  postAllElement = (params) => {
    const url = `/pricetag`;
    return axiosClient.post(url, { params });
  };
}
const priceTagApi = new PriceTagApi();
export default priceTagApi;
