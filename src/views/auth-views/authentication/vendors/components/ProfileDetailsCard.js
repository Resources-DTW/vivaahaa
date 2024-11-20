import { Col, Row, Space } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { Carousel, Image, Button } from "antd";
import vendorBackground from "../../../../../assets/vivaahaa/services_1.png";
import { Tag } from "./VendorsCard";
import {
  StarOutlined,
  StarFilled,
  MoreOutlined,
  ShareAltOutlined,
  PlusOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { IoIosStar } from "react-icons/io";
import { SmallCancelIcon } from "assets/svg/icon";
import vendorBg2 from "../../../../../assets/vivaahaa/matched_3.png";

export const KeyPoint = ({ text }) => {
  return (
    <li className="key_point">
      <CheckCircleOutlined />
      <span className="text">{text}</span>
    </li>
  );
};

const ProfileDetailsCard = ({ vendorsDetails, showModal, hideRightCol }) => {
  const { name, location, tag, rating, startingPrice, packageName } =
    vendorsDetails;
  console.log(name);

  const [shortlisted, setShortlisted] = useState(true);
  const handleShortlist = () => {
    setShortlisted((prevShortlisted) => !prevShortlisted);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleBeforeChange = (oldIndex, newIndex) => {
    setActiveIndex(newIndex);
  };
  const handleThumbnailClick = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
      setActiveIndex(index);
    }
  };

  const slides = [
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
    vendorBackground,
    vendorBg2,
  ];

  const settings = {
    infinite: false,
    arrows: false,
    dots: false,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          // dots: true,
        },
      },
    ],
  };

  const imgContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [maxElements, setMaxElements] = useState(0);
  const [adjustedWidth, setAdjustedWidth] = useState(0);
  const [changeContainerStyle, setChangeContainerStyle] = useState(false);
  useEffect(() => {
    const updateWidth = () => {
      if (imgContainerRef.current) {
        setContainerWidth(imgContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      let elementWidth;
      let elementGap;
      if (containerWidth <= 600) {
        elementWidth = 80;
        elementGap = 8;
      } else if (containerWidth <= 1200) {
        elementWidth = 120;
        elementGap = 15;
      } else {
        elementWidth = 160;
        elementGap = 20;
      }
      const maxElems = Math.floor((containerWidth + 20) / (elementWidth + 20));
      const totalElementGaps = (maxElems - 1) * elementGap;
      const adjustedElemWidth = (containerWidth - totalElementGaps) / maxElems;
      setMaxElements(maxElems);
      setAdjustedWidth(adjustedElemWidth);
    }
  }, [containerWidth]);

  const handleSeeMore = () => {
    setMaxElements(slides.length);
    setChangeContainerStyle(true);
    console.log(adjustedWidth);
  };

  const keyPoints = [
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <div className="profileDetails_card container">
      <Row gutter={30} className="first_row">
        <Col span={24} lg={hideRightCol ? 24 : 14} className="col">
          <Carousel {...settings} ref={carouselRef}>
            {slides.map((src, index) => (
              <div key={index} className="carousel_img">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="main_img"
                />
                {containerWidth > 600 ? (
                  <div className="share_btn">
                    <ShareAltOutlined />
                    <span>SHARE</span>
                  </div>
                ) : (
                  <div className="tag_container">
                   {!hideRightCol && <Tag tag={tag} />}
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </Col>
        {!hideRightCol ? (
          <Col lg={10} className="right_col">
            <div className="tag_container">
              <Tag tag={tag} />
            </div>
            <div className="absolute_right">
              <div className="btn__primary" onClick={handleShortlist}>
                {shortlisted ? (
                  <StarOutlined className="icon-star" />
                ) : (
                  <StarFilled className="icon-star" />
                )}
                SHORTLIST
              </div>

              <Space>
                <MoreOutlined className="more_icon" />
              </Space>
            </div>
            <header className="vendor_heading">
              <h1 className="vendor_name mb-0">{name}</h1>
              <div className="d-flex justify-content-between">
                <p className="vendor_location">{location}</p>
                <div className="rating_review d-flex align-items-center">
                  <div className="rating mr-2">
                    <IoIosStar />
                    {rating}
                  </div>
                  <div className="review">122 review</div>
                </div>
              </div>
            </header>
            <p className="about_vendor">
              Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
              accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <ul className="key_points">
              {keyPoints.map((point, index) => (
                <KeyPoint key={index} text={point} />
              ))}
            </ul>
            <div className="pricing_and_enquiry">
              <div>
                <p className="package_name">{packageName}</p>
                <h3 className="price">₹ {startingPrice}</h3>
              </div>
              <Button
                type="primary"
                className="btn__primary"
                onClick={showModal}>
                Enquiry Now
              </Button>
            </div>
          </Col>
        ) : null}
      </Row>
      <div
        className={`all_img ${changeContainerStyle ? "all_img_scroll" : ""}`}
        ref={imgContainerRef}>
        {slides.slice(0, maxElements - 1).map((src, index) => (
          <div
            key={index}
            className={`${index === activeIndex ? "active" : "other_img"}`}
            style={{ width: adjustedWidth }}
            onClick={() => handleThumbnailClick(index)}
            preview={false}>
            <img src={src} alt="error" />
          </div>
        ))}
        {slides.length > maxElements ? (
          <div
            className="showMore_img"
            style={{ width: adjustedWidth }}
            preview={false}
            onClick={handleSeeMore}>
            <img src={slides[maxElements - 1]} alt="error" />
            <div className="overlay" />
            <div className="showMore_text">
              <PlusOutlined />
              <div>SEE MORE</div>
            </div>
          </div>
        ) : null}
      </div>
      {/* Only show in mob res */}
      <div className="mob_res">
        <header className="heading">
          <h1 className="title">
            {name} - <span>{location}</span>
          </h1>
          <div className="rating mr-2">
            <IoIosStar />
            {rating}
          </div>
        </header>
        <p className="about_vendor">
          Lorem ipsum dolor sit amet consectetur. Scelerisque est enim accumsan
          risus varius in arcu augue. Lorem ipsum dolor sit amet consectetur.
        </p>
        <ul className="key_points">
          {keyPoints.map((point, index) => (
            <KeyPoint key={index} text={point} />
          ))}
        </ul>
        <div className="pricing_and_enquiry">
          <div>
            <p className="package_name">{packageName}</p>
            <h3 className="price">₹ {startingPrice}</h3>
          </div>
          <Button type="primary" className="btn__primary" onClick={showModal}>
            Enquiry Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsCard;
