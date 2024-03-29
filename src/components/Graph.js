import React, { useEffect } from 'react';
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
import axios from 'axios';
import { useState } from 'react';

const Graph = () => {
    const [populationData, setPopulationData] = useState([]);
    ChartJS.defaults.color = '#fff';
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [stepSize, setStepSize] = useState(0);

    useEffect(() => {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => {
                const sortedData = res.data.data.sort((a, b) => a.Year - b.Year);
                setPopulationData(sortedData);
                const populationValues = sortedData.map(i => i.Population);
                setMin(Math.min(...populationValues));
                setMax(Math.max(...populationValues));
                setStepSize(Math.round((max - min) / (sortedData.length)));
            })
            .catch(err => console.log(err))
    }, [])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = populationData.map(i => i.Year);
    const data = {
        labels,
        datasets: [
            {
                label: `Population in United States`,
                data: populationData.map((i) => i.Population),
                backgroundColor: '#0da37f',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Population Graph',
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Population',
                },
                min: min - 1000000,
                max: max,
                ticks: {
                    stepSize: stepSize,
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
                reversed: true,
            }
        },
    };

    return (
        <>
            {populationData.length > 0 && <Bar options={options} data={data} />}
        </>
    )
}

export default Graph