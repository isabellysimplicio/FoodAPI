import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1'
})

