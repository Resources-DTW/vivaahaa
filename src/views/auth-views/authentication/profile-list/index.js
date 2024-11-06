import {
  Button,
  Card,
  Carousel,
  Col,
  Collapse,
  Dropdown,
  Menu,
  Pagination,
  Radio,
  Row,
  Space,
  Tabs,
} from "antd";
import {
  MoreOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import ProfileCandidate from "../../../../assets/vivaahaa/profilecandidate.png";
import { VerifyIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { useState, useEffect } from "react";
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
const ProfileList = () => {
  const tenUsersDetails = userDetailsArray.slice(0, 10)

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

  const [currentPage, setCurrentPage] = useState({
    myMatches: 1,
    nearMe: 1,
    recentlyViewed: 1,
    shortlisted: 1,
  });
  const itemsPerPage = 5;

  const handlePageChange = (panelkey, page) => {
    setCurrentPage((prev) => ({ ...prev, [panelkey]: page }));
  };

  useEffect(() => {
    const savedPage = JSON.parse(localStorage.getItem("currentPage"));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  const getPaginatedData = (panelkey) => {
    const startIndex = (currentPage[panelkey] - 1) * itemsPerPage;
    return userDetailsArray.slice(startIndex, startIndex + itemsPerPage);
  };

  const itemRender = (page, type, originalElement, panelkey) => {
    const pagesToShow = 3;
    const totalPages = Math.ceil(userDetailsArray.length / itemsPerPage);
    let startPage = Math.max(1, currentPage[panelkey] - Math.floor(pagesToShow / 2));
    let endPage = startPage + pagesToShow - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }
    if (type === "prev") {
      return (
        <a className="custom_arrow">
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M1 5L5.44444 9M1 5L5.44444 1M1 5H17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </a>
      );
    }
    if (type === "next") {
      return (
        <a className="custom_arrow">
          Next
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 5L12.5556 1M17 5L12.5556 9M17 5L1 5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      );
    }
    if (type === "page") {
      if (page < startPage || page > endPage) {
        return null;
      }
    } else if (type === "jump-prev" || type === "jump-next") {
      return null;
    }
    return originalElement;
  };

  const items = [
    {
      key: "1",
      label: "My Matches (1005)",
      children: (
        <>
          {getPaginatedData('myMatches').map((userDetails, index) => (
            <ProfileCard
              key={index}
              displayUserDetails={userDetails}
              addActionBtn
            />
          ))}

          <Pagination
            current={currentPage['myMatches']}
            total={userDetailsArray.length}
            pageSize={itemsPerPage}
            onChange={(page) => handlePageChange('myMatches', page)}
            className="custom-pagination"
            itemRender={(page, type, originalElement) => itemRender(page, type, originalElement, 'myMatches')}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "Near Me (500)",
      children: (
        <>
          {getPaginatedData('nearMe').map((userDetails, index) => (
            <ProfileCard
              key={index}
              displayUserDetails={userDetails}
              addActionBtn
            />
          ))}
          <Pagination
            current={currentPage['nearMe']}
            total={userDetailsArray.length}
            pageSize={itemsPerPage}
            onChange={(page) => handlePageChange('nearMe', page)}
            className="custom-pagination"
            itemRender={(page, type, originalElement) => itemRender(page, type, originalElement, 'nearMe')}
          />
        </>
      ),
    },
    {
      key: "3",
      label: "Recently View (105)",
      children: (
        <>
          {getPaginatedData('recentlyViewed').map((userDetails, index) => (
            <ProfileCard
              key={index}
              displayUserDetails={userDetails}
              addActionBtn
            />
          ))}
          <Pagination
            current={currentPage['recentlyViewed']}
            total={userDetailsArray.length}
            pageSize={itemsPerPage}
            onChange={(page) => handlePageChange('recentlyViewed', page)}
            className="custom-pagination"
            itemRender={(page, type, originalElement) => itemRender(page, type, originalElement, 'recentlyViewed')}
          />
        </>
      ),
    },
    {
      key: "4",
      label: "Shortlisted (12)",
      children: (
        <>
          {getPaginatedData('shortlisted').map((userDetails, index) => (
            <ProfileCard
              key={index}
              displayUserDetails={userDetails}
              addActionBtn
            />
          ))}
          <Pagination
            current={currentPage['shortlisted']}
            total={userDetailsArray.length}
            pageSize={itemsPerPage}
            onChange={(page) => handlePageChange('shortlisted', page)}
            className="custom-pagination"
            itemRender={(page, type, originalElement) => itemRender(page, type, originalElement, 'shortlisted')}
          />
        </>
      ),
    },
  ];
  return (
    <>
      {/* Profile List */}
      <section className="section section_with_filter pt-sm-5">
        <div className="container">
          <Row justify="end" gutter={16}>
            <Col span={24} md={6} lg={6}>
              <div className="search_filter">
                <p>Matching your preferences</p>
                <div className="filter_outline_btn" onClick={handleOpenFilter}>
                  <FilterOutlined />
                  <span>Filter</span>
                </div>
              </div>
              <div
                onClick={handleCloseFilter}
                className={`filter_overlay ${showFilter ? "show" : ""}`}
              />
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
                    defaultActiveKey={[]}
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <MinusSquareOutlined className="expand_icon" />
                      ) : (
                        <PlusSquareOutlined className="expand_icon" />
                      )
                    }
                    className={`profile_filter`}>
                    <Panel header="Photo Settings" key="1">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Visible to all <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Only for prime member <span>(155)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Recently Joined" key="2">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Within a day <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Within a week <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Within a month <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Active Members" key="3">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Within a day <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Within a week <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Within a month <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Annual Income" key="4">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Upto INR 1 Lakhs <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            INR 2 Lakh to 4 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            INR 4 Lakh to 7 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            INR 7 Lakh to 10 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            INR 10 Lakh to 15 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={7}>
                            INR 15 Lakh to 20 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={8}>
                            INR 20 Lakh to 30 Lakh <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={9}>
                            INR 30 Lakh to 50 Lakh <span>(1000+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Marital Status" key="5">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Never Married <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Divorced <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Annulled <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Awaiting Divorced <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Widowed <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Religion" key="6">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Muslim <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Hindu <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            No Religion <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Christian <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Others <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Mother Tongue" key="7">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Urdu <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Hindi <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Bengali <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Tamil <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Malayalam <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Country Living in" key="8">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            India <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Pakistan <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            United Arab Emirates <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            United Kingdom <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Malayalam <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Working With" key="9">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Non Working <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Private Company <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Business <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Government <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Defense / Civil <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Profile Created by" key="10">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Self <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Parent / Guardian <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Sibling <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Other <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Friend <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Eating habits" key="11">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Non-Veg <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Veg <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            Eggetarian <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Vegan <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Jain <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Education Level" key="12">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Bachelor <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Master <span>(1000+)</span>
                          </Radio>
                          <Radio className="radio_item" value={4}>
                            High school <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={5}>
                            Honours <span>(1500+)</span>
                          </Radio>
                          <Radio className="radio_item" value={6}>
                            Diploma <span>(1500+)</span>
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </Col>
            <Col span={24} md={18} lg={18}>
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

export default ProfileList;
