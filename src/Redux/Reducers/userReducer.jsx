const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  currentUser: currentUser,
  userList: [],
  user:{},
  userProfile:{},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "SIGNIN_SUCCESS": {
      return { ...state, currentUser: action.payload.data, loading: false };
    }
    case "SIGNIN_FAIL": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "SIGNUP_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "SIGNUP_SUCCESS": {
      return { ...state, currentUser: action.payload.data, loading: false };
    }
    case "SIGNUP_FAIL": {
      return { ...state, loading: false, error: action.payload.error };
    }
    case "GET_USERLIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USERLIST_SUCCESS": {
      return { ...state, userList: action.payload.data, loading: false };
    }
    case "GET_USERLIST_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_USER_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USER_SUCCESS": {
      return { ...state, user: action.payload.data, loading: false };
    }
    case "GET_USER_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_USERPROFILE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_USERPROFILE_SUCCESS": {
      return { ...state, userProfile: action.payload.data, loading: false };
    }
    case "GET_USERPROFILE_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    default:
      return state;
  }
};

export default userReducer;
