import React, { useState } from 'react';

function ChargesTable() {
  const [activeTab, setActiveTab] = useState('equity');

  return (
    <div className="container mt-5 text-muted" style={{ fontSize: '14px' }}>
      {/* 1. NAVIGATION TABS BAR */}
      <div className="d-flex justify-content-center border-bottom mb-5" style={{ borderColor: '#eee' }}>
        <button
          className="btn fs-4 me-5 pb-3 rounded-0 bg-transparent border-0"
          style={{ marginBottom: '-1px' }}
          onClick={() => setActiveTab('equity')}
        >
          <span
            style={{
              borderBottom: activeTab === 'equity' ? '2px solid #387ed1' : '2px solid transparent',
              color: activeTab === 'equity' ? '#424242' : '#387ed1',
              fontWeight: activeTab === 'equity' ? '500' : '400',
              paddingBottom: '12px',
            }}
          >
            Equity
          </span>
        </button>

        <button
          className="btn fs-4 me-5 pb-3 rounded-0 bg-transparent border-0"
          style={{ marginBottom: '-1px' }}
          onClick={() => setActiveTab('currency')}
        >
          <span
            style={{
              borderBottom: activeTab === 'currency' ? '2px solid #387ed1' : '2px solid transparent',
              color: activeTab === 'currency' ? '#424242' : '#387ed1',
              fontWeight: activeTab === 'currency' ? '500' : '400',
              paddingBottom: '12px',
            }}
          >
            Currency
          </span>
        </button>

        <button
          className="btn fs-4 pb-3 rounded-0 bg-transparent border-0"
          style={{ marginBottom: '-1px' }}
          onClick={() => setActiveTab('commodity')}
        >
          <span
            style={{
              borderBottom: activeTab === 'commodity' ? '2px solid #387ed1' : '2px solid transparent',
              color: activeTab === 'commodity' ? '#424242' : '#387ed1',
              fontWeight: activeTab === 'commodity' ? '500' : '400',
              paddingBottom: '12px',
            }}
          >
            Commodity
          </span>
        </button>
      </div>

      {/* EQUITY TAB TABLE */}
      {activeTab === 'equity' && (
        <div className="table-responsive">
          <table className="table border align-middle">
            <thead>
              <tr className="table-light text-center border-bottom">
                <th className="p-3"></th>
                <th className="p-3">Equity delivery</th>
                <th className="p-3">Equity intraday</th>
                <th className="p-3">F&O - Futures</th>
                <th className="p-3">F&O - Options</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr>
                <td className="fw-medium p-3">Brokerage</td>
                <td className="p-3">Zero Brokerage</td>
                <td className="p-3">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="p-3">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="p-3">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">STT/CTT</td>
                <td className="p-3">0.1% on buy & sell</td>
                <td className="p-3">0.025% on the sell side</td>
                <td className="p-3">0.05% on the sell side</td>
                <td className="p-3">
                  <ul className="ps-3 mb-0">
                    <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Transaction charges</td>
                <td className="p-3">NSE: 0.00307%<br />BSE: 0.00375%</td>
                <td className="p-3">NSE: 0.00307%<br />BSE: 0.00375%</td>
                <td className="p-3">NSE: 0.00183%<br />BSE: 0</td>
                <td className="p-3">NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">GST</td>
                <td className="p-3" colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">SEBI charges</td>
                <td className="p-3" colSpan="4">₹10 / crore</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Stamp charges</td>
                <td className="p-3">0.015% or ₹1500 / crore on buy side</td>
                <td className="p-3">0.003% or ₹300 / crore on buy side</td>
                <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                <td className="p-3">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* CURRENCY TAB TABLE */}
      {activeTab === 'currency' && (
        <div className="table-responsive">
          <table className="table border align-middle">
            <thead>
              <tr className="table-light text-center border-bottom">
                <th className="p-3" style={{ width: '20%' }}></th>
                <th className="p-3" style={{ width: '40%' }}>Currency futures</th>
                <th className="p-3" style={{ width: '40%' }}>Currency options</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr>
                <td className="fw-medium p-3">Brokerage</td>
                <td className="p-3">0.03% or ₹ 20/executed order whichever is lower</td>
                <td className="p-3">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">STT/CTT</td>
                <td className="p-3">No STT</td>
                <td className="p-3">No STT</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Transaction charges</td>
                <td className="p-3">NSE: 0.00035%<br />BSE: 0.00045%</td>
                <td className="p-3">NSE: 0.0311%<br />BSE: 0.001%</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">GST</td>
                <td className="p-3" colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">SEBI charges</td>
                <td className="p-3" colSpan="2">₹10 / crore</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Stamp charges</td>
                <td className="p-3">0.0001% or ₹10 / crore on buy side</td>
                <td className="p-3">0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* COMMODITY TAB TABLE */}
      {activeTab === 'commodity' && (
        <div className="table-responsive">
          <table className="table border align-middle">
            <thead>
              <tr className="table-light text-center border-bottom">
                <th className="p-3" style={{ width: '20%' }}></th>
                <th className="p-3" style={{ width: '40%' }}>Commodity futures</th>
                <th className="p-3" style={{ width: '40%' }}>Commodity options</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr>
                <td className="fw-medium p-3">Brokerage</td>
                <td className="p-3">0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="p-3">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">STT/CTT</td>
                <td className="p-3">0.01% on sell side (Non-Agri)</td>
                <td className="p-3">0.05% on sell side</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Transaction charges</td>
                <td className="p-3">MCX: 0.0021%<br />NSE: 0.0001%</td>
                <td className="p-3">MCX: 0.0418%<br />NSE: 0.001%</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">GST</td>
                <td className="p-3" colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">SEBI charges</td>
                <td className="p-3">Agri: ₹1 / crore<br />Non-agri: ₹10 / crore</td>
                <td className="p-3">₹10 / crore</td>
              </tr>
              <tr>
                <td className="fw-medium p-3">Stamp charges</td>
                <td className="p-3">0.002% or ₹200 / crore on buy side</td>
                <td className="p-3">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* CALCULATOR LINK */}
      <div className="text-center my-5">
        <a href="#" className="fs-5 text-primary text-decoration-none">
          Calculate your costs upfront using our brokerage calculator
        </a>
      </div>

      {/* 2. CHARGES FOR ACCOUNT OPENING */}
      <h3 className="fs-4 text-dark mb-4 mt-5">Charges for account opening</h3>
      <div className="table-responsive mb-5">
        <table className="table border align-middle">
          <thead>
            <tr className="table-light text-muted border-bottom">
              <th className="p-3 fw-normal" style={{ width: '60%' }}>Type of account</th>
              <th className="p-3 fw-normal" style={{ width: '40%' }}>Charges</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td className="p-3">Individual account</td>
              <td className="p-3"><span className="badge bg-success fw-normal px-2 py-1">FREE</span></td>
            </tr>
            <tr>
              <td className="p-3">Minor account</td>
              <td className="p-3"><span className="badge bg-success fw-normal px-2 py-1">FREE</span></td>
            </tr>
            <tr>
              <td className="p-3">NRI account</td>
              <td className="p-3">₹ 500</td>
            </tr>
            <tr>
              <td className="p-3">HUF account</td>
              <td className="p-3">
                <span className="badge bg-success fw-normal px-2 py-1 me-1">FREE</span> (online) / ₹ 500 (offline)
              </td>
            </tr>
            <tr>
              <td className="p-3">Partnership, LLP, and Corporate accounts (offline only)</td>
              <td className="p-3">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. DEMAT AMC */}
      <h3 className="fs-4 text-dark mb-4">Demat AMC (Annual Maintenance Charge)</h3>
      <div className="border-start border-3 border-primary ps-3 py-1 mb-4">
        <p className="mb-0 text-dark">Free for first year*</p>
      </div>
      <p className="small text-muted mb-3" style={{ fontSize: '12px' }}>
        From second year onwards, for BSDA accounts:
      </p>

      <div className="table-responsive mb-5">
        <table className="table border align-middle">
          <thead>
            <tr className="table-light text-muted border-bottom">
              <th className="p-3 fw-normal" style={{ width: '60%' }}>Value of holdings</th>
              <th className="p-3 fw-normal" style={{ width: '40%' }}>AMC</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td className="p-3">Up to ₹4 lakh</td>
              <td className="p-3"><span className="badge bg-success fw-normal px-2 py-1">FREE</span></td>
            </tr>
            <tr>
              <td className="p-3">₹4 lakh – ₹10 lakh</td>
              <td className="p-3">₹100 per year + 18% GST, charged quarterly</td>
            </tr>
            <tr>
              <td className="p-3">Above ₹10 lakh</td>
              <td className="p-3">₹300 per year + 18% GST, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p className="small text-muted" style={{ fontSize: '12px' }}>
          For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.<br />
          To learn more about BSDA, <a href="#" className="text-primary text-decoration-none">click here</a>. To learn more about AMC, <a href="#" className="text-primary text-decoration-none">click here</a>.<br />
          *Resident individual accounts only.
        </p>
      </div>

      {/* 4. CHARGES FOR OPTIONAL VALUE ADDED SERVICES */}
      <h3 className="fs-4 text-dark mb-4 mt-5">Charges for optional value added services</h3>
      <div className="table-responsive mb-5">
        <table className="table border align-middle">
          <thead>
            <tr className="table-light text-muted border-bottom">
              <th className="p-3 fw-normal" style={{ width: '30%' }}>Service</th>
              <th className="p-3 fw-normal" style={{ width: '30%' }}>Billing Frequency</th>
              <th className="p-3 fw-normal" style={{ width: '40%' }}>Charges</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td className="p-3">Tickertape</td>
              <td className="p-3">Monthly / Quarterly / Annual</td>
              <td className="p-3">Free: 0 | Pro: 249/699/2399</td>
            </tr>
            <tr>
              <td className="p-3">Smallcase</td>
              <td className="p-3">Per transaction</td>
              <td className="p-3">Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td className="p-3">Kite Connect</td>
              <td className="p-3">Monthly</td>
              <td className="p-3">Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. CHARGES EXPLAINED SECTION */}
      <h3 className="fs-4 text-dark mb-4 mt-5">Charges explained</h3>
      <div className="row g-4 mb-5" style={{ fontSize: '12px', lineHeight: '1.8' }}>
        <div className="col-md-6">
          <h5 className="fs-6 text-dark mb-2">Securities/Commodities transaction tax</h5>
          <p>
            Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
          </p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Transaction/Turnover Charges</h5>
          <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
          <p>
            BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
          </p>
          <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Call & trade</h5>
          <p>
            Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
          </p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Stamp charges</h5>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
          </p>

          <h5 className="fs-6 text-dark mb-2 mt-4">NRI brokerage charges</h5>
          <ul className="ps-3">
            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
          </ul>

          <h5 className="fs-6 text-dark mb-2 mt-4">Account with debit balance</h5>
          <p>Accounts with a debit balance will be charged an additional ₹20 per executed order.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
          <ul className="ps-3">
            <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
            <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
          </ul>

          <h5 className="fs-6 text-dark mb-2 mt-4">Margin Trading Facility (MTF)</h5>
          <ul className="ps-3">
            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
          </ul>
        </div>

        <div className="col-md-6">
          <h5 className="fs-6 text-dark mb-2">GST</h5>
          <p>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">SEBI Charges</h5>
          <p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">DP (Depository participant) charges</h5>
          <ul className="ps-3">
            <li>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</li>
            <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</li>
            <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
          </ul>

          <h5 className="fs-6 text-dark mb-2 mt-4">Pledging charges</h5>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">AMC (Account maintenance charges)</h5>
          <ul className="ps-3">
            <li>Free for the first year on all new resident individual accounts.</li>
            <li>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. <a href="#" className="text-primary text-decoration-none">Click here</a></li>
            <li>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). <a href="#" className="text-primary text-decoration-none">Click here</a></li>
          </ul>

          <h5 className="fs-6 text-dark mb-2 mt-4">Corporate action order charges</h5>
          <p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Off-market transfer charges</h5>
          <p>₹25 per transaction.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Physical CMR request</h5>
          <p>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Payment gateway charges</h5>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Delayed Payment Charges</h5>
          <p>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="#" className="text-primary text-decoration-none">Learn more.</a></p>

          <h5 className="fs-6 text-dark mb-2 mt-4">Trading using 3-in-1 account with block functionality</h5>
          <ul className="ps-3">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>

      {/* 6. DISCLAIMER SECTION */}
      <h3 className="fs-5 text-dark mb-3 mt-5">Disclaimer</h3>
      <p className="text-muted pb-5" style={{ fontSize: '12px', lineHeight: '1.8' }}>
        For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
      </p>
    </div>
  );
}

export default ChargesTable;