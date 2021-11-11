import React from "react";
import "./Carousel.scss";
import carouselImg from "../../Assets/image/Ads Photo.png";

const Carousel = () => {
  return (
    <div className="content">
      <div className="text">
        <h4>Chào mừng bạn đã đến với EngSpace</h4>
        <p>Nắm vững kiến thức từ vựng cho ngành học của mình</p>
      </div>
      <img src={carouselImg} alt="" />
    </div>
  );
};

export default Carousel;
