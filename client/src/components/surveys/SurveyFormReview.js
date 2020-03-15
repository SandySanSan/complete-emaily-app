/**
 * Shows users their form inputs for review
 */

import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, submitSurvey, formValues, history }) => {
    const submitAndRedirect = async formValues => {
        await submitSurvey(formValues);
        await history.push('/surveys');
    };

    const fieldsReview = FIELDS.map(({ name, label }) => (
        <div key={name}>
            <h5>{label}</h5>
            <p>{formValues[name]} </p>
            <div className='divider' />
        </div>
    ));
    return (
        <div>
            <h5 style={{ margin: '4.5rem 0' }}>Please confirm your entries</h5>
            <div
                className='container'
                style={{
                    height: '30rem',
                    padding: '15px',
                    margin: '3rem 0',
                }}>
                {fieldsReview}
            </div>
            <button
                className='btn-flat yellow accent-2 left black-text'
                type='submit'
                onClick={onCancel}>
                Edit survey
                <i className='material-icons left'>arrow_back</i>
            </button>
            <button
                className='btn-flat teal accent-2 right black-text'
                type='submit'
                onClick={() => submitAndRedirect(formValues)}>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview)); // withRouter passes the history object to the props
