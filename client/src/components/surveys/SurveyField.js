/**
 * Renders a single label and text
 */

import React from 'react';

const SurveyField = ({ input, type, label, meta: { error, touched } }) => {
    return (
        <div style={{ minHeight: '8rem' }}>
            <label>{label}</label>
            {type === 'textarea' ? (
                <textarea
                    {...input}
                    id='textarea1'
                    className='materialize-textarea'
                    style={{ rows: 5 }}></textarea>
            ) : (
                <input {...input} style={{ marginBottom: '5px' }} />
            )}
            <div
                style={{ marginTop: 0, fontSize: '0.9rem' }}
                className='red-text'>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;
