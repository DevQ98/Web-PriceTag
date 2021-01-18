import axios from 'axios';
import axiosClient from './axiosClient';
class ElementsApi {
  getAllElements = (params) => {
    const url = '/element';
    return axiosClient.get(url, { params });
  };
  postData = (data) => {
    const url = 'http://localhost:8080/api/element';
    axios
      .post(url, { ...data })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
}
const elementsApi = new ElementsApi();
export default elementsApi;
