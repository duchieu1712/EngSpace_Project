import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "./FlashCard.scss";
import ReactCardFlip from "react-card-flip";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const FlashCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    nextArrow: <KeyboardArrowRightRoundedIcon />,
    prevArrow: <KeyboardArrowLeftRoundedIcon />,
  };
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Box sx={{ width: 600 }}>
      <Slider {...settings}>
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <Paper elevation={6} className="paper">
            <div className="card_item" onClick={handleClick}>
              <p>front</p>
            </div>
          </Paper>
          <Paper elevation={6} className="paper">
            <div className="card_item" onClick={handleClick}>
              <p>back</p>
            </div>
          </Paper>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <Paper elevation={6} className="paper">
            <div className="card_item" onClick={handleClick}>
              <p>front</p>
            </div>
          </Paper>
          <Paper elevation={6} className="paper">
            <div className="card_item" onClick={handleClick}>
              <p>back</p>
            </div>
          </Paper>
        </ReactCardFlip>
      </Slider>
    </Box>
  );
};

export default FlashCard;
