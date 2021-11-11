import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: "https://engspace-be-ff5wy.ondigitalocean.app/api",
})

axiosClient.interceptors.request.use(config => {
    const user = localStorage.getItem('user');
    if(user) {
        const {access} = JSON.parse(user)
        config.headers.common.Authorization = `Bearer ${access};`
    }
    return config
})

// {"email":"test12357@gmail.com","username":"test12356","first_name":"tran","last_name":"duc bo"} 