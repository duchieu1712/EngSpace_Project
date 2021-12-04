import forumAPI from "../../Services/forumAPI";

export const getPostList = () => {
  return (dispatch) => {
    dispatch({ type: "GET_POSTLIST_REQUEST" });
    forumAPI
      .getAllPost()
      .then((result) => {
        dispatch({
          type: "GET_POSTLIST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTLIST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getPostDetail = (postID) => {
  return (dispatch) => {
    dispatch({ type: "GET_POST_REQUEST" });
    forumAPI
      .getPost(postID)
      .then((result) => {
        dispatch({ 
          type: "GET_POST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const postNewPost = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_NEWPOST_REQUEST" });
    forumAPI
      .postForumPost(data)
      .then((result) => {
        dispatch({
          type: "ADD_NEWPOST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_NEWPOST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const putUpdatePost = (postID, data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_POST_REQUEST" });
    forumAPI
      .putEditPost(postID, data)
      .then((result) => {
        dispatch({
          type: "UPDATE_POST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_POST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deletePost = (postID) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_POST_REQUEST" });
    forumAPI
      .deletePost(postID)
      .then((result) => {
        dispatch({
          type: "DELETE_POST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_POST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const postLike = (values) => {
  return (dispatch) => {
    dispatch({ type: "POST_POSTLIKE_REQUEST" });
    forumAPI
      .postLike(values)
      .then((result) => {
        dispatch({
          type: "POST_POSTLIKE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "POST_POSTLIKE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getCommentsPost = (postID) => {
  return (dispatch) => {
    dispatch({ type: "GET_COMMENTS_REQUEST" });
    forumAPI
      .getCommentsPost(postID)
      .then((result) => {
        dispatch({
          type: "GET_COMMENTS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COMMENTS_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const postComment = (data) => {
  return (dispatch) => {
    dispatch({ type: "POST_COMMENTS_REQUEST" });
    forumAPI
      .postComment(data)
      .then((result) => {
        dispatch({
          type: "POST_COMMENTS_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "POST_COMMENTS_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};
