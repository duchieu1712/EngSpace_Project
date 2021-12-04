import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import {
  getCommentsPost,
  getPostDetail,
  postComment,
  postLike,
} from "../../Redux/Actions/forum";
import MyButton from "../../Utils/Button/MyButton";
import "./PostDetail.scss";

export default function PostDetail(props) {
  // console.log(props.match.params.postID);
  const dispatch = useDispatch();
  const { postDetail, comments, loading } = useSelector(
    (state) => state.forumReducer
  );
  const { currentUser } = useSelector((state) => state.userReducer);
  const [loadingLike, setLoadingLike] = useState(false);
  const [loadingDislike, setLoadingDislike] = useState(false);
  const [reply, setReply] = useState({ index: 0, isReply: false });
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(getPostDetail(props.match.params.postID));
    dispatch(getCommentsPost(props.match.params.postID));
    // eslint-disable-next-line
  }, [props.match.params.postID]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleLike = () => {
    setLoadingLike(true);
    dispatch(
      postLike({
        user: {
          username: currentUser.username,
        },
        is_like: true,
        post: postDetail.id,
      })
    );

    setTimeout(() => {
      setLoadingLike(false);
    }, 1000);
  };
  const handleDislike = () => {
    setLoadingDislike(true);
    dispatch(
      postLike({
        user: {
          username: currentUser.username,
        },
        is_like: false,
        post: postDetail.id,
      })
    );

    setTimeout(() => {
      setLoadingDislike(false);
    }, 1000);
  };
  const submitComment = (parentID) => {
    if (parentID) {
      dispatch(
        postComment({
          user: {
            username: currentUser.username,
          },
          body: input,
          post: postDetail.id,
          parent: parentID,
        })
      );
    } else {
      dispatch(
        postComment({
          user: {
            username: currentUser.username,
          },
          body: input,
          post: postDetail.id,
          // parent: 0,
        })
      );
    }

    setTimeout(() => {
      dispatch(getCommentsPost(postDetail.id));
    }, 2000);
  };
  const handleReply = (index) => {
    setReply({ index: index, isReply: !reply.isReply });
  };
  const commentInput = (parentID) => {
    return (
      <Box style={{ marginBottom: "20px", textAlign: "end", width: 600 }}>
        <Box className="commentItem">
          <Avatar sx={{ width: 56, height: 56, marginRight: "20px" }}>U</Avatar>
          <TextareaAutosize
            minRows={3}
            placeholder="Viết bình luận"
            style={{ width: "100%" }}
            onChange={handleChange}
          />
        </Box>
        <MyButton
          style={{ marginTop: "10px" }}
          onClick={() => submitComment(parentID)}
        >
          Gửi
        </MyButton>
      </Box>
    );
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Container>
        <Box className="postTitle">
          <Avatar sx={{ width: 56, height: 56, marginRight: "20px" }}>U</Avatar>
          <Box>
            <h4>{postDetail.name}</h4>
            {/* <FormatInfo date={postDetail.date_created} user={username}/> */}
            <p style={{ fontSize: "14px" }}>
              {postDetail.date_created?.slice(11, 16)},{" "}
              {postDetail.date_created?.slice(8, 10)} tháng{" "}
              {postDetail.date_created?.slice(5, 7)} năm{" "}
              {postDetail.date_created?.slice(0, 4)} từ{" "}
              {postDetail.user?.username}
            </p>
          </Box>
        </Box>
        <Box className="postBody">{postDetail.body}</Box>
        <Box className="postCount">
          <Box style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>
              <ThumbUpRoundedIcon /> <span>{postDetail.likes}</span>
            </div>
            <div>
              <ThumbDownRoundedIcon /> <span>{postDetail.dislikes}</span>
            </div>
          </Box>
          <p>{postDetail.view_count} lượt xem</p>
        </Box>
        <Box className="interact">
          <LoadingButton
            onClick={handleLike}
            startIcon={<ThumbUpRoundedIcon />}
            loading={loadingLike}
            loadingPosition="start"
            variant="outlined"
            style={{ marginRight: "20px" }}
          >
            Thích
          </LoadingButton>
          <LoadingButton
            color="error"
            onClick={handleDislike}
            loading={loadingDislike}
            loadingPosition="start"
            startIcon={<ThumbDownRoundedIcon />}
            variant="outlined"
          >
            Không thích
          </LoadingButton>
        </Box>
        <Box className="comments">
          <h6>{comments.length} lượt bình luận</h6>
          <Box className="commentList">
            {commentInput()}
            {comments?.map((item, index) => (
              <Box>
                <Box className="commentItem">
                  <Avatar sx={{ width: 48, height: 48, marginRight: "20px" }}>
                    U
                  </Avatar>
                  <Box>
                    <h5>{item.user.username}</h5>
                    <p>{item.body}</p>
                    <h6>
                      {item.date_created?.slice(11, 16)},{" "}
                      {item.date_created?.slice(8, 10)} tháng{" "}
                      {item.date_created?.slice(5, 7)} năm{" "}
                      {item.date_created?.slice(0, 4)}
                    </h6>
                    <Button onClick={() => handleReply(index)}>Trả lời</Button>
                    {reply.index === index && reply.isReply
                      ? commentInput(item.id)
                      : null}
                  </Box>
                </Box>
                {item.childrens?.map((child, idx) => (
                  <Box className="commentItem" style={{marginLeft:"80px"}}>
                    <Avatar sx={{ width: 48, height: 48, marginRight: "20px" }}>
                      U
                    </Avatar>
                    <Box>
                      <h5>{child.user.username}</h5>
                      <p>{child.body}</p>
                      <h6>
                        {child.date_created?.slice(11, 16)},{" "}
                        {child.date_created?.slice(8, 10)} tháng{" "}
                        {child.date_created?.slice(5, 7)} năm{" "}
                        {child.date_created?.slice(0, 4)}
                      </h6>
                      {/* <Button onClick={() => handleReply(idx)}>Trả lời</Button>
                      {reply.idx === idx && reply.isReply
                        ? commentInput(child.id)
                        : null} */}
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
