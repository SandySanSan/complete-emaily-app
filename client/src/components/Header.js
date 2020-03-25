import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeBilling from './StripeBilling';

class Header extends Component {
    renderContent() {
        const { auth } = this.props;

        /**
         * Conditionnal rendering depending on user's authentication
         */

        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href='/auth/google'>Login with Google</a>
                    </li>
                );
            default:
                return (
                    <Fragment>
                        <li
                            style={{
                                margin: '0 10px',
                                fontSize: '1.1rem',
                                marginRight: '2.5rem',
                            }}
                            className='white-text'>
                            CREDITS : {auth.credits}
                        </li>
                        <li>
                            <StripeBilling />
                        </li>
                        <li>
                            <a
                                href='/api/logout'
                                className='btn-flat indigo lighten-2 white-text'>
                                <i className='material-icons'>
                                    power_settings_new
                                </i>
                            </a>
                        </li>
                    </Fragment>
                );
        }
    }

    render() {
        const { auth } = this.props;
        return (
            <nav>
                <div className='nav-wrapper teal lighten-2'>
                    <div className='container'>
                        <Link
                            to={auth ? '/surveys' : '/'}
                            className='brand-logo left teal-text text-darken-3'
                            style={{ marginLeft: '0.8vw' }}>
                            Emaily
                        </Link>
                        <ul id='nav-mobile' className='right'>
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
// Destructuring state.auth
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);
