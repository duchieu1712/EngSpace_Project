import { axiosClient } from "../Utils/axiosClient";

const forumAPI = {
    getAllPost: () => {
        const path = "/forum/posts/";
        return axiosClient.get(path)
    },
    getPost: (postID) => {
        const path = `/forum/posts/${postID}/`;
        return axiosClient.get(path)
    },
    postForumPost: (data) => {
        const path = "/forum/posts/";
        return axiosClient.post(path, data)
    },
    putEditPost: (postID, data) => {
        const path = `/forum/posts/${postID}/`;
        return axiosClient.put(path, data)
    },
    deletePost: (postID) => {
        const path = `/forum/posts/${postID}/`;
        return axiosClient.delete(path)
    },

    getCommentsPost: (postID) => {
        const path = `/forum/comments/post/${postID}/`;
        return axiosClient.get(path)
    },
    postComment: (data) => {
        const path = "/forum/comments/";
        return axiosClient.post(path, data)
    },
    deleteComment: (commentID) => {
        const path = `/forum/comments/${commentID}/`;
        return axiosClient.delete(path)
    },

    postLike: (data) => {
        const path = "/forum/post-likes/";
        return axiosClient.post(path, data)
    },
}

export default forumAPI;