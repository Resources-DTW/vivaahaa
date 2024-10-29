import { Button, Card, Col, Form, Image, Row, Select } from "antd";
import LoveImg from "../../../../assets/vivaahaa/love_img.svg";
import { Link } from "react-router-dom";

const FamilyDetails = () => {
  const { Option } = Select;

  return (
    <>
      {/* Family Details */}
      <section className="section pt-sm-5 common_register">
        <div className="container p-0">
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
                        <div className="title">Family Details</div>
                        <div className="complete_text">
                          You have completed <span>60%</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Family Type"
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
                        label="Family Status"
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
                        label="Family Values"
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
                        label="Number of Siblings"
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
                        <div className="title">Address</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Residential Address"
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
                      <Form.Item label="Country" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="State" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="City" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Landmark" className="form_control mb-3">
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
                      <Link to="/auth/horoscope">
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

export default FamilyDetails;
