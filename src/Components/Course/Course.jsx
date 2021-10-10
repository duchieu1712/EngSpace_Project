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
    <NavLink to={`/coursedetail/${course.id}`}>
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
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
};

export default Course;
