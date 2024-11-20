import React, { useState } from "react";
import { Modal, Form, Row, Col, Input, Select, Button, DatePicker } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons"; // Import the Close icon

const { Option } = Select;
const { TextArea } = Input;

const EnquiryModal = ({ isEnquiryModalOpen, handleEnquiryCancel }) => {
  const handleEnquiryOk = () => {
    // You can handle form submission logic here
    // setIsEnquiryModalOpen(false);
  };

  const setting = {
    open: isEnquiryModalOpen,
    onOk: handleEnquiryOk,
    onCancel: handleEnquiryCancel,
    footer: null,
    maskStyle: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
    closeIcon: null,
  };

  const validationRules = {
    name: [{ required: true, message: "Please enter your name" }],
    mobile: [{ required: true, message: "Please enter your mobile number" }],
    email: [{ required: true, message: "Please enter your email" }],
    date: [{ required: true, message: "Please select a date" }],
    package: [{ required: true, message: "Please select a package" }],
    message: [{ required: true, message: "Please enter your message" }],
  };

  return (
    <>
      <Modal {...setting} className="enquiry_modal">
        <div className="modal_header">
          <div className="title">Rithikas Mehandi Art</div>
          <CloseCircleOutlined onClick={handleEnquiryCancel} />
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="enquiry">
            <Row gutter={16}>
              <Col span={24} lg={12}>
                <Form.Item
                  name="name"
                  rules={validationRules.name}>
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={24} lg={12}>
                <Form.Item
                  name="mobile"
                  rules={validationRules.mobile}>
                  <Input placeholder="Mobile Number" />
                </Form.Item>
              </Col>
              <Col span={24} lg={12}>
                <Form.Item
                  name="email"
                  rules={validationRules.email}>
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24} lg={12}>
                <Form.Item
                  name="date"
                  rules={validationRules.date}>
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="package"
                  rules={validationRules.package}>
                  <Select placeholder="Select Interested Package">
                    <Option value="myself">Myself</Option>
                    <Option value="son">Son</Option>
                    <Option value="daughter">Daughter</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="message"
                  rules={validationRules.message}>
                  <TextArea
                    placeholder="Hello, I am interested in learning more about your services. Can you please provide me with some details?"
                    rows={4}
                    className="remove_resize"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn__primary"
                  block
                  onClick={handleEnquiryOk}>
                  Enquire
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default EnquiryModal;
