import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../API.utils';

import './Chart.css';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);
    if (!data) {
        return 'Loading..'
    }
    let { confirmed, deaths, recovered } = data;
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['#5fdde5', '#79d70f', '#d32626'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );
    const lineChart = (
        dailyData.length ? <Line data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
                data: dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#5fdde5',
                fill: true,
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: '#d32626',
                backgroundColor: '#d32626',
                fill: true,
            }],

        }}
        /> : null
    );
    return (
        <div className='chart-container'>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;