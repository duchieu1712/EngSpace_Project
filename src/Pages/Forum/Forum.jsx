import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList } from "../../Redux/Actions/forum";
import Box from "@mui/material/Box";
import { Avatar, Container } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import { NavLink } from "react-router-dom";
import "./Forum.scss";
import Loading from "../../Components/Loading/Loading";
import FormatInfo from "../../Utils/formatInfo";
import NewPost from "../../Components/NewPost/NewPost";
import MyButton from "../../Utils/Button/MyButton";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Forum() {
  const dispatch = useDispatch();
  const { postList, loading } = useSelector((state) => state.forumReducer);
  const { currentUser } = useSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPostList());
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Container>
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ textAlign: "center" }}>Diễn đàn EngSpace</h4>
          {currentUser ? (
            <MyButton onClick={handleOpen}>Bài đăng mới</MyButton>
          ) : null}
        </Box>

        <Box className="forumContent">
          {postList.map((item, index) => (
            <Box className="postItem">
              <Box className="postInfo">
                <Avatar style={{ marginRight: "20px" }}>U</Avatar>
                <Box>
                  <NavLink to={`/postdetail/${item.id}`}>{item.name}</NavLink>
                  <FormatInfo
                    date={item.date_created}
                    user={item.user.username}
                  />
                </Box>
              </Box>
              <Box className="postInteract">
                <VisibilityRoundedIcon /> <span>{item.view_count}</span>
                <ThumbUpRoundedIcon /> <span>{item.likes}</span>
                <ThumbDownRoundedIcon /> <span>{item.dislikes}</span>
                <ModeCommentRoundedIcon /> <span>{item.comments}</span>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Bài đăng mới
            </Typography>
          </Toolbar>
        </AppBar>
        <NewPost isUpdate={false} postName={null} postBody={null} />
      </Dialog>
    </Box>
  );
}
