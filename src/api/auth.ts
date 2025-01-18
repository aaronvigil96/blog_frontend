import axios from '../libs/axios';

export const loginRequest = async (email: string, password: string) => {
    return axios.post('/auth/login',
        {
            email,
            password
        }
    );
}

export const registerUser = async(email:string, password: string, lastname:string, name:string, username:string) => {
    return axios.post('/auth/register', 
        {
            name, lastname, email, password, username
        }
    );
}

export const getProfile = async () => {
    return axios.get('/auth/profile')
}