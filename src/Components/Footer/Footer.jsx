import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className="footerPosition">
      <div className="footer-16371">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <div className="footer-site-logo mb-4">
                <a href="#">EngSpace</a>
              </div>
              <ul className="list-unstyled nav-links mb-5">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="social mb-4">
                <h3>Stay in touch</h3>
                <ul className="list-unstyled">
                  <li className="in">
                    <a href="#">
                      <InstagramIcon/>
                    </a>
                  </li>
                  <li className="fb">
                    <a href="#">
                      <FacebookIcon/>
                    </a>
                  </li>
                  <li className="tw">
                    <a href="#">
                      <TwitterIcon/>
                    </a>
                  </li>
                  <li className="pin">
                    <a href="#">
                      <PinterestIcon/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                <p className="mb-0">
                  <small>© EngSpace. All Rights Reserved.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
