import React, { useRef } from "react";
import { Button, Card, Carousel, Col, Dropdown, Row, Menu, Space } from "antd";
import { CardArrowPrev, CardArrowNext } from "./CardArrow";
import { FaRegHeart } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { VerifyIcon } from "assets/svg/icon";
import { MoreOutlined } from "@ant-design/icons";
import ProfileCandidate from "../../../assets/vivaahaa/profilecandidate.png";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    items={[
      {
        label: "1st menu item",
        key: "1",
      },
      {
        label: "2nd menu item",
        key: "2",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

const ProfileCard = ({
  displayUserDetails,
  addActionBtn,
  sendRequest,
  shortListed,
}) => {
  const ref = useRef();

  const settings = {
    infinite: true,
    arrows: true,
    nextArrow: <CardArrowNext />,
    prevArrow: <CardArrowPrev />,
  };

  return (
    <div className="custom_profileCard">
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 5 }}>
            <div className="custom-carousel">
              <Carousel {...settings} className="carousel_card">
                {[...Array(3)].map((_, index) => (
                  <div className="profile_pic" key={index}>
                    <img
                      src={ProfileCandidate}
                      alt="profile"
                      className="img-fluid w-100"
                      ref={ref}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 14 }}>
            <div className="profile_details">
              <div className="profile_head">
                <div className="top">
                  <div className="left">
                    <div className="title">Anitha G</div>
                    <div className="ids">(12345678)</div>
                    <VerifyIcon />
                  </div>
                  <div className="right">
                    <Dropdown overlay={menu}>
                      <Button onClick={(e) => e.preventDefault()} className="more_btn">
                        <Space>
                          <MoreOutlined className="icon" />
                        </Space>
                      </Button>
                    </Dropdown>
                  </div>
                </div>
                <div className="bottom">
                  <div className="online_text">Online 2h ago</div>
                  <Link to="/auth/home" className="chat_text">Chat now</Link>
                </div>
              </div>
              {displayUserDetails && (
                <Row gutter={10} className="list_text">
                  <div className="list_text_container">
                    <li className="text">{displayUserDetails.age}</li>
                    <li className="text">{displayUserDetails.profession}</li>
                    <li className="text">{displayUserDetails.height}</li>
                    <li className="text">{displayUserDetails.religious}</li>
                    <li className="text">{displayUserDetails.maritalStatus}</li>
                    <li className="text">{displayUserDetails.spokenLanguage}</li>
                    <li className="text">{displayUserDetails.location}</li>
                    <li className="text match_score match_score_mob">
                      Match Score <span>70%</span>
                    </li>
                  </div>
                </Row>
              )}
            </div>
          </Col>
          {addActionBtn && (
            <Col xs={{ span: 24 }} sm={{ span: 5 }}>
              <div className="action_view">
                {!shortListed && (
                  <div className="action_btn">
                    <div className="outer_btn">
                      <Button className="btn_icon" shape="circle">
                        <FaRegHeart className="icon" size={20} />
                      </Button>
                    </div>
                    <span className="text">Add to shortlist</span>
                  </div>
                )}
                <div className="action_btn score">
                  <div className="outer_btn">
                    <Button className="btn_icon" shape="circle">
                      <RiUserAddLine className="icon" />
                    </Button>
                  </div>
                  <span className="text">Upgrade to connect</span>
                </div>
                <div className="match_score_desktop match_score">
                  Match Score <span>70%</span>
                </div>
              </div>
            </Col>
          )}
          {sendRequest && (
            <Col sm={{ push: 5 }} className="card_message ml-sm-2">
              {sendRequest === "send" ? (
                "You requested her to add Photo on 30 Apr 2024"
              ) : (
                "She Declined your Invitation. This member cannot be contacted."
              )}
            </Col>
          )}
        </Row>
      </Card>
    </div>
  );
};

export default ProfileCard;
