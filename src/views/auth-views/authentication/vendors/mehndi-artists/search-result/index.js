import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Grid 
} from "antd";
import ServiceOne from "../../../../../../assets/vivaahaa/services_1.png";
import ServiceTwo from "../../../../../../assets/vivaahaa/services_2.png";
import ServiceThree from "../../../../../../assets/vivaahaa/services_3.png";
import ServiceFour from "../../../../../../assets/vivaahaa/services_4.png";
import FeatureVideo from "../../../../../../assets/vivaahaa/featured.mp4";
import MatchedOne from "../../../../../../assets/vivaahaa/matched_1.png";
import MatchedTwo from "../../../../../../assets/vivaahaa/matched_2.png";
import MatchedThree from "../../../../../../assets/vivaahaa/matched_3.png";
import StoriesOne from "../../../../../../assets/vivaahaa/stories1.svg";
import ScreenedIcon from "../../../../../../assets/icons/screened_icon.svg";
import VerifiedIcon from "../../../../../../assets/icons/verified_icon.svg";
import MatchmakingIcon from "../../../../../../assets/icons/matchmaking_icon.svg";
import CreateBiodata from "../../../../../../assets/icons/create_biodata.svg";
import SearchBiodata from "../../../../../../assets/icons/search_biodata.svg";
import PartnerIcon from "../../../../../../assets/icons/partner_icon.svg";
import GetMarried from "../../../../../../assets/icons/get_married.svg";
import { DownOutlined } from "@ant-design/icons";
import LogoLight from "../../../../../../assets/vivaahaa/logo_light.svg";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import {
  CheckIcon,
  PlayIcon,
  QuoteIcon,
  SmallCancelIcon,
  SmallCheckIcon,
} from "assets/svg/icon";
import Slider from "react-slick";
import VendorsCard from "../../components/VendorsCard";

import { vendorsDetails } from "constants/GeneralConstant";
import Shortlist_1 from "../../../../../../assets/vivaahaa/shortlist-1.png";
import FooterLinks from "../../components/FooterLinks";
import CallToAction from "../../components/CallToAction";
import HappyStories from "../../components/HappyStories";
import FilterForm from "../../components/FilterForm";
import PerfectVendor from "../../components/PerfectVendor";

const SearchResult = () => {
  const vendorCardNum = 12;
  const [visibleVendors, setVisibleVendors] = useState(vendorCardNum + 6);
  // number of card in first section.
  const loadMoreVendors = () => {
    setVisibleVendors((prevVisible) => prevVisible + 6);
  };

  const screens = Grid.useBreakpoint();
  const CustomGutter = screens.xs ? [0, 30] : [30, 30]

  const { Option } = Select;
  const { Panel } = Collapse;

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginMobileModalOpen, setIsLoginMobileModalOpen] = useState(false);
  const [isLoginMobileOtpModalOpen, setIsLoginMobileOtpModalOpen] =
    useState(false);
  const [isVerifyEmailOtpModalOpen, setIsVerifyEmailOtpModalOpen] =
    useState(false);
  const [isVerifyMobileOtpModalOpen, setIsVerifyMobileOtpModalOpen] =
    useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Login
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
  };

  // Login with Mobile Number
  const showLoginMobileModal = () => {
    setIsLoginModalOpen(false);
    setIsLoginMobileModalOpen(true);
  };
  const handleLoginMobileOk = () => {
    setIsLoginMobileModalOpen(false);
  };

  // Login with Mobile Number OTP
  const showLoginMobileOtpModal = () => {
    setIsLoginMobileModalOpen(false);
    setIsLoginMobileOtpModalOpen(true);
  };
  const handleLoginMobileOtpOk = () => {
    setIsLoginMobileOtpModalOpen(false);
  };

  // Register
  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const handleRegisterOk = () => {
    setIsRegisterModalOpen(false);
  };

  // Verify Email OTP
  const showVerifyEmailOtpModal = () => {
    setIsRegisterModalOpen(false);
    setIsVerifyEmailOtpModalOpen(true);
  };
  const handleVerifyEmailOtpOk = () => {
    setIsVerifyEmailOtpModalOpen(false);
  };

  // Verify Mobile Number OTP
  const showVerifyMobileOtpModal = () => {
    setIsVerifyEmailOtpModalOpen(false);
    setIsVerifyMobileOtpModalOpen(true);
  };
  const handleVerifyMobileOtpOk = () => {
    setIsVerifyMobileOtpModalOpen(false);
  };

  let matched_sliderRef = useRef(null);
  const matched_next = () => {
    matched_sliderRef.slickNext();
  };
  const matched_previous = () => {
    matched_sliderRef.slickPrev();
  };
  const matched_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mehndiArtist_searchResult">
      {/* Vendors Card */}
      <section className="card-group-one">
        <div className="container">
          <h2 className="common_heading">Mehndi Artist &#40; {vendorsDetails.length} &#41;</h2>
          <FilterForm showLoginModal={showLoginModal} />
          <Row gutter={CustomGutter}>
            {vendorsDetails.slice(0, vendorCardNum).map((vendor) => (
              <VendorsCard
                key={vendor.vendorId}
                vendorDetails={vendor}
              />
            ))}
          </Row>
        </div>
      </section>

     {/* Search for perfect vendor */}
     <section className="searchFor_perfectVendor">
      <div className="container">
        <PerfectVendor />
      </div>
     </section>

      {/* Vendors Card */}
      <section className="card-group-two">
        <div className="container">
          <Row gutter={CustomGutter}>
            {vendorsDetails.slice(vendorCardNum, visibleVendors).map((vendor) => (
              <VendorsCard
                key={vendor.vendorId}
                vendorDetails={vendor}
              />
            ))}
            <div className="d-flex justify-content-center w-100">
              {visibleVendors < vendorsDetails.length && (
                <div onClick={loadMoreVendors} className="btn__primary">
                  Show More Mehndi Artists
                </div>
              )}
            </div>
          </Row>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section faq_section">
        <div className="container">
          <Row gutter={16} className="mb-3 text-center">
            <Col span={24}>
              <h2 className="common_heading">FAQs</h2>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={{ span: 24 }} sm={{ span: 20 }}>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                accordion
                expandIcon={({ isActive }) => (
                  <DownOutlined rotate={isActive ? 0 : 180} />
                )}
                className="site-collapse-custom-collapse">
                <Panel
                  header="This is panel header 1"
                  key="1"
                  className="site-collapse-custom-panel">
                  <div className="text">
                    Vivaahaa.com is India's largest wedding venue discovery
                    platform from Matrimony.com group. Here you can find your
                    dream wedding venue across different cities and states in
                    India. Get all the venue information such as price &
                    availability at the click of a button. You can also register
                    with Mandap.com to get a free assisted venue discovery
                    service. A dedicated relationship manager will be assigned
                    to each customer to facilitate their requirements.
                  </div>
                </Panel>
                <Panel
                  header="This is panel header 2"
                  key="2"
                  className="site-collapse-custom-panel">
                  <p className="text">
                    A dog is a type of domesticated animal. Known for its
                    loyalty and faithfulness, it can be found as a welcome guest
                    in many households across the world.
                  </p>
                </Panel>
                <Panel
                  header="This is panel header 3"
                  key="3"
                  className="site-collapse-custom-panel">
                  <p className="text">
                    A dog is a type of domesticated animal. Known for its
                    loyalty and faithfulness, it can be found as a welcome guest
                    in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction showLoginModal={showLoginModal} />

      {/* Footer */}
      <div className="add-mt">
        <FooterLinks  />
      </div>


      {/*========End of Page=========*/}






        {/* Login Modal */}
        <Modal
        open={isLoginModalOpen}
        onOk={handleLoginOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="filter">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                >
                  Login
                </Button>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_outline_primary"
                  ghost
                  block
                  onClick={showLoginMobileModal}
                >
                  Login with OTP
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Login with OTP Modal */}
      <Modal
        open={isLoginMobileModalOpen}
        onOk={handleLoginMobileOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login with OTP</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter Mobile Number" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={showLoginMobileOtpModal}
                >
                  Send OTP
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      <Modal
        open={isLoginMobileOtpModalOpen}
        onOk={handleLoginMobileOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login with OTP</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={handleLoginMobileOtpOk}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={isRegisterModalOpen}
        onOk={handleRegisterOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Register</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="filter">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Mobile Number" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Select placeholder="Select" className="w-100">
                    <Option value="one">My Self</Option>
                    <Option value="two">Son</Option>
                    <Option value="three">Daughter</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Select placeholder="Select" className="w-100">
                    <Option value="one">Man</Option>
                    <Option value="two">Woman</Option>
                    <Option value="three">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary"
                  block
                  onClick={showVerifyEmailOtpModal}
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Verify Email OTP */}
      <Modal
        open={isVerifyEmailOtpModalOpen}
        onOk={handleVerifyEmailOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Verify Email ID</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={showVerifyMobileOtpModal}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Verify Mobile OTP */}
      <Modal
        open={isVerifyMobileOtpModalOpen}
        onOk={handleVerifyMobileOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Verify Mobile Number</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={handleVerifyMobileOtpOk}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default SearchResult;
