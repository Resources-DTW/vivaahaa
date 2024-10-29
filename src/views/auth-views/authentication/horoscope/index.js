import { Button, Card, Col, Form, Image, Radio, Row, Select } from "antd";
import LoveImg from "../../../../assets/vivaahaa/love_img.svg";
import { Link } from "react-router-dom";

const Horoscope = () => {
  const { Option } = Select;

  return (
    <>
      {/* horoscope Details */}
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
                        <div className="title">Horoscope</div>
                        <div className="complete_text">
                          You have completed <span>80%</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Astrological Sign"
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
                        label="Manglik Status"
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
                        label="Birth Time"
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
                        label="Birth Place"
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
                        label="Sun Sign Compatibility"
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
                        <div className="title">Other Details</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item
                        label="Body Type"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          defaultValue="a"
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Slim</Radio.Button>
                          <Radio.Button value="b">Athletic</Radio.Button>
                          <Radio.Button value="c">Average</Radio.Button>
                          <Radio.Button value="d">Heavy</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Weight" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Height" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Disabilities"
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
                        label="Complexion"
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
                      <Link to="/auth/face-detection">
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

export default Horoscope;
