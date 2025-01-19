import axios from "../libs/axios";

export const getAllPosts = async () => {
    return axios.get('/post')
}

export const createPost = async (title: string, content: string) => {
    return axios.post('/post', {
        title, content
    })
}