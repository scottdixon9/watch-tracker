import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function PriceChart({ history }) {
  const data = {
    labels: history.map(p => p.date),
    datasets: [{
      label: 'Price History',
      data: history.map(p => p.price),
      fill: false,
      borderColor: '#4caf50',
      tension: 0.1
    }]
  };

  return (
    <div style={{ width: '100%', maxWidth: 600 }}>
      <Line data={data} />
    </div>
  );
}
