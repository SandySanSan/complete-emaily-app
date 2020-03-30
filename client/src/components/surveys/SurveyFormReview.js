/**
 * Shows users their form inputs for review
 */

import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './notifications.css';

import * as actions from '../../actions';

const SurveyFormReview = ({
    onCancel,
    submitSurvey,
    formValues,
    history,
    auth,
    isSubmit,
    toggleIsSubmit,
}) => {
    const submitAndRedirect = async formValues => {
        try {
            await submitSurvey(formValues);
            await toggleIsSubmit();
            notifySuccess();
            setTimeout(redirect, 3000);
        } catch (err) {
            return notifyError(err.response.data.error);
        }
    };
    const redirect = () => {
        history.push('/surveys');
    };

    const notifySuccess = () => {
        toast.success('Success. Survey created and sent!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'teal-text text-darken-4 notifications',
        });
    };

    const notifyError = err => {
        toast.error(err, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: 'grey-text text-darken-3 notifications',
        });
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
            <ToastContainer
                position='bottom-right'
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <ToastContainer />
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
                className={`btn-flat yellow accent-2 left black-text ${isSubmit &&
                    'disabled'}`}
                type='submit'
                onClick={onCancel}>
                Edit survey
                <i className='material-icons left'>arrow_back</i>
            </button>
            <button
                className={`btn-flat teal accent-2 right black-text ${isSubmit &&
                    'disabled'}`}
                type='submit'
                onClick={() => submitAndRedirect(formValues)}>
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};
function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values,
        auth: state.auth,
    };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview)); // withRouter passes the history object to the props
