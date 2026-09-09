import React from 'react';

function Team() {
    return ( 
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center mt-5">People</h1>
            </div>

            <div 
                className="row p-5 text-muted" 
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-5 text-center">
                    <img 
                        src="/images/chinu.jpeg" 
                        alt="Karan Devda"
                        style={{ borderRadius: "100%", width: "60%" }} 
                    />
                    <h4 className="mt-5">Karan Devda</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Karan bootstrapped and founded Zerodha in 2026 to overcome the 
                        hurdles he faced during his decade long stint as a trader. Today, 
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee 
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing Football is his zen.</p>
                    <p>
                        Connect on <a href="." style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "none" }}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;