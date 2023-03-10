import React, { memo } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartView = memo(({ labels, dataset, legend }) => {
    const options = {
        indexAxis: 'x',
        responsive: true
    };

    const data = {
        labels: labels,
        datasets: [{
            label: legend,
            backgroundColor: '#0066ff44',
            borderColor: '#0066ff',
            borderWidth: 1,
            data: dataset,
        }]
    };

    return ((labels && dataset) && <Bar data={data} options={options} />)
});

BarChartView.defaultProps = {
    labels: [],
    dataset: [],
    legend: ''
}

export default BarChartView;