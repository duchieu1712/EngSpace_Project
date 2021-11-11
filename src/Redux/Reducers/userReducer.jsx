const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  currentUser: currentUser,
  userList: [],
  user:{},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default userReducer;