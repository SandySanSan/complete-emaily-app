/**
 * Form for creating a survey
 */

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // allows reduxForm to communicate with the Redux store
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {FIELDS.map(({ name, label, type }) => (
                    <Field
                        key={name}
                        type={type}
                        name={name}
                        component={SurveyField}
                        label={label}
                    />
                ))}
            </div>
        );
    }
    render() {
        const { handleSubmit, onSurveySubmit } = this.props;
        return (
            <form
                // handleSubmit is provided by redux-form
                onSubmit={handleSubmit(onSurveySubmit)}
                style={{ marginTop: '3.5rem' }}>
                {this.renderFields()}
                <div style={{ marginTop: '2.5rem' }}>
                    <Link to='/surveys' className='red-text'>
                        Cancel
                    </Link>
                    <button
                        className='btn-flat teal accent-2 right black-text'
                        type='submit'>
                        Next
                        <i className='material-icons right'>done</i>
                    </button>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    FIELDS.forEach(({ name, errorMessage }) => {
        if (!values[name]) {
            errors[name] = errorMessage;
        }
    });

    return errors; // sent to Redux-Form
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false, // keeps values
})(SurveyForm);
