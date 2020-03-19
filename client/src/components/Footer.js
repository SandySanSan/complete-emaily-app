import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div
                className='footer-copyright deep-purple lighten-5 valign-wrapper'
                style={{
                    // bottom: 0,
                    // position: 'absolute',
                    height: '55px',
                }}>
                <div className='container center-align'>
                    <span className='grey-text text-darken-3'>
                        2020 Developped by Sandy Prolhac
                    </span>
                    <a
                        className='grey-text text-darken-3'
                        href='#!'
                        style={{ margin: '0 10px' }}>
                        - TEST EMAILY
                    </a>
                    <a
                        className='grey-text text-darken-3'
                        href='#!'
                        style={{ margin: '0 10px' }}>
                        - ABOUT EMAILY
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
