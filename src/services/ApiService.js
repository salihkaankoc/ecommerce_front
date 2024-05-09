import axios from 'axios';

const apiClient = axios.create({
    baseUrl : 'http://localhost:5119'
});


export const login = async (username, password) => {
    try{
        const response = await apiClient.post("http://localhost:5119/api/auth/login", {username, password});
        console.log(response.data)
        return response.data;
    } catch(error) {
        console.log(error)
        throw error;
    }
}