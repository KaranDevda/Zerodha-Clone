import React from "react";

function CreateTicket() {
  return (
    <div className="container my-5 text-muted">
      <p className="fs-5 text-dark mb-5">To create a ticket, select a relevant topic</p>
      
      <div className="row g-4 mb-5" style={{ fontSize: "14px", lineHeight: "2" }}>
        {/* Account Opening */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-solid fa-circle-plus me-2"></i> Account Opening
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">Getting started</a>
            <a href="#" className="text-primary text-decoration-none">Online</a>
            <a href="#" className="text-primary text-decoration-none">Offline</a>
            <a href="#" className="text-primary text-decoration-none">Charges</a>
            <a href="#" className="text-primary text-decoration-none">Company, Partnership and HUF</a>
            <a href="#" className="text-primary text-decoration-none">Non Resident Indian (NRI)</a>
          </div>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-regular fa-user me-2"></i> Your Zerodha Account
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">Login credentials</a>
            <a href="#" className="text-primary text-decoration-none">Your Profile</a>
            <a href="#" className="text-primary text-decoration-none">Account modification and segment addition</a>
            <a href="#" className="text-primary text-decoration-none">CMR & DP ID</a>
            <a href="#" className="text-primary text-decoration-none">Nomination</a>
            <a href="#" className="text-primary text-decoration-none">Transfer and conversion of shares</a>
          </div>
        </div>

        {/* Trading and Markets */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-solid fa-chart-line me-2"></i> Trading and Markets
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">Trading FAQs</a>
            <a href="#" className="text-primary text-decoration-none">Kite</a>
            <a href="#" className="text-primary text-decoration-none">Margins</a>
            <a href="#" className="text-primary text-decoration-none">Product and order types</a>
            <a href="#" className="text-primary text-decoration-none">Corporate actions</a>
            <a href="#" className="text-primary text-decoration-none">Kite features</a>
          </div>
        </div>

        {/* Funds */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-regular fa-credit-card me-2"></i> Funds
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">Fund withdrawal</a>
            <a href="#" className="text-primary text-decoration-none">Adding funds</a>
            <a href="#" className="text-primary text-decoration-none">Adding bank accounts</a>
            <a href="#" className="text-primary text-decoration-none">eMandate</a>
          </div>
        </div>

        {/* Console */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-solid fa-circle-notch me-2"></i> Console
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">IPO</a>
            <a href="#" className="text-primary text-decoration-none">Portfolio</a>
            <a href="#" className="text-primary text-decoration-none">Funds statement</a>
            <a href="#" className="text-primary text-decoration-none">Profile</a>
            <a href="#" className="text-primary text-decoration-none">Reports</a>
            <a href="#" className="text-primary text-decoration-none">Referral program</a>
          </div>
        </div>

        {/* Coin */}
        <div className="col-md-4">
          <h4 className="fs-5 text-dark mb-3">
            <i className="fa-solid fa-coins me-2"></i> Coin
          </h4>
          <div className="d-flex flex-column">
            <a href="#" className="text-primary text-decoration-none">Understanding mutual funds</a>
            <a href="#" className="text-primary text-decoration-none">Coin app</a>
            <a href="#" className="text-primary text-decoration-none">Coin web</a>
            <a href="#" className="text-primary text-decoration-none">Transactions and reports</a>
            <a href="#" className="text-primary text-decoration-none">National Pension Scheme (NPS)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;