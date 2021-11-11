import {axiosClient} from "../Utils/axiosClient";

const topicAPI = {
    getListTopic: () => {
        const path = "/topics/";
        return axiosClient.get(path);
    },
    // postAddTopic: (data) => {
    //     const path = "/topics/";
    //     return axiosClient.post(path, data)
    // }
}

export default topicAPI;