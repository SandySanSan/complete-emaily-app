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
            <h3 className='grey-text text-darken-2'>
                - Welcome to{' '}
                <span className='deep-purple-text text-accent-2'>Emaily</span> -
            </h3>
            <h5 className='grey-text text-darken-2'>
                Create simple surveys and collect easily feedback from your
                users.
            </h5>
        </div>
    );
}
