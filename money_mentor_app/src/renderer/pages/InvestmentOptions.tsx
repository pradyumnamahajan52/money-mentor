/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaArrowRight, FaRupeeSign } from 'react-icons/fa';
import Base from '../components/Base';
import Stocks from '../images/stocks.jpg';
import '../css/Home.css';
import '../css/InvestmentOptions.css';

const InvestmentOptions = () => {
  return (
    <Base>
      <div className="investment-form container">
        <form className="inner-investment-form">
          <div className="form-group">
            <label htmlFor="label-Investment-amount">Investment Amount</label>
            <br />
            <input
              className=""
              type="number"
              id="investment-amount"
              placeholder=""
            />
          </div>
          <div className="form-group ml-20">
            <label htmlFor="label-select-risk">Select your risk</label>
            <br />
            <select>
              <option disabled selected>
                Select
              </option>
              <option>Low</option>
              <option>Average</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group ml-20">
            <br />
            <button type="button" className="btn btn-primary">
              Done
            </button>
          </div>
        </form>
      </div>

      <div className="Comparison-blocks">
        <div className="investment-options flex-1">
          <div>
            <h5 className="investment-options-heading">Stocks/IPOs</h5>
            <img src={Stocks} alt="..." className="investment-image" />
          </div>
          <div className="investment-details">
            <div>
              <ul>
                <li>You can buy shares of the company listed in NSE/BSE</li>
                <li>You can also invest in the IPOs of the company</li>
              </ul>
              <button type="button" className="btn btn-learn-more">
                <span className="flex-1">Learn more</span>
                <FaArrowRight />
              </button>
            </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Amount to be invested</td>
                  <td className="td-right">
                    <strong>
                      <FaRupeeSign /> 20,2000
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>ROI(return on Investment)</td>
                  <td className="td-right">
                    <strong id="investment-roi">15 %</strong>/year
                  </td>
                </tr>
                <tr>
                  <td>Risk percentage</td>
                  <td className="td-right">
                    <strong id="investment-risk">15%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="investment-options flex-1">
          <div>
            <h5 className="investment-options-heading">Mutual Funds</h5>
            <img
              src={Stocks}
              alt="..."
              height='100%'
              className="investment-image"
            />
          </div>
          <div className="investment-details">
            <div>
              <ul>
                <li>You can buy shares of the company listed in NSE/BSE</li>
                <li>You can also invest in the IPOs of the company</li>
              </ul>
              <button type="button" className="btn btn-learn-more">
                <span className="flex-1">Learn more</span>
                <FaArrowRight />
              </button>
            </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Amount to be invested</td>
                  <td className="td-right">
                    <strong>
                      <FaRupeeSign /> 20,2000
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>ROI(return on Investment)</td>
                  <td className="td-right">
                    <strong id="investment-roi">15 %</strong>/year
                  </td>
                </tr>
                <tr>
                  <td>Risk percentage</td>
                  <td className="td-right">
                    <strong id="investment-risk">15%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="investment-options flex-1">
          <div>
            <h5 className="investment-options-heading">Cryptocurrency </h5>
            <img src={Stocks} alt="..." className="investment-image" />
          </div>
          <div className="investment-details">
            <div>
              <ul>
                <li>You can buy shares of the company listed in NSE/BSE</li>
                <li>You can also invest in the IPOs of the company</li>
              </ul>
              <button type="button" className="btn btn-learn-more">
                <span className="flex-1">Learn more</span>
                <FaArrowRight />
              </button>
            </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Amount to be invested</td>
                  <td className="td-right">
                    <strong>
                      <FaRupeeSign /> 20,2000
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>ROI(return on Investment)</td>
                  <td className="td-right">
                    <strong id="investment-roi">15 %</strong>/year
                  </td>
                </tr>
                <tr>
                  <td>Risk percentage</td>
                  <td className="td-right">
                    <strong id="investment-risk">15%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="investment-options flex-1">
          <div>
            <h5 className="investment-options-heading">Bank Fixed Deposit</h5>
            <img src={Stocks} alt="..." className="investment-image" />
          </div>
          <div classname="investment-details">
            <div>
              <ul>
                <li>You can buy shares of the company listed in NSE/BSE</li>
                <li>You can also invest in the IPOs of the company</li>
              </ul>
              <button type="button" className="btn btn-learn-more">
                <span className="flex-1">Learn more</span>
                <FaArrowRight />
              </button>
            </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Amount to be invested</td>
                  <td className="td-right">
                    <strong>
                      <FaRupeeSign /> 20,2000
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>ROI(return on Investment)</td>
                  <td className="td-right">
                    <strong id="investment-roi">15 %</strong>/year
                  </td>
                </tr>
                <tr>
                  <td>Risk percentage</td>
                  <td className="td-right">
                    <strong id="investment-risk">15%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="investment-options flex-1">
          <div>
            <h5 className="investment-options-heading"></h5>
            <img src={Stocks} alt="..." className="investment-image" />
          </div>
          <div className="investment-details">
            <div>
              <ul>
                <li>You can buy shares of the company listed in NSE/BSE</li>
                <li>You can also invest in the IPOs of the company</li>
              </ul>
              <button type="button" className="btn btn-learn-more">
                <span className="flex-1">Learn more</span>
                <FaArrowRight />
              </button>
            </div>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Amount to be invested</td>
                  <td className="td-right">
                    <strong>
                      <FaRupeeSign /> 20,2000
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>ROI(return on Investment)</td>
                  <td className="td-right">
                    <strong id="investment-roi">15 %</strong>/year
                  </td>
                </tr>
                <tr>
                  <td>Risk percentage</td>
                  <td className="td-right">
                    <strong id="investment-risk">15%</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default InvestmentOptions;
