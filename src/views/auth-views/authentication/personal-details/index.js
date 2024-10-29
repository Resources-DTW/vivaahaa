import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import LoveImg from "../../../../assets/vivaahaa/love_img.svg";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  const { Option } = Select;

  return (
    <>
      {/* Personal Details */}
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
                <Row>
                  <Col span={24}>
                    <div className="card_head">
                      <div className="title">Personal Details</div>
                      <div className="complete_text">
                        You have completed <span>10%</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Form layout="vertical" name="filter">
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="First Name"
                        className="form_control mb-3"
                      >
                        <Input placeholder="Idayathullah" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Last Name"
                        className="form_control mb-3"
                      >
                        <Input placeholder="G" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Email" className="form_control mb-3">
                        <Input placeholder="Idayathullah@gmail.com" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Mobile Number"
                        className="form_control mb-3"
                      >
                        <Input placeholder="+91 88888 55555" />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Date of Birth"
                        className="form_control mb-3"
                      >
                        <DatePicker
                          placeholder="DD/MM/YYYY"
                          className="w-100"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Gender" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">Male</Option>
                          <Option value="2">Female</Option>
                          <Option value="3">Other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Religion" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Caste" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="1">One</Option>
                          <Option value="2">Two</Option>
                          <Option value="3">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Marital Status"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          defaultValue="a"
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Single</Radio.Button>
                          <Radio.Button value="b">Divorced</Radio.Button>
                          <Radio.Button value="c">Widowed</Radio.Button>
                        </Radio.Group>
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
                      <Link to="/auth/education">
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

export default PersonalDetails;
