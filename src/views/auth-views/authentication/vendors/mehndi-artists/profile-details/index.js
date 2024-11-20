import React, { useState } from "react";
import { vendorsDetails } from "constants/GeneralConstant";
import ProfileDetailsCard, {
  KeyPoint,
} from "../../components/ProfileDetailsCard";
import ReviewAndRating from "../../components/ReviewAndRating";
// import SliderExample from '../../components/SliderExample';
import VendorsCard from "../../components/VendorsCard";
import { Row, Grid, Col, Collapse, Image, Modal } from "antd";
import CallToAction from "../../components/CallToAction";
import FooterLinks from "../../components/FooterLinks";
import { DownOutlined } from "@ant-design/icons";
import VendorPackages from "../../components/VendorPackages";
import heroImg from "../../../../../../assets/vivaahaa/matched_2.png";
import LoveImg from "../../../../../../assets/vivaahaa/love_img.svg";
import darkLogo from "../../../../../../assets/vivaahaa/logo-dark.svg";
import EnquiryModal from "../../components/EnquiryModal";

const ProfileDetails = () => {
  const vendor = vendorsDetails[0];
  const vendorCardNum = 6;
  const [visibleVendors, setVisibleVendors] = useState(vendorCardNum + 6);
  // number of card in first section.
  const loadMoreVendors = () => {
    setVisibleVendors(vendorsDetails.length);
  };

  const screens = Grid.useBreakpoint();
  const CustomGutter = screens.xs ? [0, 30] : [30, 30];

  const { Panel } = Collapse;

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const showEnquiryModal = () => {
    setIsEnquiryModalOpen(true);
  };
  const handleEnquiryCancel = () => {
    setIsEnquiryModalOpen(false);
  };

  // Our Policies and Other Information
  const policies = {
    policies: [
      "50% Payment On Booking",
      "50% Payment On Date",
      "Cancellation Policy - If U R Cancel ,Inform Before 2 Days",
    ],
    otherInfo: [
      "Is Willing To Travel Other Indian Cities - No",
      "Lorem ipsum dolor sit amet consectetur.",
    ],
  };

  return (
    <div className="mehndiArtist_profileDetails">
      <section className="profile_card">
        <ProfileDetailsCard
          vendorsDetails={vendor}
          showModal={showEnquiryModal}
        />
      </section>

      <section className="package_section mt-3">
        <div className="container">
          <h2 className="heading">Our packages</h2>
          <Row gutter={{ xs: [20, 0], lg: 40 }}>
            <Col span={24} lg={14}>
              <div className="package_container">
                <VendorPackages heroImg={heroImg} vendor={vendor} />
              </div>
              <div className="package_container">
                <VendorPackages heroImg={heroImg} vendor={vendor} />
              </div>
              <div className="package_container">
                <VendorPackages heroImg={heroImg} vendor={vendor} />
              </div>
            </Col>
            <Col span={0} lg={10}>
              <div className="right_img">
                <h1 className="title">
                  There are thousand of success stories! Your could be next.
                </h1>
                <Image
                  src={LoveImg}
                  alt="love image"
                  preview={false}
                  className="img-fluid"
                />
                <Image
                  src={darkLogo}
                  alt="dark logo"
                  preview={false}
                  className="logo"
                />
              </div>
            </Col>
          </Row>
          <div className="border_bottom" />
        </div>
      </section>

      {/* Policies and Other Information */}
      <section className="policiesAnd_OtherInfo">
        <div className="container">
          <div className="first_col">
            <div className="policies">
              <h3>Policies</h3>
              {policies.policies.map((policy, index) => (
                <KeyPoint key={index} text={policy} />
              ))}
            </div>
            <div className="other-info">
              <h3>Other Information</h3>
              {policies.otherInfo.map((info, index) => (
                <KeyPoint key={index} text={info} />
              ))}
            </div>
          </div>
          <div className="divider" />
          <div className="last_col">
            <div className="policies">
              <h3>Policies</h3>
              {policies.policies.map((policy, index) => (
                <KeyPoint key={index} text={policy} />
              ))}
            </div>
            <div className="other-info">
              <h3>Other Information</h3>
              {policies.otherInfo.map((info, index) => (
                <KeyPoint key={index} text={info} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Over-view */}
      <section className="vendor_overView">
        <div className="container">
          <h3 className="vendor_name">
            About Rakesh Mehandi Art - Bridal Mehendi Artists, Anna Nagar,
            Chennai
          </h3>
          <div className="div_container">
            <div>
              <h4>
                Been on <span>Vivaahaa</span> Since
              </h4>
              <span>5 years 5 month</span>
            </div>
            <div>
              <h4>Bridal Mehndi Price</h4>
              <span>₹ 1,500</span>
            </div>
            <div>
              <h4>Experience</h4>
              <span>10 Years</span>
            </div>
            <div>
              <h4>Experience</h4>
              <span>10 Years</span>
            </div>
            <div>
              <h4>Experience</h4>
              <span>10 Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* User rating and reviews */}
      <section>
        <ReviewAndRating />
      </section>

      {/* similar vendors */}
      <section className="similarCard_section">
        <div className="container">
          <h2 className="heading">View Similar Mehndi Artists:</h2>
          <Row gutter={CustomGutter}>
            {vendorsDetails
              .slice(vendorCardNum, visibleVendors)
              .map((vendor) => (
                <VendorsCard key={vendor.vendorId} vendorDetails={vendor} />
              ))}
            <div className="d-flex justify-content-center w-100">
              {visibleVendors < vendorsDetails.length && (
                <button onClick={loadMoreVendors} className="btn__outline">
                  veiw all
                </button>
              )}
            </div>
          </Row>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section faq_section">
        <div className="container">
          <Row gutter={16} className="mb-3 text-center">
            <Col span={24}>
              <h2 className="common_heading">FAQs</h2>
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={{ span: 24 }} sm={{ span: 20 }}>
              <Collapse
                bord={false}
                defaultActiveKey={["1"]}
                accordion
                expandIcon={({ isActive }) => (
                  <DownOutlined rotate={isActive ? 0 : 180} />
                )}
                className="site-collapse-custom-collapse">
                <Panel
                  header="This is panel header 1"
                  key="1"
                  className="site-collapse-custom-panel">
                  <div className="text">
                    Vivaahaa.com is India's largest wedding venue discovery
                    platform from Matrimony.com group. Here you can find your
                    dream wedding venue across different cities and states in
                    India. Get all the venue information such as price &
                    availability at the click of a button. You can also register
                    with Mandap.com to get a free assisted venue discovery
                    service. A dedicated relationship manager will be assigned
                    to each customer to facilitate their requirements.
                  </div>
                </Panel>
                <Panel
                  header="This is panel header 2"
                  key="2"
                  className="site-collapse-custom-panel">
                  <p className="text">
                    A dog is a type of domesticated animal. Known for its
                    loyalty and faithfulness, it can be found as a welcome guest
                    in many households across the world.
                  </p>
                </Panel>
                <Panel
                  header="This is panel header 3"
                  key="3"
                  className="site-collapse-custom-panel">
                  <p className="text">
                    A dog is a type of domesticated animal. Known for its
                    loyalty and faithfulness, it can be found as a welcome guest
                    in many households across the world.
                  </p>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      {/* Footer */}
      <div className="add-mt">
        <FooterLinks />
      </div>

      <EnquiryModal
        isEnquiryModalOpen={isEnquiryModalOpen}
        handleEnquiryCancel={handleEnquiryCancel}
      />
    </div>
  );
};

export default ProfileDetails;
