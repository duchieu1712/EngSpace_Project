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
    }
}

export default userAPI;