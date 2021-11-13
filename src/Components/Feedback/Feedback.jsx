import React from "react";
import Slider from "react-slick";
import "./Feedback.scss";
import MyButton from "../../Utils/Button/MyButton";
import { NavLink } from "react-router-dom";
const Feedback = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const feedback = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, voluptas.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum blanditiis cum ab odio! Quas, officiis iste?",
  ];

  return (
    <div>
      <Slider {...settings}>
        {feedback.map((item) => {
          return (
            <div className="feedbackContent">
              <h3>{item}</h3>
            </div>
          );
        })}
      </Slider>
      <div className="ready">
        <p>Bạn đã sẵn sàng cải thiện điểm số ?</p>
        <NavLink to='/signup' style={{ textDecoration: "none" }}>
          <MyButton>Bắt đầu học</MyButton>
        </NavLink> 
      </div>
    </div>
  );
};

export default Feedback;
