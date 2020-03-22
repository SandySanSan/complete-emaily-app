import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div
                className='footer-copyright grey darken-3 valign-wrapper'
                style={{
                    bottom: 0,
                    height: '35px',
                    width: '100%',
                    position: 'fixed',
                }}>
                <div className='container center-align grey-text'>
                    <span>2020, by Sandy Prolhac</span>
                    <a href='#!' style={{ margin: '0 10px' }}>
                        - TEST EMAILY
                    </a>
                    <a href='#!' style={{ margin: '0 10px' }}>
                        - ABOUT EMAILY
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
