const initialState = {
  topicList: [],
  loading: false,
  error: null,
};

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOPICLIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_TOPICLIST_SUCCESS": {
      return { ...state, topicList: action.payload.data.results, loading: false };
    }
    case "GET_TOPICLIST_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    default:
      return state;
  }
};

export default topicReducer;
