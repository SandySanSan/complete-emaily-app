/**
 * Renders a single label and text
 */

import React from 'react';

const SurveyField = ({ input, type, label, meta: { error, touched } }) => {
    return (
        <div style={{ height: '8rem' }}>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div
                style={{ marginTop: 0, fontSize: '0.9rem' }}
                className='red-text'>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;
