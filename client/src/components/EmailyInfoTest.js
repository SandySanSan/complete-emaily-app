import React from 'react';
import imgStripe from '../../src/img/stripe.png';
const EmailyInfoTest = () => {
    return (
        <div className='container'>
            <div>
                <h4 style={{ padding: '25px' }} className='center'>
                    How to test Emaily?
                </h4>
                <div>
                    <ol
                        className='collection'
                        style={{ width: '75%', margin: 'auto' }}>
                        <li className='collection-item'>
                            Login with your Google account
                        </li>
                        <li className='collection-item'>
                            To send surveys, you need to add credits to your
                            account by clicking the button "ADD CREDITS". The
                            Stripe module (that allows secure payments) is here
                            in mode test. No real money is needed to test the
                            app.
                            <p>
                                Enter any email (it doesn't need to be real) and
                                the test number card : 4242 4242 4242 4242.
                            </p>
                            <img src={imgStripe} alt='Stripe module' />
                        </li>
                        <li className='collection-item'>
                            Click + at the right bottom of the screen and fill
                            the survey form. Provide valid email(s) in the
                            "Recipients" field to receive the survey. Your email
                            will never be used for any other goals.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default EmailyInfoTest;
