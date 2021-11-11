import topicAPI from "../../Services/topicAPI";

export const getTopicList = () => {
    return (dispatch) => {
      dispatch({ type: "GET_TOPICLIST_REQUEST" });
      topicAPI
        .getListTopic()
        .then((result) => {
          dispatch({
            type: "GET_TOPICLIST_SUCCESS",
            payload: { data: result.data },
          });
        })
        .catch((error) => {
          dispatch({
            type: "GET_TOPICLIST_FAIL",
            payload: { error: error.response.data },
          });
        });
    };
  };
  