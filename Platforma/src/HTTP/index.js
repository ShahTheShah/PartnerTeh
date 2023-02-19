import axios from 'axios';

export const
    $host = axios.create({
        baseURL: 'http://localhost:5000/api'
    }),
    $authHost = axios.create({
        baseURL: 'http://localhost:5000/api'
    });

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('WorkerToken')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);
