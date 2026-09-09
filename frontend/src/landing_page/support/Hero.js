import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1", color: "#fff" }}>
      <div className="p-5" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4 className="fs-5 fw-normal">Support Portal</h4>
          <a href="" className="text-white text-decoration-underline">Track tickets</a>
        </div>

        <div className="row p-3">
          <div className="col-md-7 pe-5">
            <h1 className="fs-3 fw-normal mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control p-3 border-0"
                placeholder="Eg: how do i activate F&O, why is my order rejected..."
                style={{ fontSize: "14px" }}
              />
            </div>
            <div className="d-flex flex-wrap gap-3 mt-3" style={{ fontSize: "14px" }}>
              <a href="" className="text-white text-decoration-underline">Track account opening</a>
              <a href="" className="text-white text-decoration-underline">Track segment activation</a>
              <a href="" className="text-white text-decoration-underline">Intraday margins</a>
              <a href="" className="text-white text-decoration-underline">Kite user manual</a>
            </div>
          </div>

          <div className="col-md-5 ps-4">
            <h1 className="fs-4 fw-normal mb-3">Featured</h1>
            <ol className="ps-3" style={{ lineHeight: "2.2", fontSize: "15px" }}>
              <li>
                <a href="" className="text-white text-decoration-underline">
                  Current Takeovers and Delisting - January 2026
                </a>
              </li>
              <li>
                <a href="" className="text-white text-decoration-underline">
                  Latest Intraday leverage - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;