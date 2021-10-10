import React from "react";
import authImg from "../Assets/image/QZ_Auth_Light.png";
import './LayoutStyle.scss';
const AuthLayout = (props) => {
  return (
    <div className="authLayout">
      <div className="imgItem">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste?</h3>
        <img src={authImg} />
      </div>
      <div style={{width:"50%"}}>{props.children}</div>
    </div>
  );
};

export default AuthLayout;
