import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-9ff4d.firebaseio.com/'
});

export default instance;