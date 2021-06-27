import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            title: {
                display: true,
                text: 'Total Spending'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Days'
            }
        },
    },
};

const LineChart = () => (
    <>
        <Line
            type="line"
            data={data}
            width={10}
            height={10}
            options={options}
        />
    </>
);

export default LineChart;