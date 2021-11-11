const initialState = {
    folderByUser:[],
    loading: false,
    error: null,
  };
  
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
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
        return { ...state, coursesByUser: action.payload.data, loading: false };
      }
      case "GET_COURSESBYUSER_FAIL": {
        return { ...state, error: action.payload.error, loading: false };
      }
  
      default:
        return state;
    }
  };
  
  export default folderReducer;
  