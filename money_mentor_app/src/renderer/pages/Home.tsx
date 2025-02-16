import React from 'react';
import {
  FcBearish,
  FcBullish,
  FcBusinessman,
  FcDebt,
  FcMindMap,
  FcCalculator,
} from 'react-icons/fc';
import { FaRupeeSign, FaRegUserCircle } from 'react-icons/fa';
import { GiExpense } from 'react-icons/gi';
import { Link } from 'react-router-dom';
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
import { AuthContext } from '../AuthProvider';
import SideBar from '../components/SideBar';
import Base from '../components/Base';
import '../css/Home.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: ' Line Chart',
    // },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [-20, 183, 596, 669, -114, 53, -196],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [338, -20, -996, 669, -814, 753, -296],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Home = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <Base>
      <SideBar user={user} />
      <div className="dashboard">
        <div className="heading">
          <p>Dashboard</p>
        </div>
        <div className="dashboard-boxes">
          <div className="dashboard-box">
            <div>
              <FcBullish size={30} />
              <p className="dashboard-boxes-heading">Profit</p>
            </div>
            <p className="dashboard-boxes-bullish-amount mt-2 flex-1">
              <FaRupeeSign /> 90,300
            </p>
          </div>
          <div className="dashboard-box">
            <div>
              <FcBearish size={30} />
              <p className="dashboard-boxes-heading">Debt</p>
            </div>
            <p className="dashboard-boxes-bearish-amount mt-2  flex-1">
              <FaRupeeSign />
              377773
            </p>
          </div>
          <div className="dashboard-box">
            <div>
              <FcBullish size={30} />
              <p className="dashboard-boxes-heading">Profit</p>
            </div>
            <p className="dashboard-boxes-bullish-amount mt-2  flex-1">
              <FaRupeeSign />
              33773
            </p>
          </div>
        </div>
        <div className="container">
          <Line height={100} options={options} data={data} />
        </div>
      </div>
    </Base>
  );
};

export default Home;
