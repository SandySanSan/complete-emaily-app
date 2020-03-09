import React from 'react';
import imgLanding from '../img/emaily-home.png';

export default function Landing() {
    return (
        <div className='center-align'>
            <img
                src={imgLanding}
                alt='Emaily landing page'
                className='responsive-img'
                style={{ padding: '5px 0' }}
            />
            <h3>- Welcome to Emaily -</h3>
            <h5>Collect easily feedback from your users.</h5>
        </div>
    );
}
