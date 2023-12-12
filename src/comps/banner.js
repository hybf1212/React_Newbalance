import React from 'react';

const Banner = () => {
    return(
        <div id='main-banner'>
            <div className='main-banner-background' style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/nb-banner-img.webp'})`}}>
                <div className='main-banner-wrap d-flex justify-content-center align-items-center'>
                    <p className='main-banner-text text-center'>we<br></br>got<br></br>now</p>
                </div>                
            </div>
            
        </div>
    )
}

export default Banner;