import { Row, Col, Input, Form, Button } from "antd";
import React from "react";
import bgImg from "../../../../../assets/vivaahaa/bg_cta.png";

const PerfectVendor = () => {

  const rules = {
    name: [{ required: true, message: "Please enter your full name" }],
    email: [
      { required: true, type: "email", message: "Please enter a valid email" },
    ],
    phone: [{ required: true, message: "Please enter a valid number" }],
  };
  return (
    <div className="perfect_vendor">
      <img src={bgImg} alt="error" />
      <header className="heading">
        <h2 className="title">Search For Perfect Mehndi Artist?</h2>
        <p>Leave Your Details & we'll Do the Rest!</p>
      </header>
      <Form className="custom-form">
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={6}>
            <Form.Item
              name="name"
              className="form_control mb-0"
              rules={rules.name}>
              <Input placeholder="Enter Your Name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={6}>
            <Form.Item
              name="mobile"
              className="form_control mb-0"
              rules={rules.mobile}>
              <Input placeholder="Enter Mobile Number" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={6}>
            <Form.Item
              name="email"
              className="form_control mb-0"
              rules={rules.email}>
              <Input placeholder="Enter Your E-mail" />
            </Form.Item>
          </Col>

          <Col xs={24} lg={6}>
            <Button type="primary" className="btn__primary w-100">
              Get a Quote
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PerfectVendor;
