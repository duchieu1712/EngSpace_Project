import {axiosClient} from "../Utils/axiosClient";

const userAPI = {
    postSignIn: (user) => {
        const path = "/users/login/";
        return axiosClient.post(path, user);
    },
    postSignUp: (user) => {
        const path = "/users/register/";
        return axiosClient.post(path, user);
    },
    getUserList: () => {
        const path = "/users/all/";
        return axiosClient.get(path)
    },
    getUserDetail: (userID) => {
        const path = `/users/${userID}/`
        return axiosClient.get(path)
    },
    getUserProfile: () => {
        const path = "/users/profile/"
        return axiosClient.get(path)
    },
    putUserProfile: (data) => {
        const path = "/users/profile/"
        return axiosClient.put(path, data)
    },
    putChangePassword: (userID, data) => {
        const path = `/users/profile/change_password/${userID}/`
        return axiosClient.put(path, data)
    },
    patchUserAvatar: (data) => {
        const path = "/users/profile/"
        return axiosClient.patch(path, data)
    }
}

export default userAPI;