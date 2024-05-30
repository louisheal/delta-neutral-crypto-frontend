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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../styles/Graph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
        label: 'Total',
        data: total,
        borderColor: 'rgb(0, 0, 255)',
      }
    ],
  };

  const options = {
    pointRadius: 2,
  }

  return <Line className="graph" data={data} options={options} />
}

export default Graph;
