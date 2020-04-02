import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://resale-shop.firebaseio.com/'
}); 

export default instance;