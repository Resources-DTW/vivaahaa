import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import userUrl from "../../../../../assets/vivaahaa/matched_1.png";
import { GalleryIcon } from "assets/svg/icon";
import { StarFilled, StarOutlined } from "@ant-design/icons";


const RatingOverview = ({ initialRatings }) => {
  const [checkedStates, setCheckedStates] = useState(
    initialRatings.map(() => false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };
  
  return (
    <ul className="rating_overview">
    {initialRatings.map((item, index) => (
      <li key={index} className="rating_item">
        <label>
          <input
            type="checkbox"
            checked={checkedStates[index]}
            onChange={() => handleCheckboxChange(index)}
            className="mr-3"
          />
          {item.rating} 
          {Array.from({ length: item.rating }, (_, index) => (
            <StarFilled key={`filled-${index}`} />
          ))}
          {Array.from({ length: 5 - item.rating }, (_, index) => (
            <StarOutlined key={`outlined-${index}`} />
          ))}
        </label>
        <span className="reviews">{item.reviews} reviews</span>
      </li>
    ))}
  </ul>
  );
};

const ReviewAndRating = () => {
  const initialRatings = [
    { rating: 5, reviews: 60 },
    { rating: 4, reviews: 40 },
    { rating: 3, reviews: 20 },
    { rating: 2, reviews: 10 },
    { rating: 1, reviews: 5 },
  ];

  const totalReviews = initialRatings.reduce(
    (total, item) => total + item.reviews,
    0
  );

  const { TextArea } = Input;
  const rules = {
    fullName: [{ required: true, message: "Please enter your full name" }],
    email: [
      { required: true, type: "email", message: "Please enter a valid email" },
    ],
    experience: [{ required: true, message: "Please share your experience" }],
  };

  return (
    <div className="review_and_rating container">
      <h3 className="heading">Reviews & Ratings</h3>
      <Row gutter={{ xs: [20, 0], lg: 60 }}>
        <Col span={24} lg={10} className="left_col">
          <div className="title_box">
            <p className="title">Rating Distributions</p>
            <div>
              <div className="rating mb-2">
                <IoIosStar />
                4.5
              </div>
              <div>{totalReviews} review</div>
            </div>
          </div>
          <RatingOverview initialRatings={initialRatings} />
        </Col>
        <Col span={24} lg={14} className="col_right">
          <p>Review Vendors</p>
          <Form layout="vertical">
            <Row gutter={[20, 20]}>
              <Col span={24} lg={12}>
                <Form.Item
                  name="fullName"
                  className="form_control mb-0"
                  rules={rules.fullName}>
                  <Input placeholder="Full Name" />
                </Form.Item>
              </Col>
              <Col span={24} lg={12}>
                <Form.Item
                  name="email"
                  className="form_control mb-0"
                  rules={rules.email}>
                  <Input placeholder="Your E-mail" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="experience"
                  className="form_control mb-0"
                  rules={rules.experience}>
                  <TextArea
                    className="remove_resize"
                    placeholder="Tell us about your experience"
                    rows={4}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={8}>
                <Button icon={<GalleryIcon />} className="btn__outline w-100">
                  Add Photos
                </Button>
              </Col>
              <Col xs={24} lg={8}>
                <Button type="primary" className="btn__primary w-100">
                  Add Your Review
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <div className="all_reviews">
        <div className="review">
          <div className="user_info">
            <div className="profile_pic">
              <img src={userUrl} alt="user" />
            </div>
            <div className="main">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="name">Akshaya</h3>
                <div className="rating">
                  <IoIosStar />
                  4.5
                </div>
              </div>
              <p className="time">Reviewed 2 days ago</p>
            </div>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
            consectetur. Scelerisque est enim accumsan risus varius in arcu
            augue. Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue.
          </div>
          <div className="shared_img">
            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="user_info">
            <div className="profile_pic">
              <img src={userUrl} alt="user" />
            </div>
            <div className="main">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="name">Akshaya</h3>
                <div className="rating">
                  <IoIosStar />
                  4.3
                </div>
              </div>
              <p className="time">Reviewed 2 days ago</p>
            </div>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
            consectetur. Scelerisque est enim accumsan risus varius in arcu
            augue. Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue.
          </div>
          <div className="shared_img">
            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="user_info">
            <div className="profile_pic">
              <img src={userUrl} alt="user" />
            </div>
            <div className="main">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="name">Akshaya</h3>
                <div className="rating">
                  <IoIosStar />
                  4.4
                </div>
              </div>
              <p className="time">Reviewed 2 days ago</p>
            </div>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
            consectetur. Scelerisque est enim accumsan risus varius in arcu
            augue. Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue.
          </div>
          <div className="shared_img">
            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="user_info">
            <div className="profile_pic">
              <img src={userUrl} alt="user" />
            </div>
            <div className="main">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="name">Akshaya</h3>
                <div className="rating">
                  <IoIosStar />
                  4.8
                </div>
              </div>
              <p className="time">Reviewed 2 days ago</p>
            </div>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
            consectetur. Scelerisque est enim accumsan risus varius in arcu
            augue. Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue.
          </div>
          <div className="shared_img">
            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="user_info">
            <div className="profile_pic">
              <img src={userUrl} alt="user" />
            </div>
            <div className="main">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="name">Akshaya</h3>
                <div className="rating">
                  <IoIosStar />
                  1.0
                </div>
              </div>
              <p className="time">Reviewed 2 days ago</p>
            </div>
          </div>
          <div className="review_text">
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
            consectetur. Scelerisque est enim accumsan risus varius in arcu
            augue. Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue.
          </div>
          <div className="shared_img">
            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>

            <div className="img">
              <img src={userUrl} alt="shared-images" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="btn__outline">View all</Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewAndRating;
