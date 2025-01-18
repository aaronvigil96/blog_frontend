import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const authApi = axios.create({
    baseURL: "http://localhost:3001/v1/api"
})

authApi.interceptors.request.use((config) => {
    
    const token = useAuthStore.getState().token;
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
});


export default authApi