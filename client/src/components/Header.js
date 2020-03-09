import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeBilling from './StripeBilling';

class Header extends Component {
    renderContent() {
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
                        <li>
                            <StripeBilling />
                        </li>
                        <li style={{ margin: '0 10px' }}>
                            Credits : {auth.credits}
                        </li>
                        <li>
                            <a href='/api/logout'>Logout</a>
                        </li>
                    </Fragment>
                );
        }
    }

    render() {
        const { auth } = this.props;
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link
                        to={auth ? '/surveys' : '/'}
                        className='brand-logo left'
                        style={{ marginLeft: '11px' }}>
                        eMaily
                    </Link>
                    <ul id='nav-mobile' className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
// destructuring state.auth
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);
