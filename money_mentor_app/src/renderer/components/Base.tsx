/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  FcBearish,
  FcBullish,
  FcBusinessman,
  FcDebt,
  FcMindMap,
  FcCalculator,
} from 'react-icons/fc';
import { FaRupeeSign, FaRegUserCircle, FaArrowLeft } from 'react-icons/fa';
import { GiExpense } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import '../css/Base.css';

const Base = ({ children }) => {
  const navigate = useNavigate();
  const { user, logout } = React.useContext(AuthContext);

  return (
    <>
      <div className="navbar">
        {/* <FaArrowAltCircleLeft size={30} className="mx-2 pl-1" /> */}
        <div className="left-navbar">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-outline-*"
            style={{ color: 'white' }}
          >
            <FaArrowLeft size={30} />
          </button>{' '}
          <h1>Money Mentor</h1>
        </div>
        <div className="right-navbar">
          <button type="button" className="btn btn-light" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default Base;
