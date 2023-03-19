import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

const api = axios.create({
    baseURL: 'https://ng-backend.onrender.com',
    headers: {
        Authorization: `Bearer ${cookies['ngbackend.token']}`,
    },
});

export default api;
