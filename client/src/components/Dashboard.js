import React, { Component } from 'react';
import imgDashboard from '../img/dashboard-emaily.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div>
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
                            className='blue-text text-darken-2'
                            style={{ margin: '0 10px' }}>
                            {auth && auth.name}
                        </span>
                        ! This is your dashboard.
                    </h5>
                </div>
                {/* Add survey button */}
                <div class='fixed-action-btn'>
                    <Link
                        to={'/surveys/new'}
                        class='btn-floating btn-large red'
                        title='Add survey'>
                        <i class='large material-icons'>add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;
