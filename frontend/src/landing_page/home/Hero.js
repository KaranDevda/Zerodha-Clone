import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col flex-center'>
                    <img src='/images/homeHero.png' alt='Home Hero' className='mb-5' style={{width:"100%"}}/>
                    <h1>Invest in everything</h1>
                    <p>Online Platform to invest in Stock, Derivatives, Mutual Funds and more</p>
                    <button className = "p-3 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto"}}>SignUp</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;