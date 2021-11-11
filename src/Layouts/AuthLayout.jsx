import React from "react";
import authImg from "../Assets/image/Photo1.png";
import './LayoutStyle.scss';
const AuthLayout = (props) => {
  return (
    <div className="authLayout">
      <div className="imgItem">
        <img src={authImg} alt=""/>
      </div>
      <div style={{width:"50%"}}>{props.children}</div>
    </div>
  );
};

export default AuthLayout;
