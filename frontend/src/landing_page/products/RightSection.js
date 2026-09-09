import React from 'react';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 border-top pt-5">
      <div className="row align-items-center">
        {/* Left Column: Content */}
        <div className="col-6 p-5">
          <h1 className="fw-normal mb-4">{productName}</h1>
          <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "16px" }}>
            {productDescription}
          </p>

          <div>
            <a href={learnMore} style={{ textDecoration: 'none' }}>
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-6 p-5 text-center">
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid"
            onError={(e) => {
              console.error(`Failed to load image at path: ${imageURL}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;