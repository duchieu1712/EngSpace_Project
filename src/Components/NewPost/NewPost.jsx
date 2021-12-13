import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MyEditor from "../MyEditor/MyEditor";
import MyButton from "../../Utils/Button/MyButton";
import { postNewPost, putUpdatePost } from "../../Redux/Actions/forum";
export default function NewPost(props) {
  const {post, isUpdate} = props;
  const { currentUser } = useSelector((state) => state.userReducer);
  const [newPost, setNewPost] = useState({
    user: {
      username: currentUser.username,
    },
    name: post?.name || "",
    body: post?.body || "",
    view_count: post?.view_count,
    is_public: true,
  })
  
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setNewPost({...newPost, name: e.target.value})
  };

  const handleSubmit = () => {
    if(isUpdate){
      dispatch(putUpdatePost(post.id, newPost));
      console.log(post.id, newPost);
    }else{
      dispatch(postNewPost(newPost));
    }
  };

  return (
    <Container style={{ marginTop: "100px", maxWidth: "900px" }}>
      <TextField
        label="Tiêu đề bài viết"
        variant="outlined"
        style={{ width: "100%", marginBottom: "50px" }}
        onChange={handleChangeName}
        value={newPost.name}
      />
      <MyEditor
        handleChange={(data) => {
          setNewPost({...newPost,body: data});
        }}
        data={newPost.body}
        {...props}
        style={{ minHeight: "300px" }}
        value={newPost.body}
      />
      <MyButton style={{ marginLeft: 0 }} onClick={handleSubmit}>
        {isUpdate ? "Cập nhật" : "Đăng"}
      </MyButton>
    </Container>
  );
}
