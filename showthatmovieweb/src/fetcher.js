const axios = require('axios');

const baseURL = 'https://api.example.com'; // Replace with your API base URL

const fetchData = ({ method ="GET", endpoint = baseURL, data = null, headers = {} }) => {
    return new Promise((resolve, reject) => {
        const requestConfig = {
            method,
            url: `${baseURL}`,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            data,
        };

        axios(requestConfig)
            .then((response) => {
                resolve({
                    data: response.data,
                    error: null,
                    status: response.status,
                    isError: false,
                    isSuccess: true,
                });
            })
            .catch((error) => {
                reject({
                    data: null,
                    error: error.response ? error.response.data : error.message,
                    status: error.response ? error.response.status : null,
                    isError: true,
                    isSuccess: false,
                });
            });
    });
};
//
// const get = (endpoint, headers = null) => {
//     return fetchData('get', endpoint, null, headers);
// };
//
// const post = (endpoint, data, headers = null) => {
//     return fetchData('post', endpoint, data, headers);
// };
//
// const put = (endpoint, data, headers = null) => {
//     return fetchData('put', endpoint, data, headers);
// };
//
// const patch = (endpoint, data, headers = null) => {
//     return fetchData('patch', endpoint, data, headers);
// };
//
// const del = (endpoint, headers = null) => {
//     return fetchData('delete', endpoint, null, headers);
// };
//
// module.exports = {
//     get,
//     post,
//     put,
//     patch,
//     del,
// };
export default fetchData;
