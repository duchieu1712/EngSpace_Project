import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList } from "../../Redux/Actions/forum";
import Box from "@mui/material/Box";
import { Avatar, Container } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {NavLink} from 'react-router-dom';
import "./Forum.scss";
import Loading from "../../Components/Loading/Loading";
import FormatInfo from "../../Utils/formatInfo";
export default function Forum() {
  const dispatch = useDispatch();
  const { postList, loading } = useSelector((state) => state.forumReducer);
  useEffect(() => {
    dispatch(getPostList());
    // eslint-disable-next-line
  }, []);
  
  if(loading){
    return <Loading/>
  }
  return (
    <Box>
      <Container>
        <h4 style={{ textAlign: "center" }}>Diễn đàn EngSpace</h4>
        <Box className="forumContent">
          {postList.map((item, index) => (
            <Box className="postItem">
              <Box className="postInfo">
                <Avatar style={{marginRight: "20px"}}>U</Avatar>
                <Box>
                  <NavLink to={`/postdetail/${item.id}`}>{item.name}</NavLink>
                  <FormatInfo date={item.date_created} user={item.user.username}/>
                </Box>
              </Box>
              <Box className="postInteract">
                <VisibilityRoundedIcon/> <span>{item.view_count}</span>
                <ThumbUpRoundedIcon /> <span>{item.likes}</span>
                <ThumbDownRoundedIcon /> <span>{item.dislikes}</span>
                <ModeCommentRoundedIcon /> <span>{item.comments}</span>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
