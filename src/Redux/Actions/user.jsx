import userAPI from "../../Services/userAPI";

export const signIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: "SIGNIN_REQUEST",
    });
    userAPI
      .postSignIn(user)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: "SIGNIN_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNIN_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const signUp = (user) => {
  return (dispatch) => {
    dispatch({ type: "SIGNUP_REQUEST" });
    userAPI
      .postSignUp(user)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.data));
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "SIGNUP_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getUserList = () => {
  return (dispatch) => {
    dispatch({ type: "GET_USERLIST_REQUEST" });
    userAPI
      .getUserList()
      .then((result) => {
        dispatch({
          type: "GET_USERLIST_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_USERLIST_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const getUser = (userID) => {
  return (dispatch) => {
    dispatch({ type: "GET_USER_REQUEST" });
    userAPI
      .getUserDetail(userID)
      .then((result) => {
        dispatch({
          type: "GET_USER_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_USER_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};
