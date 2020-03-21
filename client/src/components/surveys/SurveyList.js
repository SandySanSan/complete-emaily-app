import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../../actions';
import SurveyChart from './SurveyChart';

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
                            className='card yellow darken-1 col s12'
                            key={survey._id}>
                            <div
                                className='row yellow darken-2'
                                style={{ padding: '10px' }}>
                                <div className='col s12 m6'>
                                    <label className='yellow-text text-darken-4'>
                                        Survey title
                                    </label>
                                    <h4>{survey.title}</h4>
                                </div>
                                <div className='col s12 m6'>
                                    <button
                                        className='right btn-small red darken-1'
                                        onClick={() =>
                                            this.handleDelete(survey._id)
                                        }>
                                        <i className='material-icons right'>
                                            delete_forever
                                        </i>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            <div className='card-content grey-text text-darken-3 col s12 l8'>
                                <p>{survey.body}</p>

                                <p className='left'>
                                    Sent on :
                                    {new Date(
                                        survey.dateSent
                                    ).toLocaleDateString()}
                                </p>
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
