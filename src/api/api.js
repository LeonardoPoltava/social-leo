import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "edd374dd-87c3-43d5-9f84-18ff67372711"
    }
});
export const usersAPI = {
    getUsers(currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
};
export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    }
};
export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
export const profileAPI = {
    profile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, {headers: {
                "Content-type": "multipart/form-data"
            }
        });
    }
};