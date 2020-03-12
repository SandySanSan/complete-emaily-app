/**
 * Form for creating a survey
 */

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // allows reduxForm to communicate with the Redux store
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

// custom parameters of each field
const FIELDS = [
    {
        label: 'Survey title',
        name: 'title',
        errorMessage: 'You must provide a survey title.',
    },
    {
        label: 'Email subject',
        name: 'subject',
        errorMessage: 'You must provide a subject to your email.',
    },
    {
        label: 'Email body',
        name: 'body',
        errorMessage: 'You must provide content to your email.',
    },
    {
        label: 'Recipients list (emails separated with comma)',
        name: 'emails',
        errorMessage:
            'You must provide a list of recipients (at least one email)',
    },
];

class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {FIELDS.map(({ name, label }) => (
                    <Field
                        key={name}
                        type='text'
                        name={name}
                        component={SurveyField}
                        label={label}
                    />
                ))}
            </div>
        );
    }
    render() {
        return (
            <form
                // handleSubmit is provided by redux-form
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                style={{ marginTop: '3.5rem' }}>
                {this.renderFields()}
                <div style={{ marginTop: '3.5rem' }}>
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
    errors.emails = validateEmails(values.emails || '');
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
