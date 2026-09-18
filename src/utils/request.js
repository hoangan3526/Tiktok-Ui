import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});
export const get = async (path, options = {}) => {
    const response = await request.get(path);
    return response.data;
};
export default request;
