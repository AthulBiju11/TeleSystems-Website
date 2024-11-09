import "./promoSectionLarge.scss";

const promoSectionLarge = () => {

  return (
    <div className="promo-container">
      <div className="promo-image">
        <div className="promo-text">
          <div className="welcome">Welcome to Tele Systems</div>
          <div className="description">
            Your trusted source for all telecom needs!
          </div>
          <div className="products-button">
            <nav>
              <a href="/products/"><button>View All Products</button></a>
            </nav> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default promoSectionLarge;
