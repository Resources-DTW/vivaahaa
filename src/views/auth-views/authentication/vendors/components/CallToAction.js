import { Row, Col, Button } from 'antd';
import LogoLight from "../../../../../assets/vivaahaa/logo_light.svg";

const CallToAction = ({ showLoginModal }) => {
  return (
    <section className="cta_section">
    <div className="container">
      <Row className="cta_box align-items-center">
        <Col span={24} lg={18}>
          <h4 className="title">
            Exclusive & Personalized Matchmaking by{" "}
            <span>Vivaahaa.com</span>
          </h4>
        </Col>
        <Col span={24} lg={6}>
          <div className="cta_action">
            <img src={LogoLight} alt="logo" className="cta_logo" />
            <div className="text-center">
              <Button type="primary" className="btn_primary" onClick={showLoginModal}>
                Register
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </section>
  )
}

export default CallToAction