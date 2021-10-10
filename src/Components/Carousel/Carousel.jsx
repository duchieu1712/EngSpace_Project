import React from "react";
import "./Carousel.scss";
import carouselImg from "../../Assets/image/carouselTest.png";

const Carousel = () => {
  return (
    <div className="background">
      <div className="content">
        <div className="overlay"></div>
        <img src={carouselImg} />
        <div className="text">
          <h4>Trở thành phiên bản xuất sắc nhất của chính bạn</h4>
          <p>Nắm vững kiến thức từ vựng cho ngành học của mình</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
