import * as axios from "axios";
import { follow, unFollow } from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2284dbf7-d44b-43f5-bec8-0955d6a517ff"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
             return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please chek profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}
/*export const followUnFollowAPI = {
    unFollow(userId) {  
        return instance.delete(`follow/${userId}`, {})
            .then(response => {
            if (response.data.resultCode == 0) {
                unFollow(userId);
            }
        });
    },
    folow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
            if (response.data.resultCode == 0) {
                follow(userId);
            }
        });
                        
    }
}*/
