import React from 'react';

function Universe() {
  return (
    <div className="container mt-5 text-center">
      {/* Section Sub-banner */}
      <p className="text-center text-muted mb-5 fs-5">
        Want to know more about our technology stack? Check out the{' '}
        <a href="" style={{ textDecoration: 'none' }}>
          Zerodha.tech
        </a>{' '}
        blog.
      </p>

      {/* Main Heading */}
      <h1 className="fw-normal mt-5">The Zerodha Universe</h1>
      <p className="text-muted mt-3 mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Grid Row 1 */}
      <div className="row mt-5">
        <div className="col-4 p-4">
          <img src="/images/zerodhaFundhouse.png" style={{ width: '60%' }} alt="Zerodha Fund House" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/images/sensibullLogo.svg" style={{ width: '60%' }} alt="Sensibull" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/images/tijori.svg" style={{ width: '60%' }} alt="Tijori" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* Grid Row 2 */}
      <div className="row mt-4">
        <div className="col-4 p-4">
          <img src="/images/streakLogo.png" style={{ width: '50%' }} alt="Streak" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Systematic trading platform that allows you to create and backtest strategies without coding.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/images/smallcaseLogo.png" style={{ width: '60%' }} alt="smallcase" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/images/dittoLogo.png" style={{ width: '50%' }} alt="ditto" />
          <p className="text-muted text-small mt-3" style={{ fontSize: '13px' }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      {/* Signup Button */}
      <button
        className="p-2 btn btn-primary fs-5 fw-medium mb-5 mt-4"
        style={{ width: '20%', margin: '0 auto' }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;