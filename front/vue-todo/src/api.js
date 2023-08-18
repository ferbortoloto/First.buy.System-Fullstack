import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',  // Ajuste para o seu endpoint do Spring Boot.
    withCredentials: false,             // Default para requisições CORS.
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getUsers() {
        return apiClient.get('/users');
    },
    getUser(id) {
        return apiClient.get('/users/' + id);
    },
    createUser(user) {
        return apiClient.post('/users', user);
    }
};
