import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3030' //URL local na porta que a API vai rodar
});

export default api;