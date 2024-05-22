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
      {
        label: 'Long',
        data: long
      },
      {
        label: 'Short',
        data: short
      },
      {
        label: 'Total',
        data: total
      }
    ],
  };

  return <Line className="graph" data={data} />
}

export default Graph;
