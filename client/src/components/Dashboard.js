import React, { Component } from 'react';
import imgDashboard from '../img/dashboard-emaily.png';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { auth } = this.props;
        console.log();
        return (
            <div
                className='center-align'
                style={{ width: '100%', padding: '10px 0' }}>
                <img
                    src={imgDashboard}
                    className='responsive-img'
                    alt='Dashboard Emaily'
                />
                <h5>Hi {auth && auth.name}! This is your dashboard.</h5>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;
