import axios from "axios";

const api = axios.create({
    baseURL:"http://171.244.39.12:8002"
});

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;