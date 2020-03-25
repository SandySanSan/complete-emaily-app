import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import SurveyChart from './SurveyChart';
import Modal from './Modal';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    handleDelete = id => {
        this.props.deleteSurvey(id);
    };

    renderSurveys() {
        return (
            <div className='container'>
                <div className='row' style={{ width: '85%' }}>
                    {this.props.surveys.reverse().map(survey => (
                        <div
                            className='card col s12'
                            style={{ backgroundColor: '#fbe2ae' }}
                            key={survey._id}>
                            <div
                                className='row'
                                style={{
                                    padding: '10px',
                                    backgroundColor: '#f3b988',
                                }}>
                                <div className='col s12 m6'>
                                    <label className='yellow-text text-darken-4'>
                                        Survey title
                                    </label>
                                    <h4 style={{ color: '#d37b3a' }}>
                                        {survey.title}
                                    </h4>
                                </div>
                                <div className='col s12 m6'>
                                    <Modal
                                        title={survey.title}
                                        dateSent={survey.dateSent}
                                        handleDelete={this.handleDelete}
                                        id={survey._id}
                                    />
                                </div>
                            </div>
                            <div className='card-content col s12 l8 left'>
                                <div
                                    className='row'
                                    style={{ color: '#d37b3a' }}>
                                    <label className='yellow-text text-darken-4'>
                                        Survey content
                                    </label>
                                    <h5>{survey.body}</h5>
                                </div>
                                <div
                                    className='row'
                                    style={{
                                        color: '#d37b3a',
                                        marginBottom: '2px',
                                        paddingTop: '10px',
                                        borderTop: '1px solid burlywood',
                                    }}>
                                    <p>
                                        Sent on :{' '}
                                        {new Date(
                                            survey.dateSent
                                        ).toLocaleDateString()}
                                    </p>
                                    {survey.lastResponded && (
                                        <p>
                                            Last responded :{' '}
                                            {new Date(
                                                survey.lastResponded
                                            ).toLocaleDateString()}
                                        </p>
                                    )}
                                    {(survey.yes > 0 || survey.no > 0) && (
                                        <p>
                                            Total feedbacks :{' '}
                                            {survey.yes + survey.no}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div
                                className='right col s12 l4 center-align'
                                style={{ padding: '30px' }}>
                                <SurveyChart yes={survey.yes} no={survey.no} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.renderSurveys()}</div>;
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
    SurveyList
);
