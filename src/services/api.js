import axios from "axios";

const api = axios.create({
    baseURL: 'API_STRING_URL'
});

export default api;