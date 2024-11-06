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
import EmptyImg from "../../../../assets/vivaahaa/empty.svg";
import { VerifyIcon } from "assets/svg/icon";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CloseCircleFilled, FilterOutlined } from "@ant-design/icons";
import { RiUserAddLine } from "react-icons/ri";
import { useState, useEffect } from "react";
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

const StatusList = () => {
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

  // Pagination
  const [currentPage, setCurrentPage] = useState({
    requests: 1,
    accepted: 1,
    received: 1,
    declined: 1,
  });
  const itemsPerPage = 5;

  const handlePageChange = (tabKey, page) => {
    setCurrentPage((prev) => ({ ...prev, [tabKey]: page }));
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

  const getPaginatedData = (tabKey) => {
    const startIndex = (currentPage[tabKey] - 1) * itemsPerPage;
    return userDetailsArray.slice(startIndex, startIndex + itemsPerPage);
  };

  const itemRender = (page, type, originalElement, tabKey) => {
    const pagesToShow = 3;
    const totalPages = Math.ceil(userDetailsArray.length / itemsPerPage);
    let startPage = Math.max(
      1,
      currentPage[tabKey] - Math.floor(pagesToShow / 2)
    );
    let endPage = startPage + pagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    if (type === "prev") {
      return (
        <a  className="custom_arrow">
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
        <a  className="custom_arrow">
          Next
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
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

  const { Panel } = Collapse;
  const items = [
    {
      key: "1",
      label: "Requests",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: (
                  <div className="custom-label">
                    Pending Requests<div className="indicator"></div>
                  </div>
                ),
                key: "11",
                children: (
                  <>
                    {getPaginatedData("requests").map((userDetails, index) => (
                      <ProfileCard
                        key={index}
                        displayUserDetails={userDetails}
                        sendRequest="send"
                        addActionBtn
                      />
                    ))}

                    <Pagination
                      current={currentPage["requests"]}
                      total={userDetailsArray.length}
                      pageSize={itemsPerPage}
                      onChange={(page) => handlePageChange("requests", page)}
                      className="custom-pagination"
                      itemRender={(page, type, originalElement) =>
                        itemRender(page, type, originalElement, "requests")
                      }
                      showSizeChanger={false}
                    />
                  </>
                ),
              },
              {
                label: (
                  <div className="custom-label">
                    Accepted Requests<div className="indicator"></div>
                  </div>
                ),
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Accepted Requests
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
              {
                label: (
                  <div className="custom-label">
                    Sent Requests<div className="indicator"></div>
                  </div>
                ),
                key: "33",
                children: (
                  <Row justify="center">
                    <Col span={24}>
                      <div className="empty_card">
                        <img src={EmptyImg} alt="Empty" className="img-fluid" />
                        <div className="title">There are no Sent Requests</div>
                      </div>
                    </Col>
                  </Row>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: "Accepted (1)",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: (
                  <div className="custom-label">
                    All Request<div className="indicator"></div>
                  </div>
                ),
                key: "11",
                children: (
                  <>
                    {getPaginatedData("accepted").map((userDetails, index) => (
                      <ProfileCard
                        key={index}
                        displayUserDetails={userDetails}
                        sendRequest="send"
                        addActionBtn
                        shortListed={userDetails.shortListed}
                      />
                    ))}

                    <Pagination
                      current={currentPage["accepted"]}
                      total={userDetailsArray.length}
                      pageSize={itemsPerPage}
                      onChange={(page) => handlePageChange("accepted", page)}
                      className="custom-pagination"
                      itemRender={(page, type, originalElement) =>
                        itemRender(page, type, originalElement, "accepted")
                      }
                      showSizeChanger={false}
                    />
                  </>
                ),
              },
              {
                label: (
                  <div className="custom-label">
                    Filtered Out<div className="indicator"></div>
                  </div>
                ),
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Pending Invitations to Connect
                          </div>
                          <Link to="" className="underline_link">
                            View My Matches
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Received",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            indicator={{ size: 0 }}
            items={[
              {
                label: (
                  <div className="custom-label">
                    Accepted Invitations<div className="indicator"></div>
                  </div>
                ),
                key: "11",
                children: (
                  <>
                    {getPaginatedData("received").map((userDetails, index) => (
                      <ProfileCard
                        key={index}
                        displayUserDetails={userDetails}
                        sendRequest="send"
                        addActionBtn
                        shortListed={userDetails.shortListed}
                      />
                    ))}

                    <Pagination
                      current={currentPage["received"]}
                      total={userDetailsArray.length}
                      pageSize={itemsPerPage}
                      onChange={(page) => handlePageChange("received", page)}
                      className="custom-pagination"
                      itemRender={(page, type, originalElement) =>
                        itemRender(page, type, originalElement, "received")
                      }
                      showSizeChanger={false}
                    />
                  </>
                ),
              },
              {
                label: (
                  <div className="custom-label">
                    Filtered Out<div className="indicator"></div>
                  </div>
                ),
                key: "22",
                children: (
                  <>
                    <Row justify="center">
                      <Col span={24}>
                        <div className="empty_card">
                          <img
                            src={EmptyImg}
                            alt="Empty"
                            className="img-fluid"
                          />
                          <div className="title">
                            There are no Pending Invitations to Connect
                          </div>
                          <Link to="" className="underline_link">
                            View My Matches
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </>
                ),
              },
            ]}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: "Declined",
      children: (
        <div className="custom_profile_tab_inner">
          <Tabs
            defaultActiveKey="11"
            indicator={{ size: 0 }}
            items={[
              {
                label: (
                  <div className="custom-label">
                    Sent invitations<div className="indicator"></div>
                  </div>
                ),
                key: "11",
                children: (
                  <>
                    {getPaginatedData("declined").map((userDetails, index) => (
                      <ProfileCard
                        key={index}
                        displayUserDetails={userDetails}
                        sendRequest="rejected"
                      />
                    ))}

                    <Pagination
                      current={currentPage["declined"]}
                      total={userDetailsArray.length}
                      pageSize={itemsPerPage}
                      onChange={(page) => handlePageChange("declined", page)}
                      className="custom-pagination"
                      itemRender={(page, type, originalElement) =>
                        itemRender(page, type, originalElement, "declined")
                      }
                      showSizeChanger={false}
                    />
                  </>
                ),
              },
            ]}
          />
        </div>
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
                    <Panel header="Sort" key="1">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            Most relevant
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Newest <span>(355)</span>
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Oldest first
                          </Radio>
                        </Radio.Group>
                      </div>
                    </Panel>
                    <Panel header="Filter" key="2">
                      <div className="custom_radio">
                        <Radio.Group defaultValue={1}>
                          <Radio className="radio_item" value={1}>
                            All Requests
                          </Radio>
                          <Radio className="radio_item" value={2}>
                            Photo Requests
                          </Radio>
                          <Radio className="radio_item" value={3}>
                            Phone Requests
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

export default StatusList;
