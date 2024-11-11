import { Button, Card, Col, Form, Row, Select } from "antd";

const FilterForm = ({ showLoginModal }) => {
 const { Option } = Select;

  return (
    <div className="filter">
      <Card>
        <Form
          layout="vertical"
          name="filter"
          initialValues={{
            remember: true,
          }}>
          <Row align="bottom" gutter={16}>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Form.Item label="I’m looking for a" className="form_control">
                <Select placeholder="Mehndi Artist" className="w-100">
                  <Option value="one">Mehndi Artist</Option>
                  <Option value="two">Photographers</Option>
                  <Option value="three">Marriage Halls</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 5 }}>
              <div className="aged_filter">
                <div className="w-100">
                  <Form.Item label="Location" className="form_control">
                    <Select placeholder="Chennai">
                      <Option value="one">Chennai</Option>
                      <Option value="two">Two</Option>
                      <Option value="three">Three</Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 5 }}>
              <Form.Item label="Mehndi Budget" className="form_control">
                <Select placeholder="Select" className="w-100">
                  <Option value="one">Less then ₹ 5,000</Option>
                  <Option value="two">₹ 5000 to ₹ 10,000</Option>
                  <Option value="three">Three</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 5 }}>
              <Form.Item label="Locality" className="form_control">
                <Select placeholder="Adyar" className="w-100">
                  <Option value="one">Adyar</Option>
                  <Option value="two">Two</Option>
                  <Option value="three">Three</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 3 }}>
              <Form.Item className="form_control">
                <Button
                  type="primary"
                  block
                  className="btn_primary"
                  onClick={showLoginModal}>
                  Let’s Begin
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default FilterForm;
