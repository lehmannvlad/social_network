import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "dad7da94-b80f-4270-b94d-9d267a1ae552"
        }
    }
)

export const userAPI = {
    getUsers(usersCurrentPage,usersPerPage){
    return instance.get(`users?page=${usersCurrentPage}&count=${usersPerPage}`)
        .then(response => response.data )
    },
    followUser(userID){
        return instance.post(`follow/${userID}`)
            .then(response => response.data )
    },
    unFollowUser(userID){
        return instance.delete(`follow/${userID}`)
            .then(response => response.data )
    }
}