import axiosClient from './axiosClient';
class PriceTagApi {
  getAllPriceTag = (params) => {
    const url = '/pricetag';
    return axiosClient.get(url, { params });
  };

  postAllElement = (data) => {
    const url = '/pricetag';
    axiosClient
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  getStampById = (id) => {
    const url = `/pricetag/${id}`;
    return axiosClient.get(url, { id });
  };
}
const priceTagApi = new PriceTagApi();
export default priceTagApi;
