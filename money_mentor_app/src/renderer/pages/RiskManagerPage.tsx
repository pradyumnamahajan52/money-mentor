import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ReactSpeedometer from 'react-d3-speedometer';
import RiskProfileModal from '../components/RiskProfileModal';
import Base from '../components/Base';
import '../css/RiskManager.css';

const RiskManagerPage = () => {
  const [showRiskProfileModal, setRiskProfileModal] = React.useState(false);

  return (
    <Base>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        theme="dark"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RiskProfileModal
        showRiskProfileModal={showRiskProfileModal}
        setRiskProfileModal={setRiskProfileModal}
      />
      <div className="risk-manager-page">
        <div className="alert alert-info" role="alert">
          <div className="d-flex justify-content-between">
            Update Your Risk Profile
            <button
              type="button"
              onClick={() => setRiskProfileModal(true)}
              className="btn btn-dark"
            >
              Update
            </button>
          </div>
        </div>
        <div className="chart">
          <ReactSpeedometer
            maxValue={100}
            value={88}
            needleColor="#0D0D0D"
            startColor="green"
            segments={5}
            endColor="red"
          />
        </div>
        <div className="chart-explanation">
          <div className="risk-reasons flex-1">
            <h4>Risk Reasons</h4>
            <ul>
              <li>You have only one prop</li>
            </ul>
          </div>
          <div className="risk-relief-suggestions flex-1">
            <h4>Risk Relief Suggestion</h4>
            <ul>
              <li>You have only one prop</li>
            </ul>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default RiskManagerPage;
