import React, { Component } from 'react';
import imgDashboard from '../img/dashboard-emaily.png';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div
                className='center-align'
                style={{ width: '100%', padding: '10px 0' }}>
                <img
                    src={imgDashboard}
                    className='responsive-img'
                    alt='Dashboard Emaily'
                />
                <h5 className='grey-text text-darken-2'>
                    Hi
                    <span
                        className='deep-purple-text text-accent-2'
                        style={{ margin: '0 10px' }}>
                        {auth && auth.name}
                    </span>
                    ! This is your dashboard.
                </h5>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;
