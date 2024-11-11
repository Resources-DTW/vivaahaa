import { useRef } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import { QuoteIcon } from "assets/svg/icon";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const HappyStories = ({ profilePic, storyText, clientInfo }) => {
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
                  {...stories_settings}>
                  <div>
                    <div className="stories_main_box">
                      <div className="left">
                        <img src={profilePic} alt="error" />
                      </div>
                      <div className="right">
                        <div className="testimonial_card">
                          <div className="card_head">
                            <div className="profile">
                              <img src={profilePic} alt="error" />
                            </div>
                            <div className="quote">
                              <QuoteIcon />
                            </div>
                          </div>
                          <p className="para">
                            Lorem ipsum dolor sit amet consectetur. Bibendum
                            erat scelerisque non sagittis placerat mauris mi
                            venenatis dictum. Lorem ipsum dolor sit amet dolor
                            dolor dolor dolor dolor sit amet consectetur. Lorem
                            ipsum dolor sit amet dolor dolor dolor dolor dolor
                            sit amet consectetur.{" "}
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
                        <img src={profilePic} alt="stories" />
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
                            dolor dolor dolor dolor sit amet consectetur. Lorem
                            ipsum dolor sit amet dolor dolor dolor dolor dolor
                            sit amet consectetur.{" "}
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
                        <img src={profilePic} alt="stories" />
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
                            dolor dolor dolor dolor sit amet consectetur. Lorem
                            ipsum dolor sit amet dolor dolor dolor dolor dolor
                            sit amet consectetur.{" "}
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
  );
};

export default HappyStories;
