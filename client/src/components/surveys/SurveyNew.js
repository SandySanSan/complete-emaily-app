/**
 * SurveyNew shows SurveyForm and SurveyFormReview
 */

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false, isSubmit: false };

    toggleShowFormReview() {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview,
        }));
    }

    toggleIsSubmit() {
        this.setState(prevState => ({
            isSubmit: !prevState.isSubmit,
        }));
    }

    renderContent() {
        const { showFormReview } = this.state;
        return showFormReview ? (
            <SurveyFormReview
                onCancel={() => this.toggleShowFormReview()}
                toggleIsSubmit={() => this.toggleIsSubmit()}
                isSubmit={this.state.isSubmit}
            />
        ) : (
            <SurveyForm onSurveySubmit={() => this.toggleShowFormReview()} />
        );
    }

    render() {
        return <div className='container'>{this.renderContent()}</div>;
    }
}

export default reduxForm({
    form: 'surveyForm',
})(SurveyNew);
