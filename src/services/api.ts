import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Authorization: `Bearer ${cookies['ngbackend.token']}`,
    },
});

export default api;
