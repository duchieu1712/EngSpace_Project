import courseAPI from "../../Services/courseAPI";

export const getCourseList = () => {
  return (dispatch) => {
    dispatch({ type: "GET_COURSELIST_REQUEST" });
    courseAPI
      .getAllCourse()
      .then((result) => {
        dispatch({
          type: "GET_COURSELIST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COURSELIST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getCourse = (courseID) => {
  return (dispatch) => {
    dispatch({ type: "GET_COURSE_REQUEST" });
    courseAPI
      .getCourse(courseID)
      .then((result) => {
        dispatch({
          type: "GET_COURSE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COURSE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getCoursesByUserID = (userID) => {
  return (dispatch) => {
    dispatch({ type: "GET_COURSESBYUSER_REQUEST" });
    courseAPI
      .getCoursesByUser(userID)
      .then((result) => {
        dispatch({
          type: "GET_COURSESBYUSER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COURSESBYUSER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const addCourse = (data) => {
  return (dispatch) => {
    dispatch({ type: "ADD_COURSE_REQUEST" });
    courseAPI
      .postAddCourse(data)
      .then((result) => {
        dispatch({
          type: "ADD_COURSE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_COURSE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateCourse = (courseID,data) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_COURSE_REQUEST" });
    courseAPI
      .putUpdateCourse(courseID,data)
      .then((result) => {
        dispatch({
          type: "UPDATE_COURSE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_COURSE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const deleteCourse = (courseID) => {
  return (dispatch) => {
    dispatch({ type: "DELETE_COURSE_REQUEST" });
    courseAPI
      .deleteCourse(courseID)
      .then((result) => {
        dispatch({
          type: "DELETE_COURSE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_COURSE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};