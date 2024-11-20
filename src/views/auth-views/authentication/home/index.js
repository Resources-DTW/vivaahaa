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
} from "antd";
import ServiceOne from "../../../../assets/vivaahaa/services_1.png";
import ServiceTwo from "../../../../assets/vivaahaa/services_2.png";
import ServiceThree from "../../../../assets/vivaahaa/services_3.png";
import ServiceFour from "../../../../assets/vivaahaa/services_4.png";
import FeatureVideo from "../../../../assets/vivaahaa/featured.mp4";
import MatchedOne from "../../../../assets/vivaahaa/matched_1.png";
import MatchedTwo from "../../../../assets/vivaahaa/matched_2.png";
import MatchedThree from "../../../../assets/vivaahaa/matched_3.png";
import StoriesOne from "../../../../assets/vivaahaa/stories1.svg";
import ScreenedIcon from "../../../../assets/icons/screened_icon.svg";
import VerifiedIcon from "../../../../assets/icons/verified_icon.svg";
import MatchmakingIcon from "../../../../assets/icons/matchmaking_icon.svg";
import CreateBiodata from "../../../../assets/icons/create_biodata.svg";
import SearchBiodata from "../../../../assets/icons/search_biodata.svg";
import PartnerIcon from "../../../../assets/icons/partner_icon.svg";
import GetMarried from "../../../../assets/icons/get_married.svg";
import LogoLight from "../../../../assets/vivaahaa/logo_light.svg";
import FB from "../../../../assets/icons/fb.svg";
import X from "../../../../assets/icons/x.svg";
import Linkedin from "../../../../assets/icons/linkedin.svg";
import Insta from "../../../../assets/icons/insta.svg";
import { DownOutlined } from "@ant-design/icons";
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
import "./index.css";

const Home = () => {
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

  //video
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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

  let services_sliderRef = useRef(null);
  const services_next = () => {
    services_sliderRef.slickNext();
  };
  const services_previous = () => {
    services_sliderRef.slickPrev();
  };
  const services_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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

  let stories_sliderRef = useRef(null);
  const stories_next = () => {
    stories_sliderRef.slickNext();
  };
  const stories_previous = () => {
    stories_sliderRef.slickPrev();
  };
  const stories_settings = {
    className: "center",
    centerMode: true,
    centerPadding: "160px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero_section">
        <div className="container">
          <div className="hero_bg_img">
            <Row justify="center">
              <Col span={24} sm={22} lg={18}>
                <div className="content">
                  <div className="sub_text">
                    Safe & Trusted Matrimony Website
                  </div>
                  <div className="heading">Find Your perfect life partner</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="filter">
            <Card>
              <Form
                layout="vertical"
                name="filter"
                initialValues={{
                  remember: true,
                }}
              >
                <Row align="bottom" gutter={16}>
                  <Col xs={{ span: 10 }} sm={{ span: 5 }}>
                    <Form.Item
                      label="I’m looking for a"
                      className="form_control"
                    >
                      <Select placeholder="Select" className="w-100">
                        <Option value="one">Man</Option>
                        <Option value="two">Woman</Option>
                        <Option value="three">Other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 14 }} sm={{ span: 6 }}>
                    <div className="aged_filter">
                      <div className="w-100">
                        <Form.Item label="Aged" className="form_control">
                          <Select placeholder="Select">
                            <Option value="one">One</Option>
                            <Option value="two">Two</Option>
                            <Option value="three">Three</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="aged_to">To</div>
                      <div className="w-100">
                        <Form.Item className="form_control">
                          <Select placeholder="Select">
                            <Option value="one">One</Option>
                            <Option value="two">Two</Option>
                            <Option value="three">Three</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                  </Col>
                  <Col xs={{ span: 12 }} sm={{ span: 5 }}>
                    <Form.Item label="Religion" className="form_control">
                      <Select placeholder="Select" className="w-100">
                        <Option value="one">One</Option>
                        <Option value="two">Two</Option>
                        <Option value="three">Three</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 12 }} sm={{ span: 5 }}>
                    <Form.Item label="City" className="form_control">
                      <Select placeholder="Select" className="w-100">
                        <Option value="one">One</Option>
                        <Option value="two">Two</Option>
                        <Option value="three">Three</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={{ span: 24 }} sm={{ span: 3 }}>
                    <Form.Item className="form_control">
                      <Button
                        type="primary"
                        block
                        className="btn_primary"
                        onClick={showLoginModal}
                      >
                        Let’s Begin
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section service_section pb-0">
        <div className="container">
          <Row gutter={16} className="mb-sm-3">
            <Col span={24}>
              <div className="d-flex justify-content-between">
                <h2 className="common_heading">
                  Our <span>Services</span>
                </h2>
                <div className="next_pre_btn">
                  <button className="button" onClick={services_previous}>
                    <IoIosArrowRoundBack />
                  </button>
                  <button className="button" onClick={services_next}>
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} lg={24}>
              <div className="slider_container">
                <Slider
                  ref={(slider) => {
                    services_sliderRef = slider;
                  }}
                  {...services_settings}
                >
                  <div>
                    <div className="services_card mr-sm-3">
                      <img
                        src={ServiceOne}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Makeup and Mehndi Artists</div>
                        <Link className="view_more"> View More</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="services_card mr-3">
                      <img
                        src={ServiceTwo}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Marriage Halls (Venues)</div>
                        <Link className="view_more">View More</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="services_card mr-3">
                      <img
                        src={ServiceThree}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Wedding Photographers</div>
                        <Link className="view_more">View More</Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="services_card mr-3">
                      <img
                        src={ServiceFour}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Choreographers, DJs</div>
                        <Link className="view_more">View More</Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust_section mt-5">
        <div className="container">
          <Row gutter={16} className="mb-3">
            <Col span={24}>
              <h2 className="common_heading">
                Bringing People <span>Together</span>
              </h2>
            </Col>
          </Row>
          <Row gutter={[16, 40]}>
            <Col span={24} lg={8}>
              <div className="trust_card">
                <img src={ScreenedIcon} alt="icon-1" className="icons" />
                <div className="title">100% Screened Profiles</div>
                <div className="para">
                  Lorem ipsum dolor sit amet consectetur. Bibendum erat
                  scelerisque non sagittis placerat mauris mi venenatis dictum.
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div className="trust_card">
                <img src={VerifiedIcon} alt="icon-1" className="icons" />
                <div className="title">100 % Mobile-verified profiles</div>
                <div className="para">
                  Lorem ipsum dolor sit amet consectetur. Bibendum erat
                  scelerisque non sagittis placerat mauris mi venenatis dictum.
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div className="trust_card">
                <img src={MatchmakingIcon} alt="icon-1" className="icons" />
                <div className="title">10 Years of successful matchmaking</div>
                <div className="para">
                  Lorem ipsum dolor sit amet consectetur. Bibendum erat
                  scelerisque non sagittis placerat mauris mi venenatis dictum.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* How Work Section */}
      <section className="how_work_section">
        <div className="container">
          <Row gutter={16} className="mb-3 text-center">
            <Col span={24}>
              <h2 className="common_heading text-white">How Vivaahaa Works</h2>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={24} lg={6}>
              <div className="how_work_card">
                <img src={CreateBiodata} alt="icon" className="icon" />
                <h2 className="title>">Create Biodata</h2>
                <p className="para">
                  You can easily a biodata on Vivaahaa completely free of cost
                  within some steps.
                </p>
              </div>
            </Col>
            <Col span={24} lg={6}>
              <div className="how_work_card">
                <img src={SearchBiodata} alt="icon" className="icon" />
                <h2 className="title>">Search Biodata</h2>
                <p className="para">
                  You can easily a biodata on Vivaahaa completely free of cost
                  within some steps.
                </p>
              </div>
            </Col>
            <Col span={24} lg={6}>
              <div className="how_work_card">
                <img src={PartnerIcon} alt="icon" className="icon" />
                <h2 className="title>">Connect with Partner</h2>
                <p className="para">
                  You can easily a biodata on Vivaahaa completely free of cost
                  within some steps.
                </p>
              </div>
            </Col>
            <Col span={24} lg={6}>
              <div className="how_work_card">
                <img src={GetMarried} alt="icon" className="icon" />
                <h2 className="title>">Get Married</h2>
                <p className="para">
                  You can easily a biodata on Vivaahaa completely free of cost
                  within some steps.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section feature_section pb-0">
        <div className="container">
          <Row
            gutter={16}
            align="middle"
            className="justify-content-lg-between"
          >
            <Col xs={{ span: 24 }} sm={{ span: 10 }}>
              <h2 className="common_heading mb-2 mb-sm-1">Key Features</h2>
              <p className="mb-sm-3">
                Lorem ipsum dolor sit amet consectetur. Bibendum erat
                scelerisque non sagittis placerat mauris mi venenatis dictum.
              </p>
              <ul className="custom_list mb-sm-4">
                <li>
                  <CheckIcon />
                  <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
                <li>
                  <CheckIcon />
                  <span className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </span>
                </li>
              </ul>
              <Button
                type="primary"
                className="btn_primary"
                onClick={showRegisterModal}
              >
                Register
              </Button>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <div className="video-card">
                <div className="video-container" onClick={handlePlayPause}>
                  <video
                    id="featureVideo"
                    src={FeatureVideo}
                    ref={videoRef}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <div className="play-icon">
                      <PlayIcon />
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Matched Section */}
      <section className="section matched_section pb-0">
        <div className="container">
          <Row gutter={16} className="mb-3">
            <Col span={24}>
              <div className="d-flex justify-content-between">
                <h2 className="common_heading">
                  Matched by <span>Vivaahaa</span>
                </h2>
                <div className="next_pre_btn">
                  <button className="button" onClick={matched_previous}>
                    <IoIosArrowRoundBack />
                  </button>
                  <button className="button" onClick={matched_next}>
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} lg={24}>
              <div className="slider-container">
                <Slider
                  ref={(slider) => {
                    matched_sliderRef = slider;
                  }}
                  {...matched_settings}
                >
                  <div>
                    <div className="matched_card mr-3">
                      <img
                        src={MatchedOne}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Arun & Swathi</div>
                        {/* <Link className="view_more">View More</Link> */}
                        <p className="description">
                          Lorem ipsum dolor sit amet consectetur. Bibendum erat
                          scelerisque non sagittis placerat mauris mi venenatis
                          dictum.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="matched_card mr-3">
                      <img
                        src={MatchedTwo}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Sekar & Vidhya</div>
                        {/* <Link className="view_more">View More</Link> */}
                        <p className="description">
                          Lorem ipsum dolor sit amet consectetur. Bibendum erat
                          scelerisque non sagittis placerat mauris mi venenatis
                          dictum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="matched_card mr-3">
                      <img
                        src={MatchedThree}
                        alt="services1"
                        className="img-fluid w-100"
                      />
                      <div className="content">
                        <div className="title">Venkat & Divya</div>
                        {/* <Link className="view_more">View More</Link> */}
                        <p className="description">
                          Lorem ipsum dolor sit amet consectetur. Bibendum erat
                          scelerisque non sagittis placerat mauris mi venenatis
                          dictum.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing_section">
        <div className="container">
          <Row gutter={16} className="mb-3 text-center">
            <Col span={24}>
              <h2 className="common_heading">
                <span>Membership</span> Plans
              </h2>
            </Col>
          </Row>
          <Row gutter={[50, 50]} align="middle">
            <Col span={24} lg={8}>
              <div className="pricing_card">
                <div className="bg_white">
                  <div className="title">Free</div>
                  <p className="para">
                    Vivaahaa.com is India's largest wedding venue.
                  </p>
                  <div className="price">₹0</div>
                  <Button type="primary" block className="btn_primary mb-4">
                    Register Free
                  </Button>
                  <ul className="custom_list">
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">Browse Profiles</span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Shortlist & Send Interest
                      </span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Message & chat with unlimited users
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Get up to 3x more matches daily
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Unlock access to advanced search
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">View contact details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div className="pricing_card">
                <div className="bg_white">
                  <div className="title">Gold</div>
                  <p className="para">
                    Vivaahaa.com is India's largest wedding venue.
                  </p>
                  <div className="price">₹3,000</div>
                  <Button type="primary" block className="btn_primary mb-4">
                    Membership Plan
                  </Button>
                  <ul className="custom_list">
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">Browse Profiles</span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Shortlist & Send Interest
                      </span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Message & chat with unlimited users
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Get up to 3x more matches daily
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Unlock access to advanced search
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">View contact details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={24} lg={8}>
              <div className="pricing_card">
                <div className="bg_white">
                  <div className="title">Platinum</div>
                  <p className="para">
                    Vivaahaa.com is India's largest wedding venue.
                  </p>
                  <div className="price">₹7,000</div>
                  <Button type="primary" block className="btn_primary mb-4">
                    Membership Plan
                  </Button>
                  <ul className="custom_list">
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">Browse Profiles</span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Shortlist & Send Interest
                      </span>
                    </li>
                    <li>
                      <span className="right_icon">
                        <SmallCheckIcon />
                      </span>
                      <span className="right_text">
                        Message & chat with unlimited users
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Get up to 3x more matches daily
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">
                        Unlock access to advanced search
                      </span>
                    </li>
                    <li>
                      <span className="cancel_icon">
                        <SmallCancelIcon />
                      </span>
                      <span className="cancel_text">View contact details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Stories section */}
      <section className="section stories_section pb-0">
        <div className="container">
          <Row gutter={16} className="mb-3">
            <Col span={24}>
              <h2 className="common_heading">
                Our Couples <span className="break_line">Happy Stories</span>
              </h2>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <div className="next_pre_btn_stories_parent">
                <div className="slider-container">
                  <Slider
                    ref={(slider) => {
                      stories_sliderRef = slider;
                    }}
                    {...stories_settings}
                  >
                    <div>
                      <div className="stories_main_box">
                        <div className="left">
                          <img src={StoriesOne} alt="stories" />
                        </div>
                        <div className="right">
                          <div className="testimonial_card">
                            <div className="card_head">
                              <div className="profile">
                                <img src={StoriesOne} alt="stories" />
                              </div>
                              <div className="quote">
                                <QuoteIcon />
                              </div>
                            </div>
                            <p className="para">
                              Lorem ipsum dolor sit amet consectetur. Bibendum
                              erat scelerisque non sagittis placerat mauris mi
                              venenatis dictum. Lorem ipsum dolor sit amet dolor
                              dolor dolor dolor dolor sit amet consectetur.
                              Lorem ipsum dolor sit amet dolor dolor dolor dolor
                              dolor sit amet consectetur.{" "}
                            </p>
                            <div className="client_intro">
                              <div className="name">Arun Kumar</div>
                              <div className="position">CTS Manager</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="stories_main_box">
                        <div className="left">
                          <img src={StoriesOne} alt="stories" />
                        </div>
                        <div className="right">
                          <div className="testimonial_card">
                            <div className="card_head">
                              <QuoteIcon />
                            </div>
                            <p className="para">
                              Lorem ipsum dolor sit amet consectetur. Bibendum
                              erat scelerisque non sagittis placerat mauris mi
                              venenatis dictum. Lorem ipsum dolor sit amet dolor
                              dolor dolor dolor dolor sit amet consectetur.
                              Lorem ipsum dolor sit amet dolor dolor dolor dolor
                              dolor sit amet consectetur.{" "}
                            </p>
                            <div className="client_intro">
                              <div className="name">Arun Kumar</div>
                              <div className="position">CTS Manager</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="stories_main_box">
                        <div className="left">
                          <img src={StoriesOne} alt="stories" />
                        </div>
                        <div className="right">
                          <div className="testimonial_card">
                            <div className="card_head">
                              <QuoteIcon />
                            </div>
                            <p className="para">
                              Lorem ipsum dolor sit amet consectetur. Bibendum
                              erat scelerisque non sagittis placerat mauris mi
                              venenatis dictum. Lorem ipsum dolor sit amet dolor
                              dolor dolor dolor dolor sit amet consectetur.
                              Lorem ipsum dolor sit amet dolor dolor dolor dolor
                              dolor sit amet consectetur.{" "}
                            </p>
                            <div className="client_intro">
                              <div className="name">Arun Kumar</div>
                              <div className="position">CTS Manager</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="next_pre_btn_stories">
                  <button className="button prev" onClick={stories_previous}>
                    <IoIosArrowRoundBack />
                  </button>
                  <button className="button next" onClick={stories_next}>
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </Col>
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
                className="site-collapse-custom-collapse"
              >
                <Panel
                  header="This is panel header 1"
                  key="1"
                  className="site-collapse-custom-panel"
                >
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
                  className="site-collapse-custom-panel"
                >
                  <p className="text">
                    A dog is a type of domesticated animal. Known for its
                    loyalty and faithfulness, it can be found as a welcome guest
                    in many households across the world.
                  </p>
                </Panel>
                <Panel
                  header="This is panel header 3"
                  key="3"
                  className="site-collapse-custom-panel"
                >
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
      <section className="cta_section">
        <div className="container">
          <Row className="cta_box align-items-center">
            <Col span={24} lg={18}>
              <h4 className="title">
                Exclusive & Personalised Matchmaking by{" "}
                <span>Vivaahaa.com</span>
              </h4>
            </Col>
            <Col span={24} lg={6}>
              <div className="cta_action">
                <img src={LogoLight} alt="logo" className="cta_logo" />
                <div className="text-center">
                  <Button type="primary" className="btn_primary">
                    Register
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Footer Section */}
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
    </>
  );
};

export default Home;
