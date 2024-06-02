import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export function Graph ({ labels, long, short, total }) {

  const data = {
    labels,
    datasets: [
      // {
      //   label: 'Long',
      //   data: long,
      //   borderColor: 'rgba(0, 255, 0, 0.2)',
      // },
      // {
      //   label: 'Short',
      //   data: short,
      //   borderColor: 'rgba(255, 0, 0, 0.2)',
      // },
      {
        data: total,
        borderColor: 'rgb(0, 120, 255)',
      },
    ],
  };

  const options = {
    pointRadius: 2,
    scales: {
      y: {
        title: {
          display: true,
          text: 'Return on Investment (%)',
          font: {
            size: 24,
          },
        },
        ticks: {
          callback: function(value, index, ticks) {
            return value + '%'
          }
        },
      },
      x: {
        title: {
          display: true,
          text: 'Change in Price of Underlying Asset (%)',
          font: {
            size: 24,
          },
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return <Line className="graph" data={data} options={options} />
}

export default Graph;