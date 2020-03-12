/**
 * SurveyNew shows SurveyForm and SurveyFormReview
 */

import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false };

    toggleShowFormReview() {
        this.setState(prevState => ({
            showFormReview: !prevState.showFormReview,
        }));
    }

    renderContent() {
        const { showFormReview } = this.state;
        return showFormReview ? (
            <SurveyFormReview onCancel={() => this.toggleShowFormReview()} />
        ) : (
            <SurveyForm onSurveySubmit={() => this.toggleShowFormReview()} />
        );
    }

    render() {
        return <div className='container'>{this.renderContent()}</div>;
    }
}

export default SurveyNew;
