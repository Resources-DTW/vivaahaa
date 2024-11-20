import { Button } from "antd";
import {useState} from "react";
import ProfileDetailsCardModal from "./ProfileDetailsCardModal";

const VendorPackages = ({ heroImg , vendor  }) => {
  const [isDetailsCardModalOpen, setIsDetailsCardModalOpen] = useState(false);

  const showDetailsCardModal = () => {
    setIsDetailsCardModalOpen(true);
  };

  const handleDetailsCardCancel = () => {
    setIsDetailsCardModalOpen(false);
  };


  return (
    <div className="vendor_package">
      <div className="hero_img">
        <img src={heroImg} alt="error" />
      </div>
        <div className="main">
          <h3 className="package_name">Bridal Mehndi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Scelerisque est enim
            accumsan risus varius in arcu augue <span className="primary_text_gradient">Readmore</span>
          </p>
          <h3 className="primay_text_gradient money">₹ 5000</h3>
        </div>

        <div onClick={showDetailsCardModal}>
        <Button className="btn__outline">Enquiry Now</Button>
        </div>


        <ProfileDetailsCardModal
        isDetailsCardModalOpen={isDetailsCardModalOpen}
        handleDetailsCardCancel={handleDetailsCardCancel}
        showDetailsCardModal={showDetailsCardModal}
        vendor={vendor}
      />        
    </div>
  );
};

export default VendorPackages;
