import {axiosClient} from "../Utils/axiosClient";

const courseAPI = {
    getAllCourse: () => {
        const path = "/sets/";
        return axiosClient.get(path);
    },
    getCourse: (courseID) => {
        const path = `/sets/${courseID}/`;
        return axiosClient.get(path);
    },
    getCoursesByUser: (userID) => {
        const path = `/sets/user/${userID}/`;
        return axiosClient.get(path);
    },
    postAddCourse: (data) => {
        const path = "/sets/";
        return axiosClient.post(path, data);
    },
    patchUpdateCourse: (courseID,data) => {
        const path = `/sets/${courseID}/`;
        return axiosClient.patch(path, data);
    },
    deleteCourse: (courseID) => {
        const path = `/sets/${courseID}/`;
        return axiosClient.delete(path);
    },
    deleteTerm: (termID) => {
        const path = `/set-details/${termID}/`;
        return axiosClient.delete(path);
    }
}

export default courseAPI;