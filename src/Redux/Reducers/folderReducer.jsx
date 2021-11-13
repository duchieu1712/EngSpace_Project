const initialState = {
    folderByUser:[],
    loading: false,
    error: null,
  };
  
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FOLDERSBYUSER_REQUEST": {
        return { ...state, loading: true, error: null };
      }
      case "GET_FOLDERSBYUSER_SUCCESS": {
        return { ...state, folderByUser: action.payload.data.results, loading: false };
      }
      case "GET_FOLDERSBYUSER_FAIL": {
        return { ...state, error: action.payload.error, loading: false };
      }
  
      default:
        return state;
    }
  };
  
  export default folderReducer;
  