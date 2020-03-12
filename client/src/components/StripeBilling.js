import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripeBilling extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500} // Amount on cents
                token={token => this.props.handleStripeToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name='eMaily' // Title of pop-in
                description='Add credits to your account.' // Pop-in header subtitle
            >
                <button className='btn-flat pink accent-2 white-text'>
                    ADD CREDITS
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(StripeBilling);
