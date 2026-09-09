import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col flex-center'>
                    <h1>Open a Zerodha Account</h1>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className = "p-3 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto"}}>Sign Up Now</button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;