import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
    axios.get(`${API_URL}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const totalCost = (stock.avg || 0) * (stock.qty || 0);
              const pnl = curValue - totalCost;

              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg ? stock.avg.toFixed(2) : "0.00"}</td>
                  <td>{stock.price ? stock.price.toFixed(2) : "0.00"}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {pnl >= 0 ? `+${pnl.toFixed(2)}` : pnl.toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net || "0.00%"}</td>
                  <td className={profClass}>{stock.day || "0.00%"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Holdings;