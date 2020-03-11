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
                            className='deep-purple-text text-lighten-5'>
                            CREDITS : {auth.credits}
                        </li>
                        <li>
                            <StripeBilling />
                        </li>
                        <li>
                            <a
                                href='/api/logout'
                                className='btn-small deep-purple accent-2'>
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
                <div className='nav-wrapper deep-purple accent-3'>
                    <div className='container'>
                        <Link
                            to={auth ? '/surveys' : '/'}
                            className='brand-logo left deep-purple-text text-lighten-5'
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
