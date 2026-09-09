import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 border-top pt-5">
      <div className="row align-items-center">
        {/* Left Column: Image */}
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right Column: Content */}
        <div className="col-6 p-5">
          <h1 className="fw-normal mb-4">{productName}</h1>
          <p className="text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "16px" }}>
            {productDescription}
          </p>

          <div className="mb-4 fs-6">
            {tryDemo && (
              <a href={tryDemo} style={{ textDecoration: 'none', marginRight: '50px' }}>
                Try demo <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: 'none' }}>
                Learn more <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {!tryDemo && !learnMore && (
              <a href="#" style={{ textDecoration: 'none' }}>
                {productName} <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>

          <div>
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: '20px' }}>
              <img src="/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;