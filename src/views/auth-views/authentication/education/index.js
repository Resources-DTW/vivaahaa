import { Button, Card, Col, Form, Image, Row, Select } from "antd";
import LoveImg from "../../../../assets/vivaahaa/love_img.svg";
import { Link } from "react-router-dom";

const Education = () => {
  const { Option } = Select;

  return (
    <>
      {/* Education Details */}
      <section className="section pt-sm-5 common_register">
        <div className="container">
          <Row>
            <Col span={24} lg={12}>
              <div className="common_register_left">
                <h1 className="title">
                  There are thousand of success stories! Your could be next.
                </h1>
                <Image
                  src={LoveImg}
                  alt="love image"
                  preview={false}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col span={24} lg={12}>
              <Card>
                <Form layout="vertical" name="filter">
                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Education</div>
                        <div className="complete_text">
                          You have completed <span>40%</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Education"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Course" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Field of Study"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="College / University"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Occupation</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Employment Status"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Company" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Job Title"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Income Level"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Work Location"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Years of Experience"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col xs={{span: 12}} sm={{span: 24}} lg={12}>
                      <Button
                        type="primary"
                        className="btn_outline_primary"
                        block
                        ghost
                      >
                        Save as draft
                      </Button>
                    </Col>
                    <Col xs={{span: 12}} sm={{span: 24}} lg={12}>
                      <Link to="/auth/family-details">
                        <Button type="primary" className="btn_primary" block>
                          Continue
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Education;
