import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }
    renderSurveys() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.props.surveys.reverse().map(survey => (
                        <div className='col s12 m12 l6' key={survey._id}>
                            <div className='card yellow darken-1'>
                                <div className='card-content grey-text text-darken-3'>
                                    <span className='card-title'>
                                        {survey.title}
                                    </span>
                                    <p>{survey.body}</p>
                                    <p className='right'>
                                        Sent on :{' '}
                                        {new Date(
                                            survey.dateSent
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className='card-action'>
                                    <a>Yes : {survey.yes}</a>
                                    <a>No : {survey.no}</a>
                                </div>
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
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
