import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* Top Title */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-3 fs-5">
          List of all charges and taxes
        </h3>
      </div>

      {/* 3-Column Pricing Grid */}
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="/images/pricingEquity.svg" style={{ width: '70%' }} alt="Free equity delivery" />
          <h1 className="fs-3 mt-4">Free equity delivery</h1>
          <p className="text-muted mt-3" style={{ lineHeight: '1.8', fontSize: '15px' }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/images/intradayTrades.svg" style={{ width: '70%' }} alt="Intraday and F&O trades" />
          <h1 className="fs-3 mt-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3" style={{ lineHeight: '1.8', fontSize: '15px' }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on Options trades.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="images/pricingEquity.svg" style={{ width: '70%' }} alt="Free direct MF" />
          <h1 className="fs-3 mt-4">Free direct MF</h1>
          <p className="text-muted mt-3" style={{ lineHeight: '1.8', fontSize: '15px' }}>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;