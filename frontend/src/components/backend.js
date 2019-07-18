var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  /* other custom settings */
});

module.exports = axiosInstance;