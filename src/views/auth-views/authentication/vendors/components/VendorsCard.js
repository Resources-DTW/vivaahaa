import heart from "../../../../../assets/icons/heart.svg";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import crown from "../../../../../assets/icons/crown.svg";
import locationWhite from "../../../../../assets/icons/locationWhite.svg";
import locationMob from "../../../../../assets/icons/location-pin.svg";
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import { Col } from "antd";
import ResponsiveImage from "./ResponsiveImgClr";
import vendorBackground from "../../../../../assets/vivaahaa/stories1.svg";

const Tag = ({ tag }) => {
  let bgContent;
  let tagTitle;
  if (tag === "popular") {
    bgContent = "bg-popular";
    tagTitle = "MOST POPULAR";
  } else if (tag === "premium") {
    bgContent = "bg-premium";
    tagTitle = "PREMIUM";
  } else {
    bgContent = "bg-preferred";
    tagTitle = "PREFERRED";
  }
  return (
    <div className={`tag_box ${bgContent}`}>
      {tagTitle !== "PREFERRED" ? (
        tagTitle === "MOST POPULAR" ? (
          <img src={heart} alt="error" className="img-fluid mr-2" />
        ) : (
          <StarFilled className="icon-star mr-2" />
        )
      ) : null}
      <span className="text">{tagTitle}</span>
      {tagTitle === "PREFERRED" ? (
        <img src={crown} alt="error" className="img-fluid ml-2" />
      ) : null}
    </div>
  );
};

const VendorsCard = ({ vendorDetails }) => {
  const { name, location, tag, rating, startingPrice } =
    vendorDetails;

  const SetBackgroundImg = {
    backgroundImage: `url(${vendorBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [shortlisted, setShortlisted] = useState(true);
  const handleShortlist = () => {
    setShortlisted((prevShortlisted) => !prevShortlisted);
  };

  return (
    <Col span={24} xl={8} lg={12}>
      <div className="vendor-card">
        <div style={SetBackgroundImg} className="vendor-profile-img">
          <div className="position-abs">
            {tag ? <Tag tag={tag} /> : null}
            {tag === "preferred" ? (
              <div className="shortlist bg-popular" onClick={handleShortlist}>
                {shortlisted ? (
                  <StarOutlined className="icon-star" />
                ) : (
                  <StarFilled className="icon-star" />
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="info_box">
          <div className="top_heading">
            <div className="heading">
              <h4 className="title mb-1">{name}</h4>
              <div className="d-flex">
                <ResponsiveImage desktop={locationWhite} mobile={locationMob} />
                <p className="ml-2 mb-0 text">{location}</p>
              </div>
            </div>
            <div className="rating">
              <IoIosStar />
              {rating}
            </div>
          </div>
          <div className="main_content">
            <div className="starting_price">
              <p>Starting From</p>
              <h3>₹ {startingPrice}</h3>
            </div>
            <div className="enquiry_btn">Enquiry Now</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default VendorsCard;
