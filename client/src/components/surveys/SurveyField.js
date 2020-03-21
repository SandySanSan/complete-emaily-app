/**
 * Renders a single label and text
 */

import React from 'react';

const SurveyField = ({ input, type, label, meta: { error, touched } }) => {
    return (
        <div style={{ minHeight: '8rem' }}>
            <label>{label}</label>
            {type === 'textarea' ? (
                <div>
                    <textarea
                        {...input}
                        id='textarea1'
                        className='materialize-textarea'
                        style={{
                            minHeight: '10rem',
                            border: '1px solid whitesmoke',
                            padding: '10px',
                            margin: '15px 0',
                        }}></textarea>
                </div>
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
