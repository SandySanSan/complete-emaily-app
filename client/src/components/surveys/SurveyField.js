/**
 * Renders a single label and text
 */

import React from 'react';

const SurveyField = ({ input, type, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    );
};

export default SurveyField;
