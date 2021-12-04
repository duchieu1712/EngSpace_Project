import TokenService from "../../Services/services.token";
import userAPI from "../../Services/userAPI";

export const signIn = (user) => {
  return (dispatch) => {
    dispatch({
      type: "SIGNIN_REQUEST",
    });
    userAPI
      .postSignIn(user)
      .then((result) => {
        TokenService.setUser(result.data);
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
        TokenService.setUser(result.data);
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

export const getProfileUser = () => {
  return (dispatch) => {
    dispatch({ type: "GET_USERPROFILE_REQUEST" });
    userAPI
      .getUserProfile()
      .then((result) => {
        dispatch({
          type: "GET_USERPROFILE_SUCCESS",
          payload: { data: result.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_USERPROFILE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const updateProfileUser = (values) => {
  return (dispatch) => {
    dispatch({ type: "PUT_USERPROFILE_REQUEST" });
    userAPI
      .putUserProfile(values)
      .then((result) => {
        dispatch({
          type: "PUT_USERPROFILE_SUCCESS",
          payload: { data: result.data },
        });
        alert("Chỉnh sửa hồ sơ thành công !!!")
      })
      .catch((error) => {
        dispatch({
          type: "PUT_USERPROFILE_FAIL",
          payload: { error: error.response.data },
        });
      });
  };
};

export const changePassword = (userID, values) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_PASSWORD_REQUEST" });
    userAPI
      .putChangePassword(userID, values)
      .then((result) => {
        dispatch({
          type: "CHANGE_PASSWORD_SUCCESS",
          payload: { data: result.data },
        });
        alert("Đổi mật khẩu thành công !!!")
      })
      .catch((error) => {
        dispatch({
          type: "CHANGE_PASSWORD_FAIL",
          payload: { error: error.response.data },
        });
        alert("Đổi mật khẩu không thành công !!!")
      });
  };
};