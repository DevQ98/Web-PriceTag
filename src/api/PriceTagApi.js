const pricetagApi = {
    getAll = (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    }
}
export default pricetagApi;