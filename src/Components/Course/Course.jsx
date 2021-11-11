import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import imgTest from "../../Assets/image/FlashCard.png";
import { NavLink } from "react-router-dom";

import "./Course.scss";

const Course = (props) => {
  const { course } = props;

  return (
    <NavLink to={`/coursedetail/${course.id}`} style={{textDecoration:"none"}}>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgTest}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
            <Typography variant="subtitle2" style={{marginTop:"20px"}}>
              Create by {course.user.username}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

export default Course;
