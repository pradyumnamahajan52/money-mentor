import React from 'react';
import {
  FcBearish,
  FcBullish,
  FcBusinessman,
  FcDebt,
  FcMindMap,
  FcCalculator,
  FcDonate,
} from 'react-icons/fc';
import { FaRupeeSign, FaRegUserCircle, FaArrowLeft } from 'react-icons/fa';
import { GiExpense } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = ({ user }) => {
  return (
    <div className="left-page">
      <div style={{ textDecoration: 'none ' }}>
        <div className="profile-box">
          <div className="option">
            <FaRegUserCircle size={50} />
            <br />
            &nbsp;
            <span className="mt-1">
              Welcome, {user.user?.first_name}&nbsp;{user.user?.last_name}
            </span>
            <Link to="/profile">
              <button type="button" className="btn visit-profile-btn">
                Visit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/riskmanager" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcBearish size="25px" />
            &nbsp;
            <span> Risk Manager</span>
          </div>
        </div>
      </Link>
      <Link to="/expensemanager" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <GiExpense size="25px" />
            &nbsp;
            <span> Expense Manager</span>
          </div>
        </div>
      </Link>
      <Link to="/growthmanager" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcBullish size="25px" />
            &nbsp;
            <span> Growth Manager</span>
          </div>
        </div>
      </Link>
      <Link to="/advisorymanager" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcBusinessman size="25px" />
            &nbsp;
            <span> Advisory Manager</span>
          </div>
        </div>
      </Link>
      <Link to="/liabilitymanager" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcDebt size="25px" />
            &nbsp;
            <span> Liability Manager</span>
          </div>
        </div>
      </Link>
      <Link to="/userinteresttracker" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcMindMap size="25px" />
            &nbsp;
            <span> User Interest Tracker</span>
          </div>
        </div>
      </Link>
      <Link to="/calculators" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcCalculator size="25px" />
            &nbsp;
            <span>Calculators</span>
          </div>
        </div>
      </Link>
      <Link to="investmentoptions" style={{ textDecoration: 'none ' }}>
        <div className="box">
          <div className="option">
            <FcDonate size="25px" />
            &nbsp;
            <span>Investment options</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
