import folderAPI from "../../Services/folderAPI";

export const getFolderByUserID = (userID) => {
  return (dispatch) => {
    dispatch({ type: "GET_FOLDERSBYUSER_REQUEST" });
    folderAPI
      .getFolderByUser(userID)
      .then((result) => {
        dispatch({
          type: "GET_FOLDERSBYUSER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_FOLDERSBYUSER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addFolder = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_FOLDER_REQUEST" });
    folderAPI
      .postAddFolder(data)
      .then((result) => {
        dispatch({
          type: "ADD_FOLDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_FOLDER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateFolder = (folderID,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_FOLDER_REQUEST" });
    folderAPI
      .putUpdateFolder(folderID,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_FOLDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_FOLDER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteFolder = (folderID) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_FOLDER_REQUEST" });
    folderAPI
      .deleteFolder(folderID)
      .then((result) => {
        dispatch({
          type: "DELETE_FOLDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_FOLDER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addCourseToFolder = (values) => {
  return (dispatch) => {
    dispatch({ type: "ADD_COURSE_FOLDER_REQUEST" });
    folderAPI
      .postCourseToFolder(values)
      .then((result) => {
        dispatch({
          type: "ADD_COURSE_FOLDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_COURSE_FOLDER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteCourseFolder = (values) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_COURSE_FOLDER_REQUEST" });
    folderAPI
      .deleteCourseToFolder(values)
      .then((result) => {
        dispatch({
          type: "DELETE_COURSE_FOLDER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_COURSE_FOLDER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};