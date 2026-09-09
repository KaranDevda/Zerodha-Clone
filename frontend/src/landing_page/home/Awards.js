import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul> 
                        <li>
                            <p>Future & Options</p>
                        </li>
                        <li>
                            <p>Commodities Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                    <ul> 
                        <li>
                            <p>Stock & IPO's</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bond and Govt. Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <img src='/images/pressLogos.png' style={{width: "80%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;