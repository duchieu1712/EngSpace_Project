const initialState = {
  postList: [],
  postDetail:{},
  comments: [],
  loading: false,
  error: null,
};

const forumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTLIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_POSTLIST_SUCCESS": {
      return {
        ...state,
        postList: action.payload.data.results,
        loading: false,
      };
    }
    case "GET_POSTLIST_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_POST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_POST_SUCCESS": {
      return {
        ...state,
        postDetail: action.payload.data,
        loading: false,
      };
    }
    case "GET_POST_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_COMMENTS_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_COMMENTS_SUCCESS": {
      return {
        ...state,
        comments: action.payload.data.results,
        loading: false,
      };
    }
    case "GET_COMMENTS_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }

    // case "POST_POSTLIKE_REQUEST": {
    //   return { ...state, loading: true, error: null };
    // }
    // case "POST_POSTLIKE_SUCCESS": {
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    // }
    // case "POST_POSTLIKE_FAIL": {
    //   return { ...state, error: action.payload.error, loading: false };
    // }
    default:
      return state;
  }
};

export default forumReducer;
