import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import LogoLight from "../../assets/vivaahaa/logo_light.svg";
import { useState } from "react";

const ActionButton = ({ changeWidth }) => {
  const { Option } = Select;

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoginMobileModalOpen, setIsLoginMobileModalOpen] = useState(false);
  const [isLoginMobileOtpModalOpen, setIsLoginMobileOtpModalOpen] =
    useState(false);
  const [isVerifyEmailOtpModalOpen, setIsVerifyEmailOtpModalOpen] =
    useState(false);
  const [isVerifyMobileOtpModalOpen, setIsVerifyMobileOtpModalOpen] =
    useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Login
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
  };

  // Login with Mobile Number
  const showLoginMobileModal = () => {
    setIsLoginModalOpen(false);
    setIsLoginMobileModalOpen(true);
  };
  const handleLoginMobileOk = () => {
    setIsLoginMobileModalOpen(false);
  };

  // Login with Mobile Number OTP
  const showLoginMobileOtpModal = () => {
    setIsLoginMobileModalOpen(false);
    setIsLoginMobileOtpModalOpen(true);
  };
  const handleLoginMobileOtpOk = () => {
    setIsLoginMobileOtpModalOpen(false);
  };

  // Register
  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const handleRegisterOk = () => {
    setIsRegisterModalOpen(false);
  };

  // Verify Email OTP
  const showVerifyEmailOtpModal = () => {
    setIsRegisterModalOpen(false);
    setIsVerifyEmailOtpModalOpen(true);
  };
  const handleVerifyEmailOtpOk = () => {
    setIsVerifyEmailOtpModalOpen(false);
  };

  // Verify Mobile Number OTP
  const showVerifyMobileOtpModal = () => {
    setIsVerifyEmailOtpModalOpen(false);
    setIsVerifyMobileOtpModalOpen(true);
  };
  const handleVerifyMobileOtpOk = () => {
    setIsVerifyMobileOtpModalOpen(false);
  };


  const containerStyle = {
    width: '100%',
  }

  const buttonStyle = {
    flex: '1 1 50%', 
    margin: '0 10px', 
    maxWidth: '50%', 
    textAlign: 'center',
    padding: '0',
  }

  return (
    <>
      <div className="d-flex align-items-center" style={changeWidth? containerStyle : null}>
        <Button
          type="primary"
          className="btn_primary mr-2 pl-lg-4 pr-lg-4"
          style={changeWidth? buttonStyle : null}
          onClick={showRegisterModal}
        >
          Register
        </Button>
        <Button
          type="primary"
          className="btn_outline_primary pl-lg-4 pr-lg-4"
          style={changeWidth? buttonStyle : null}
          ghost
          onClick={showLoginModal}
        >
          Login
        </Button>
      </div>

      {/* Login Modal */}
      <Modal
        open={isLoginModalOpen}
        onOk={handleLoginOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="filter">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control mb-2">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                >
                  Login
                </Button>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_outline_primary"
                  ghost
                  block
                  onClick={showLoginMobileModal}
                >
                  Login with OTP
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Login with OTP Modal */}
      <Modal
        open={isLoginMobileModalOpen}
        onOk={handleLoginMobileOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login with OTP</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter Mobile Number" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={showLoginMobileOtpModal}
                >
                  Send OTP
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      <Modal
        open={isLoginMobileOtpModalOpen}
        onOk={handleLoginMobileOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Login with OTP</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={handleLoginMobileOtpOk}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={isRegisterModalOpen}
        onOk={handleRegisterOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
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
                  onClick={showVerifyEmailOtpModal}
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Verify Email OTP */}
      <Modal
        open={isVerifyEmailOtpModalOpen}
        onOk={handleVerifyEmailOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Verify Email ID</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={showVerifyMobileOtpModal}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>

      {/* Verify Mobile OTP */}
      <Modal
        open={isVerifyMobileOtpModalOpen}
        onOk={handleVerifyMobileOtpOk}
        closable={false}
        footer={null}
        className="auth_modal"
        width={420}
      >
        <div className="modal_header">
          <img src={LogoLight} alt="modal-logo" height={40} />
          <div className="title">Verify Mobile Number</div>
        </div>
        <div className="modal_body">
          <Form layout="vertical" name="mobile">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item className="form_control">
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  className="btn_primary mb-2 mb-lg-2"
                  block
                  onClick={handleVerifyMobileOtpOk}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ActionButton;
