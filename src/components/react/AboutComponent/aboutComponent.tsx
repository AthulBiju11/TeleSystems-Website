import "./aboutComponent.scss";

const AboutComponent = () => {
  return (
    <div className="about-section-container">
      <div className="item1-container">
        <div className="item1-title">Our History</div>
        <div className="item1-description">
          <div className="item1-main-title">Our History</div>
          <div className="item1-main-description">
            Established in 1995 Tele Systems Telephone Shop was as a distributor
            and service center for TATAFONE. Since then at various times, we
            have been major distributors and service center for BPL Phones,
            Lextel/Lexstar Phones and Panasonic Land Line Telephone Instruments
          </div>
        </div>
      </div>

      <div className="item2-container">
        <div className="item2-title">Our Products</div>
        <div className="item2-description">
          <div className="item2-main-title">Our Products</div>
          <div className="item2-main-description">
          We exclusively offer a wide selection of Land LIne Telephone Instruments , from Basic Phones and Caller ID/ Speaker Phones to Cordless telephoness and smart home devices  like door phones etc. Our products / Brands are carefully selected to ensure that they meet our high standards for quality and performance.
          </div>
        </div>
      </div>
      
      <div className="item3-container">
        <div className="item3-title">Repairs and Service</div>
        <div className="item3-description">
          <div className="item3-main-title">Repairs and Service</div>
          <div className="item3-main-description">
          At Tele Systems Telephone Shop, we pride ourselves on providing exceptional customer service. We offer a range of services, including installation and setup, repair services, and technical support.  We have an exclusive well equipped service Center for the repairing of Land Line Telephone Instruments and we specialize in cordless phone repairs
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
