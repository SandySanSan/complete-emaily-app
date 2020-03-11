/**
 * Form for creating a survey
 */

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // allows reduxForm to communicate with the Redux store
import SurveyField from './SurveyField';

// custom parameters of each field
const FIELDS = [
    { label: 'Survey title', name: 'title' },
    { label: 'Email subject', name: 'subject' },
    { label: 'Email body', name: 'body' },
    { label: 'Recipients list', name: 'emails' },
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
            <div className='container'>
                <form
                    // handleSubmit is provided by redux-form
                    onSubmit={this.props.handleSubmit(values =>
                        console.log(values)
                    )}
                    style={{ marginTop: '2.5rem' }}>
                    {this.renderFields()}
                    <button
                        className='btn waves-effect waves-light'
                        type='submit'>
                        Submit
                        <i className='material-icons right'>send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm',
})(SurveyForm);
