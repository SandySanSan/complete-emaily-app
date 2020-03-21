import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const SurveyChart = ({ yes, no }) => {
    const data = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                data: [yes, no],
                backgroundColor: ['#5babfe', '#ad6efe'],
                hoverBackgroundColor: ['#84c0ff', '#bf84fe'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            {yes || no ? (
                <Doughnut
                    data={data}
                    height={100}
                    legend={{ position: 'left' }}
                />
            ) : (
                <div className='yellow-text text-darken-3'>
                    <i className='material-icons'>not_interested</i>
                    <span>No feedback</span>
                </div>
            )}
        </div>
    );
};

export default SurveyChart;
