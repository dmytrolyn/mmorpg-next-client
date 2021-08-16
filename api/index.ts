import axios, { AxiosInstance } from 'axios';

export default class ApiInstance {
    instance: AxiosInstance;

    constructor(urlPath: string) {
        this.instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL + urlPath,
            withCredentials: true,
            headers: {
                "Content-type": "application/json",
            }
        })
    }
}

export const ApiService = new ApiInstance('/');
