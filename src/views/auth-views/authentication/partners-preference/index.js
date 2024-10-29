import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Select,
} from "antd";
import LoveImg from "../../../../assets/vivaahaa/love_img.svg";
import { Link } from "react-router-dom";

const PartnersPreference = () => {
  const { Option } = Select;

  return (
    <>
      {/* Partners Preference Details */}
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
                        <div className="title">Partner’s Preference</div>
                        <div className="complete_text">
                          You have completed <span>90%</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <div className="d-flex w-100 align-items-end mb-3">
                        <div className="w-100">
                          <Form.Item
                            label="Age Range"
                            className="form_control mb-0"
                          >
                            <Select placeholder="Min">
                              <Option value="one">One</Option>
                              <Option value="two">Two</Option>
                              <Option value="three">Three</Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div className="text-gray-light pl-2 pr-2 mb-2">To</div>
                        <div className="w-100">
                          <Form.Item className="form_control mb-0">
                            <Select placeholder="Max">
                              <Option value="one">One</Option>
                              <Option value="two">Two</Option>
                              <Option value="three">Three</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </Col>
                    <Col span={24} lg={12}>
                      <div className="d-flex w-100 align-items-end mb-3">
                        <div className="w-100">
                          <Form.Item
                            label="Height Range"
                            className="form_control mb-0"
                          >
                            <Select placeholder="Min">
                              <Option value="one">One</Option>
                              <Option value="two">Two</Option>
                              <Option value="three">Three</Option>
                            </Select>
                          </Form.Item>
                        </div>
                        <div className="text-gray-light pl-2 pr-2 mb-2">To</div>
                        <div className="w-100">
                          <Form.Item className="form_control mb-0">
                            <Select placeholder="Max">
                              <Option value="one">One</Option>
                              <Option value="two">Two</Option>
                              <Option value="three">Three</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Body Type"
                        className="form_control mb-3"
                      >
                        <Radio.Group
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
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Marital Status"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        > 
                          <Radio.Button value="a">Unmarried</Radio.Button>
                          <Radio.Button value="b">Widowed</Radio.Button>
                          <Radio.Button value="c">Divorce</Radio.Button>
                          <Radio.Button value="d">Awaiting</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Complexion"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Fair</Radio.Button>
                          <Radio.Button value="b">Wheatish</Radio.Button>
                          <Radio.Button value="c">Dark</Radio.Button>
                          <Radio.Button value="d">etc.</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Hair Colour"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Black</Radio.Button>
                          <Radio.Button value="b">Brown</Radio.Button>
                          <Radio.Button value="c">Blonde</Radio.Button>
                          <Radio.Button value="d">Red</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Hair Length and Style"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Short</Radio.Button>
                          <Radio.Button value="b">Long</Radio.Button>
                          <Radio.Button value="c">Curly</Radio.Button>
                          <Radio.Button value="d">Straight</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Eye Color"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Short</Radio.Button>
                          <Radio.Button value="b">Long</Radio.Button>
                          <Radio.Button value="c">Curly</Radio.Button>
                          <Radio.Button value="d">Straight</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Tattoos or Piercings"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Yes</Radio.Button>
                          <Radio.Button value="b">No</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Physical Disabilities or Health Conditions"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Yes</Radio.Button>
                          <Radio.Button value="b">No</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Professional Preference</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Education Level"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Occupation"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Employed in"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Annual Income"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Religion Preference</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Religious"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Mother Tongue"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Caste" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Location Preference</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={12}>
                      <Form.Item label="Country" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="State" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="City" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Family Preference</div>
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
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Family Status"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Family Values"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Family Occupation"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Brothers" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item label="Sisters" className="form_control mb-3">
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Horoscope</div>
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
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Manglik Status"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Birth Time"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={12}>
                      <Form.Item
                        label="Sun Sign Compatibility"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <div className="card_head">
                        <div className="title">Lifestyle Preference</div>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24} lg={24}>
                      <Form.Item label="Hobbies" className="form_control mb-3">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item label="Interest" className="form_control mb-3">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Eating Habit"
                        className="form_control mb-3"
                      >
                        {" "}
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Veg</Radio.Button>
                          <Radio.Button value="b">Non-Veg</Radio.Button>
                          <Radio.Button value="c">Vegan</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Smoking Habit"
                        className="form_control mb-3"
                      >
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Yes</Radio.Button>
                          <Radio.Button value="b">No</Radio.Button>
                          <Radio.Button value="c">Occasionally</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Drinking Habit"
                        className="form_control mb-3"
                      >
                        {" "}
                        <Radio.Group
                          buttonStyle="solid"
                          className="custom_radio"
                        >
                          <Radio.Button value="a">Yes</Radio.Button>
                          <Radio.Button value="b">No</Radio.Button>
                          <Radio.Button value="c">Occasionally</Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={24} lg={24}>
                      <Form.Item
                        label="Languages"
                        className="form_control mb-3"
                      >
                        <Select placeholder="Select">
                          <Option value="one">One</Option>
                          <Option value="two">Two</Option>
                          <Option value="three">Three</Option>
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
                      <Link to="/auth/profile-list">
                        <Button type="primary" className="btn_primary" block>
                          Set Preference
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

export default PartnersPreference;
