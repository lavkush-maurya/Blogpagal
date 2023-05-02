import axios from "axios";

export const BlogAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        Accept:'application/json',
        Authorization: localStorage.getItem("token")
    }
})