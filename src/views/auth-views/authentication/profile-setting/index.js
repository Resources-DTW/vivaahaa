import {
  Button,
  Card,
  Carousel,
  Col,
  Collapse,
  DatePicker,
  Dropdown,
  Form,
  Menu,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Tabs,
} from "antd";
import {
  MoreOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import ProfileCandidate from "../../../../assets/vivaahaa/profilecandidate.png";
import { VerifyIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import BasicIcon from "../../../../assets/icons/basic.svg";
import FamilyIcon from "../../../../assets/icons/family.svg";
import LeftArrow from "../../../../assets/icons/left_arrow.svg";
import RightArrow from "../../../../assets/icons/right_arrow.svg";
import ProfessionalIcon from "../../../../assets/icons/professional.svg";
import HoroscopeIcon from "../../../../assets/icons/horoscope.svg";
import LocationIcon from "../../../../assets/icons/location.svg";
import Callcon from "../../../../assets/icons/call.svg";
import Mailcon from "../../../../assets/icons/mail.svg";
import CheckIcon from "../../../../assets/icons/small_check.svg";
import Shortlist_1 from "../../../../assets/vivaahaa/shortlist-1.png";
import LocationPin from "../../../../assets/icons/location-pin.svg";
import Chair from "../../../../assets/icons/chair.svg";
import Bed from "../../../../assets/icons/bed.svg";
import Catering from "../../../../assets/icons/catering.svg";
import Heart from "../../../../assets/icons/heart.svg";
import Logo from "../../../../assets/vivaahaa/logo-dark.svg";
import Price1 from "../../../../assets/icons/price1.svg";
import Price2 from "../../../../assets/icons/price2.svg";
import Price3 from "../../../../assets/icons/price3.svg";
import Price4 from "../../../../assets/icons/price4.svg";
import { IoIosCheckmarkCircleOutline, IoIosStar } from "react-icons/io";
import { useRef, useState } from "react";
import { CloseCircleFilled, FilterOutlined } from "@ant-design/icons";
import ProfileCard from "views/auth-views/components/ProfileCard";
import { userDetailsArray } from "constants/GeneralConstant";

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

const ProfileSetting = () => {
  //  Filter Toggle Mobile Responsive
  const [showFilter, setShowFilter] = useState(false);

  const handleOpenFilter = () => {
    setShowFilter(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseFilter = () => {
    document.body.style.overflow = "auto";
    setShowFilter(false);
  };

  const handleApplyFilter = () => {
    document.body.style.overflow = "auto";
    setShowFilter(false);
  };

  const { Panel } = Collapse;
  const { Option } = Select;
  const tabs = [
    "Makeup and Mehndi Artists",
    "Photographers",
    "Choreographers, DJs",
    "Background Verification",
    "Astrology",
    "Marriage Registration",
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsContainerRef = useRef(null);

  const scrollAmount = 100; // Define the amount of pixels to scroll

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleLeftArrowClick = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleRightArrowClick = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const items = [
    {
      key: "1",
      label: "About Me",
      children: (
        <div className="desktop_profile_list">
          <Row>
            <Col span={24} lg={24}>
            <ProfileCard />
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Bio</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <p className="text about_me mb-0">
                    I am Anitha G, I have a Bachelor's degree and I am employed
                    in private Sector as an UI/UX designer currently based in
                    Chennai. I belong to a middle class, joint family with
                    moderate values.
                  </p>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Contact Details</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <div className="d-flex gap-1 mb-3 mb-sm-0">
                    <img src={Callcon} alt="call" className="img-fluid" />
                    <div className="text m-0">+91 88888 22222</div>
                    <img src={CheckIcon} alt="check" className="img-fluid" />
                  </div>

                  <div className="d-flex gap-1">
                    <img src={Mailcon} alt="call" className="img-fluid" />
                    <div className="text m-0">anitha@gmail.com</div>
                    <img src={CheckIcon} alt="check" className="img-fluid" />
                  </div>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Basic Details</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>
                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Profile Created for</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Parents</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Date of Birth</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">20 May 2001</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Age</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">25 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Marital Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Never Married</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Eye Color</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Black</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Hair Colour</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Black</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}></Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Hair Style</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Long hair</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Tattoos or Piercings</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Body Type</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Slim</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Weight</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">55 Kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Height</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">5 Ft 1 In</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Any Disability</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Religious Information</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Religion</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Hindu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Caste</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Nadar</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}></Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Sub-Caste</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Mother Tongue</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Family Details</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Value</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Traditional</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Type</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Joint</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Middle Class</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Location</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamilnadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1}></Col>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">No. of Brothers</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">No. of Sister</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">00</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Father Occupation</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Business Man</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Mother Occupation</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Housemaker</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Professional Details</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Education</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">BCA</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">College / University</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">SRM University</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Occupation</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">UI UX Designer</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Company Name</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">TCS</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Employed In</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Private Sector</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Year of Experience</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">02 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Annual Income</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">
                            02 - 03 Lakhs (Year)
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="tex key_textt mb-2">Work Location</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamandu</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Horoscope Details</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Date of Birth</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">20 May 2001</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Time of Birth</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18:05 Hrs</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Astrological Sign</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Manglik Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Birth Place</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai, Tamilnadu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Sun Sign Compatibility</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">
                            Gemini and Aquarius
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Location</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">City</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">State</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil Nadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Pin code</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">600113</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Country</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">India</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Lifestyle</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Hobbies</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Drawing, Cooking</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Interests</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Singing, Dance</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Eating Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Non-Veg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Smoking Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Drinking Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Spoken Languages</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil, English</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">My Photos</div>
                  </div>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24}></Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: "2",
      label: "Shortlist Profiles",
      children: (
        <section className="section_with_filter">
          <Row gutter={[16, 16]}>
            <Col span={24} md={6} lg={6}>
              <div className="search_filter">
                <p>Matching your preferences</p>
                <div className="filter_outline_btn" onClick={handleOpenFilter}>
                  <FilterOutlined />
                  <span>Filter</span>
                </div>
              </div>
              <div className={`filter_overlay ${showFilter ? "show" : ""}`} />
              <div className={`control_scroll ${showFilter ? "show" : ""}`}>
                <div className={`search_filter_wrap`}>
                  <div className="apply_filter_wrap">
                    <CloseCircleFilled
                      className="close_filter_wrap"
                      onClick={handleCloseFilter}
                    />
                    <div className="apply_filter" onClick={handleApplyFilter}>
                      <FilterOutlined />
                      <span>Apply Filter</span>
                    </div>
                  </div>
                  <Collapse
                    defaultActiveKey={["1", "2"]}
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <MinusSquareOutlined className="expand_icon" />
                      ) : (
                        <PlusSquareOutlined className="expand_icon" />
                      )
                    }
                    className="profile_filter">
                    <Panel header="Profile Shared Duration" key="1">
                      <div className="custom_radio">
                        <Form layout="vertical" name="range" className="w-100">
                          <Form.Item label="Start Date" name="Start_Date">
                            <DatePicker className="w-100" />
                          </Form.Item>
                          <Form.Item label="End Date" name="End_Date">
                            <DatePicker className="w-100" />
                          </Form.Item>
                        </Form>
                      </div>
                    </Panel>
                    <Panel header="Filter" key="2">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All Requests
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Cancelled by me
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Cancelled by them
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </Col>
            <Col span={24} md={18} lg={18}>
              {userDetailsArray.map((userDetails, index) => (
                <ProfileCard
                  key={index}
                  displayUserDetails={userDetails}
                  addActionBtn
                  shortListed
                />
              ))}
            </Col>
          </Row>
        </section>
      ),
    },
    {
      key: "3",
      label: "Shortlist Vendors",
      children: (
        <>
          <Row gutter={[16, 16]}>
            <Col span={24} lg={24}>
              <div className="tab-selector">
                <button onClick={handleLeftArrowClick} className="arrow-button">
                  <img src={LeftArrow} alt="Left arrow" />
                </button>
                <div className="tabs-container" ref={tabsContainerRef}>
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={`tab ${index === selectedTab ? "selected" : ""}`}
                      onClick={() => handleTabClick(index)}>
                      {tab}
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleRightArrowClick}
                  className="arrow-button">
                  <img src={RightArrow} alt="Right arrow" />
                </button>
              </div>
            </Col>
          </Row>
          {selectedTab == 0 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Hotel Mountview</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Catering</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Hotel Mountview</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Catering</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Hotel Mountview</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Catering</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {selectedTab == 1 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Studio</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Photographer</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Wedding Studio</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Photographer</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Photographer</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Photographer</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {selectedTab == 2 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview DJ</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>DJ</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Nemo Studios</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Choreographer</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Coldplay</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>DJ</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {selectedTab == 3 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Verification</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>BGV</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Verification</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>BGV</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Verification</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>BGV</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {selectedTab == 4 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Astrology</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Astrology</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Wedding Astrology</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Astrology</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Card Astrology</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Astrology</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
          {selectedTab == 5 && (
            <Row gutter={[16, 16]}>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Mountview Registration</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Registration</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Wedding Registration</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Registration</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} lg={8}>
                <div className="shortlist_card">
                  <img
                    src={Shortlist_1}
                    alt="shortlist"
                    className="img-fluid"
                  />
                  <div className="top_box">
                    <div className="content">
                      <img src={Heart} alt="heart" width={16} height={14} />
                      <span className="text">Most popular</span>
                    </div>
                  </div>
                  <div className="bottom_box">
                    <div className="top_heading">
                      <div className="heading">
                        <h4 className="title mb-1">Marriage Registration</h4>
                        <div className="d-flex">
                          <img
                            src={LocationPin}
                            alt="location"
                            className="img-fluid mr-1"
                          />
                          <p className="mb-0 text">Adyar, Chennai</p>
                        </div>
                      </div>
                      <div className="rating">
                        <IoIosStar />
                        4.5
                      </div>
                    </div>
                    <div className="center_text">
                      <div className="label_item">
                        <img src={Chair} alt="sheet" className="img-fluid" />
                        <span>400+ Pax</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Bed} alt="sheet" className="img-fluid" />
                        <span>10+ Rooms</span>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="label_item">
                        <img src={Catering} alt="sheet" className="img-fluid" />
                        <span>Registration</span>
                      </div>
                    </div>
                    <div className="bottom_cta">
                      <div>
                        <span>Veg</span>
                        <h4 className="m-0 primary-text">₹300</h4>
                      </div>
                      <div className="vertical-line"></div>
                      <div>
                        <span>Non-Veg</span>
                        <h4 className="m-0 primary-text">₹350</h4>
                      </div>
                      <Button type="primary" className="btn btn_primary">
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </>
      ),
    },
    {
      key: "4",
      label: "Partner Preference",
      children: (
        <div className="desktop_profile_list">
          <Row>
            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Basic & Religious Preference</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Age</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18 - 24 Years</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Height</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">4 ft - 5 ft</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Marital Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Never Married</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Eating Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Non-Veg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Mother Tongue</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Weight</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">55 - 70 kg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Religion</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Hindu</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Caste</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Any Disability</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Body Type</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Average</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Smoking Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text  mb-2">Drinking Habit</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">No</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Professional Preference</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Education</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Occupation</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Work Location</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Employed In</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Not Specified</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Annual Income</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">
                            02 - 03 Lakhs (Year)
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Location Preference</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">City</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Chennai</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">State</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Tamil Nadu</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Country</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">India</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Horoscope Preference</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Time of Birth</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">18:05 Hrs</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Astrological Sign</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Gemini</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Manglik Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">None</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Sun Sign Compatibility</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">
                            Gemini and Aquarius
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>

            <Col span={24} lg={24}>
              <Card className="profile_details_card">
                <div className="card_header">
                  <div className="icon_title">
                    <div className="title">Family Preference</div>
                  </div>
                  <Button type="primary" className="btn_outline_primary" ghost>
                    Edit
                  </Button>
                </div>

                <div className="card_body">
                  <Row>
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Value</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Traditional</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Type</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Joint</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Family Status</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Middle Class</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={1} />
                    <Col span={24} lg={11}>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Brothers</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">01</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Sister</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">01</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text key_text mb-2">Father Occupation</p>
                        </Col>
                        <Col lg={4} md={4} xs={4}>
                          <p className="text mb-2 text-center"> : </p>
                        </Col>
                        <Col lg={10} md={10} xs={10}>
                          <p className="text mb-2 fw-600">Business Man</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: "5",
      label: "Subscription",
      children: (
        <>
          <div className="pricing_page">
            <Row>
              <Col span={24}>
                <div className="logo_item">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </div>
              </Col>
            </Row>
            <Row className="card_icon_container">
              <Col span={24} lg={6}>
                <div className="card_icon">
                  <img src={Price1} alt="" className="img-fluid" />
                  <p className="text">Dedicated Advisor</p>
                </div>
              </Col>
              <Col span={24} lg={6}>
                <div className="card_icon">
                  <img src={Price2} alt="" className="img-fluid" />
                  <p className="text">
                    Handpicked Matches as per Your Preferences
                  </p>
                </div>
              </Col>
              <Col span={24} lg={6}>
                <div className="card_icon">
                  <img src={Price3} alt="" className="img-fluid" />
                  <p className="text">Introductions and Meetings</p>
                </div>
              </Col>
              <Col span={24} lg={6}>
                <div className="card_icon">
                  <img src={Price4} alt="" className="img-fluid" />
                  <p className="text">All Premium Benefits</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="discount_box">
                  <div className="text">FLAT 20% DISCOUNT</div>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24} sm={{ span: 8 }}>
                <div className="price_card h-100">
                  <div className="price_header">Free</div>
                  <div className="price_body">
                    <div className="sub_text">₹1000</div>
                    <div className="price_count">₹0</div>
                    <ul className="price_list">
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">15 Profile's per plan</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col span={24} sm={{ span: 8 }}>
                <div className="price_card h-100">
                  <div className="price_header">Gold</div>
                  <div className="price_body">
                    <div className="sub_text">₹6000</div>
                    <div className="price_count">₹3,000</div>
                    <ul className="price_list">
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">15 Profile's per plan</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <Button
                        type="primary"
                        className="btn btn_outline_primary"
                        ghost>
                        Upgrade Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={24} sm={{ span: 8 }}>
                <div className="price_card h-100">
                  <div className="price_header">Platinum</div>
                  <div className="price_body">
                    <div className="sub_text">₹8,000</div>
                    <div className="price_count">₹7,000</div>
                    <ul className="price_list">
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">15 Profile's per plan</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                      <li>
                        <div className="label label_light">
                          <IoIosCheckmarkCircleOutline className="icon" />{" "}
                          <span className="ms-1">Relationship Manage</span>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <Button
                        type="primary"
                        className="btn btn_outline_primary"
                        ghost>
                        Upgrade Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="row">
              <div className="col-12">
                <div className="call_info">
                  <p className="para">Need more information?</p>
                  <p className="title">
                    <span className="me-1 icon">
                      <BiPhoneCall />
                    </span>
                    <span className="text">
                      Request a free select Sahi Saathi consultattion
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "6",
      label: "Settings",
      children: (
        <Row justify="center" gutter={[8, 8]}>
          <Col span={24} lg={24}>
            <Card className="profile_details_card">
              <div className="card_header">
                <div className="icon_title">
                  <div className="title">Account Settings</div>
                </div>
                <Button type="primary" className="btn_outline_primary" ghost>
                  Edit
                </Button>
              </div>

              <div className="card_body">
                <Row>
                  <Col span={24} lg={12}>
                    <Row>
                      <Col lg={6} md={8} xs={10}>
                        <p className="text key_text mb-2">Update Email ID</p>
                      </Col>
                      <Col lg={4} md={4} xs={4}>
                        <p className="text mb-2 text-center"> : </p>
                      </Col>
                      <Col lg={10} md={10} xs={10}>
                        <p className="text mb-2 fw-600">aravind@gmail.com</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} lg={12}>
                    <Row>
                      <Col lg={6} md={8} xs={10}>
                        <p className="text key_text mb-2">Update Mobile No.</p>
                      </Col>
                      <Col lg={4} md={4} xs={4}>
                        <p className="text mb-2 text-center"> : </p>
                      </Col>
                      <Col lg={10} md={10} xs={10}>
                        <p className="text mb-2 fw-600">+91 88888 22222</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={24} lg={24}>
            <Card className="profile_details_card">
              <div className="card_header">
                <div className="icon_title">
                  <div className="title">Privacy Settings</div>
                </div>
              </div>

              <div className="card_body">
                <Row gutter={[20, 20]}>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Profile Picture
                        </span>
                      </p>
                      <Select
                        defaultValue="Everyone"
                        style={{ width: "220px" }}>
                        <Option value="Everyone">Everyone</Option>
                        <Option value="Only">Only</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Profile Visibility
                        </span>
                      </p>
                      <Select
                        defaultValue="Everyone"
                        style={{ width: "220px" }}>
                        <Option value="Everyone">Everyone</Option>
                        <Option value="Only">Only</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Contact Information Visibility
                        </span>
                      </p>
                      <Select
                        defaultValue="Everyone"
                        style={{ width: "220px" }}>
                        <Option value="Everyone">Everyone</Option>
                        <Option value="Only">Only</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Language</span>
                      </p>
                      <Select
                        defaultValue="Everyone"
                        style={{ width: "220px" }}>
                        <Option value="Everyone">Everyone</Option>
                        <Option value="Only">Only</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Mobile Notification
                        </span>
                      </p>
                      <Switch defaultChecked />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Desktop Notification
                        </span>
                      </p>
                      <Switch defaultChecked />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Email Notification
                        </span>
                      </p>
                      <Switch />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Blocked Users</span>
                      </p>
                      <p className="text mb-0">2 Users Blocked</p>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Contact Support
                        </span>
                      </p>
                      <p className="text mb-0">
                        <MdOutlineArrowForwardIos />
                      </p>
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Password</span>
                      </p>
                      <Button
                        type="primary"
                        className="btn btn_outline_primary"
                        ghost>
                        Change Password
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={24} lg={24}>
            <Card className="profile_details_card">
              <div className="card_header">
                <div className="icon_title">
                  <div className="title">Communication Preferences</div>
                </div>
              </div>

              <div className="card_body">
                <Row gutter={[20, 20]}>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">
                          Push Notification
                        </span>
                      </p>
                      <Switch defaultChecked />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Email</span>
                      </p>
                      <Switch defaultChecked />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">WhatsApp</span>
                      </p>
                      <Switch />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Call</span>
                      </p>
                      <Switch />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">SMS</span>
                      </p>
                      <Switch />
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>

          <Col span={24} lg={24}>
            <Card className="profile_details_card">
              <div className="card_header">
                <div className="icon_title">
                  <div className="title">Hide & Delete Profile</div>
                </div>
              </div>

              <div className="card_body">
                <Row gutter={[20, 20]}>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Hide Profile</span>
                      </p>
                      <Switch />
                    </div>
                  </Col>
                  <Col span={24} lg={24} className="min-height-40">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text mb-0">
                        <span className="text-dark fw-600">Delete Profile</span>
                      </p>
                      <Button
                        type="primary"
                        className="btn btn_outline_primary"
                        ghost>
                        Delete
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <>
      {/* Profile List */}
      <section className="section pt-sm-5">
        <div className="container">
          <Row justify="center" gutter={16}>
            <Col span={24} md={24} lg={24} xl={22} xxl={20}>
              <div className="custom_profile_tab">
                <Tabs defaultActiveKey="1" type="card" items={items} />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ProfileSetting;
