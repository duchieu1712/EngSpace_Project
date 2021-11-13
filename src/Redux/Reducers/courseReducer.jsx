const initialState = {
  course: {},
  coursesByUser:[],
  courseList:[],
  loading: false,
  error: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSELIST_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_COURSELIST_SUCCESS": {
      return { ...state, courseList: action.payload.data.results, loading: false };
    }
    case "GET_COURSELIST_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_COURSE_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_COURSE_SUCCESS": {
      return { ...state, course: action.payload.data, loading: false };
    }
    case "GET_COURSE_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }
    case "GET_COURSESBYUSER_REQUEST": {
      return { ...state, loading: true, error: null };
    }
    case "GET_COURSESBYUSER_SUCCESS": {
      return { ...state, coursesByUser: action.payload.data.results, loading: false };
    }
    case "GET_COURSESBYUSER_FAIL": {
      return { ...state, error: action.payload.error, loading: false };
    }

    default:
      return state;
  }
};

export default courseReducer;
