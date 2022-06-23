import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "2284dbf7-d44b-43f5-bec8-0955d6a517ff"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
             return response.data;
        });
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
     .then(response => {
         return response.data;
    });
}

