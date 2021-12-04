import {axiosClient} from "../Utils/axiosClient";

const folderAPI = {
    getFolderByUser: (userID) => {
        const path = `/folders/user/${userID}/`;
        return axiosClient.get(path);
    },
    postAddFolder: (data) => {
        const path = "/folders/";
        return axiosClient.post(path, data);
    },
    putUpdateFolder: (folderID,data) => {
        const path = `/folders/${folderID}/`;
        return axiosClient.put(path, data);
    },
    deleteFolder: (folderID) => {
        const path = `/folders/${folderID}/`;
        return axiosClient.delete(path);
    },
    postCourseToFolder: (data) => {
        const path = "/folder-sets/";
        return axiosClient.post(path, data);
    },
    deleteCourseToFolder: (data) => {
        const path = "/folder-sets/";
        return axiosClient.delete(path,{data:data});
    }
}

export default folderAPI;