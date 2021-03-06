import React from 'react';
import imgDashboard from '../img/dashboard-emaily2.png';
import SurveyList from './surveys/SurveyList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({ auth }) => {
    return (
        <div style={{ paddingBottom: '75px' }}>
            <div
                className='center-align'
                style={{
                    width: '100%',
                    padding: '10px 0',
                }}>
                <img
                    src={imgDashboard}
                    className='responsive-img'
                    alt='Dashboard Emaily'
                />
                <h5 className='grey-text text-darken-2'>
                    Hi
                    <span
                        className='teal-text text-lighten-2'
                        style={{ margin: '0 10px' }}>
                        {auth && auth.name}
                    </span>
                    ! This is your dashboard.
                </h5>
            </div>
            <SurveyList />
            {/* Add survey button */}
            <div className='fixed-action-btn'>
                <Link
                    to={'/surveys/new'}
                    className='btn-floating btn-large indigo lighten-2  white-text '>
                    <i className='large material-icons'>add</i>
                </Link>
            </div>
        </div>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);
