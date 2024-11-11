import React from "react";

const EnquiryModule = () => {
  return (
    <>
      <Modal
        open={isRegisterModalOpen}
        onOk={handleRegisterOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}>
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Register</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="filter">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Mobile Number" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Select placeholder="Select" className="w-100">
                    <Option value="one">My Self</Option>
                    <Option value="two">Son</Option>
                    <Option value="three">Daughter</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Select placeholder="Select" className="w-100">
                    <Option value="one">Man</Option>
                    <Option value="two">Woman</Option>
                    <Option value="three">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary"
                  block
                  onClick={showVerifyEmailOtpModal}>
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default EnquiryModule;
