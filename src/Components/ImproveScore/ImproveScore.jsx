import React from "react";
import "./ImproveScore.scss";
import flashcard from "../../Assets/image/FlashCard.png";
const ImproveScore = () => {
  return (
    <div className="improve">
      <h2>
        <em>90%</em> người dùng cho biết họ đã cải thiện được điểm số
      </h2>
      <div className="item">
        <div className="text">
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            aliquid!
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            necessitatibus veritatis tempora mollitia dicta itaque obcaecati ab
            unde dolorem error.
          </p>
        </div>
        <img src={flashcard} />
      </div>
      <div className="item">
        <img src={flashcard} />
        <div className="text">
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            aliquid!
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            necessitatibus veritatis tempora mollitia dicta itaque obcaecati ab
            unde dolorem error.
          </p>
        </div>
      </div>
      <div className="item">
        <div className="text">
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            aliquid!
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            necessitatibus veritatis tempora mollitia dicta itaque obcaecati ab
            unde dolorem error.
          </p>
        </div>
        <img src={flashcard} />
      </div>
    </div>
  );
};

export default ImproveScore;
