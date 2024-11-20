import { Button, Col, Modal, Row } from "antd";
import React from "react";
import ProfileDetailsCard, { KeyPoint } from "./ProfileDetailsCard";
import { IoIosStar } from "react-icons/io";
import { CloseCircleOutlined } from "@ant-design/icons";

const ProfileDetailsCardModal = ({
  isDetailsCardModalOpen,
  handleDetailsCardCancel,
  showDetailsCardModal,
  vendor,
}) => {
  const { name, location, tag, rating, startingPrice, packageName } = vendor;

  const setting = {
    open: isDetailsCardModalOpen,
    onOk: showDetailsCardModal,
    onCancel: handleDetailsCardCancel,
    footer: null,
    maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    closeIcon: null,
  };

  const keyPoints = [
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <div>
      <Modal {...setting} className="cardDetailsModal">
        <Row gutter={30}>
          <Col lg={12}>
            <ProfileDetailsCard
              vendorsDetails={vendor}
              showModal={showDetailsCardModal}
              hideRightCol
            />
          </Col>
          <Col lg={12}>
            <div className="mob_res d-block">
              <header className="heading">
                <h1 className="title">
                  {packageName}
                </h1>
                  <CloseCircleOutlined onClick={handleDetailsCardCancel} />
              </header>
              <p className="about_vendor">
                Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
                accumsan risus varius in arcu augue. Lorem ipsum dolor sit amet
                consectetur.
              </p>
                {keyPoints.map((point, index) => (
                  <KeyPoint key={index} text={point} />
                ))}
              <div className="pricing_and_enquiry">
                <div>
                  <p className="package_name mb-0">{packageName}</p>
                  <h3 className="price primary_text_gradient mb-0">₹ {startingPrice}</h3>
                </div>
                <Button type="primary" className="btn__primary">Enquiry Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default ProfileDetailsCardModal;
