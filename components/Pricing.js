const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">How it Works?</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <h2>Step 1</h2>
              <h2>Upload Selfie</h2>
              <div className="image-container">
                <img src="/images/step001.png" alt="Upload Selfie" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <h2>Step 2</h2>
              <h2>Wardrobe Creation</h2>
              <div className="image-container">
                <img src="/images/step002.png" alt="Wardrobe Creation" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <h2>Step 3</h2>
              <h2>Outfit Recommender</h2>
              <div className="image-container">
                <img src="/images/step003.png" alt=" Search outfits from closet or shop them" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
