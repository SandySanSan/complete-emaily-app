import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div
                className='footer-copyright grey darken-3 valign-wrapper'
                style={{
                    bottom: 0,
                    height: '50px',
                    width: '100%',
                    position: 'fixed',
                }}>
                <div className='container center-align grey-text'>
                    <span>2020 - Sandy Prolhac</span>
                    <Link
                        to={'/how-to-test-emaily'}
                        style={{ margin: '0 10px' }}
                        className='teal-text text-lighten-2'>
                        TEST EMAILY
                    </Link>
                    <Link
                        to={'/about-emaily'}
                        className='teal-text text-lighten-2'
                        style={{ margin: '0 10px' }}>
                        {' '}
                        ABOUT EMAILY
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
