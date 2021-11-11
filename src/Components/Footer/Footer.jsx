import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="panel-1">
          <div className="eng-space-logo">
            <img
            className="logo"
            src="logo.svg"
            />
            <h1 className="title">
              EngSpace
            </h1>
          </div>
          <div className="register-label">
            Đăng ký để nhận thêm thông tin bổ ích
          </div>
          <div className="register-email">
            <div classname="input-group">
              <div className="input-email">
                Nhập email
              </div>
            </div>
            <div className="button-group">
              <div className="dangky">
                Đăng ký
              </div>
            </div>
          </div>
        </div>
        <div className="panel-2">
          <div className="general">
            Chung
          </div>
          <div className="about-us">
            Về chúng tôi
          </div>
          <div className="about-web">
            Về trang web
          </div>
          <div className="privacy">
            Chính sách
          </div>
          <div className="faq">
            Câu hỏi
          </div>
        </div>
      </div>
      <div className="end-line"></div>
      <div className="panel-3">
        <div className="watermark">
          @2021 EngSpace.All Rights Reserved
        </div>
        <img
        className="facebook"
        src="facebook.svg"
        />
        <img
        className="ig"
        src="ig.svg"
        />
        <img
        classname="twitter"
        src="twitter.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
