import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeBilling from './StripeBilling';

import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends Component {
    componentDidMount() {
        var elem = document.querySelector('.sidenav');
        M.Sidenav.init(elem, {
            edge: 'left',
            inDuration: 250,
        });
    }

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
                                <i className='material-icons right'>
                                    power_settings_new
                                </i>
                                Logout
                            </a>
                        </li>
                    </Fragment>
                );
        }
    }

    renderMobileContent() {
        const { auth } = this.props;

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
                                fontSize: '1.1rem',
                            }}
                            className='white-text center'>
                            CREDITS : {auth.credits}
                        </li>
                        <li className='center'>
                            <StripeBilling />
                        </li>
                        <li
                            style={{
                                bottom: '5rem',
                                position: 'absolute',
                                width: '100%',
                            }}>
                            <a
                                href='/api/logout'
                                className='btn-flat indigo lighten-2 white-text center'>
                                <i className='material-icons left'>
                                    power_settings_new
                                </i>
                                Logout
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
                            className='brand-logo teal-text text-darken-3'
                            style={{ marginLeft: '0.8vw' }}>
                            Emaily
                        </Link>
                        <a
                            href='#'
                            data-target='mobile'
                            className='sidenav-trigger'>
                            <i className='material-icons'>menu</i>
                        </a>
                        <ul className='right hide-on-med-and-down'>
                            {this.renderContent()}
                        </ul>
                        <ul className='sidenav teal lighten-2 left' id='mobile'>
                            {this.renderMobileContent()}
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
