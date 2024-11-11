import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import LogoLight from "../../../../../assets/vivaahaa/logo_light.svg";
import FB from "../../../../../assets/icons/fb.svg";
import X from "../../../../../assets/icons/x.svg";
import Linkedin from "../../../../../assets/icons/linkedin.svg";
import Insta from "../../../../../assets/icons/insta.svg";

const FooterLinks = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <Row>
          <Col span={24} lg={5}>
            <div className="footer_brand">
              <img
                src={LogoLight}
                alt="footer logo"
                className="img-fluid footer_logo"
              />
              <p className="contact">
                Phone: <Link to="tel:04488882222">+044 8888 2222</Link>
              </p>
              <p className="contact">
                Email: <Link to="mailto:mail@gmail.com">mail@gmail.com</Link>
              </p>
            </div>
          </Col>
          <Col span={24} lg={4}>
            <h5 className="foot_head">Navigation</h5>
            <ul className="foot_list">
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Home
                </Link>
              </li>
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  About Us
                </Link>
              </li>
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={24} lg={5}>
            <h5 className="foot_head">Vendors</h5>
            <ul className="foot_list">
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Login as a Vendor
                </Link>
              </li>
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Register as a Vendor
                </Link>
              </li>
            </ul>
          </Col>
          <Col span={24} lg={5}>
            <h5 className="foot_head">Support</h5>
            <ul className="foot_list">
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Privacy Policy
                </Link>
              </li>
              <li className="foot_item">
                <Link to="/" className="foot_link">
                  Tearms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col span={24} lg={5}>
            <h5 className="foot_head">Social Media</h5>
            <ul className="social_list">
              <li className="social_item">
                <Link to="/" className="social_link">
                  <img src={FB} alt="facebook" />
                </Link>
              </li>
              <li className="social_item">
                <Link to="/" className="social_link">
                  <img src={X} alt="X" />
                </Link>
              </li>
              <li className="social_item">
                <Link to="/" className="social_link">
                  <img src={Linkedin} alt="Linkedin" />
                </Link>
              </li>
              <li className="social_item">
                <Link to="/" className="social_link">
                  <img src={Insta} alt="instagram" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default FooterLinks;
