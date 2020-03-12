/**
 * Shows users their form inputs for review
 */

import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5 style={{ margin: '4.5rem 0' }}>Please confirm your entries</h5>
            <div
                className='container'
                style={{
                    border: '1px solid lavender',
                    height: '30rem',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '3rem 0',
                }}>
                <h5>Survey title : </h5>
                <p>{formValues.title} </p>
                <div className='divider' />
                <h5>Email subject : </h5>
                <p>{formValues.subject} </p>
                <div className='divider' />
                <h5>Email body :</h5>
                <p>{formValues.body} </p>
                <div className='divider' />
                <h5>Recipients list : </h5>
                <p>{formValues.emails} </p>
            </div>
            <button
                className='btn-flat yellow accent-2 left black-text'
                type='submit'
                onClick={onCancel}>
                Edit survey
                <i className='material-icons left'>arrow_back</i>
            </button>
        </div>
    );
};
function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps)(SurveyFormReview);
