/* eslint-disable jsx-a11y/label-has-associated-control */
// import React from 'react';
// import { Link } from 'react-router-dom';
import Base from '../components/Base';
import '../css/ProfilePage.css';
import avatar from '../images/user.png';

const ProfilePage = () => {
  return (
    <Base>
      <div className="profile-page container">
        <div className="row mb-3 my-4">
          <div className="col-lg-4">
            <img
              className="rounded-circle mb-3 mt-4"
              src={avatar}
              alt="..."
              width="160"
              height="160"
            />
            <div className="mb-3">
              <button className="btn btn-primary btn-sm" type="button">
                Change Photo
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col">
                <form>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                          <strong>Username</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="username"
                          placeholder="user.name"
                          name="username"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          <strong>Email Address</strong>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          placeholder="user@example.com"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="first_name">
                          <strong>First Name</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="first_name"
                          placeholder="John"
                          name="first_name"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="last_name">
                          <strong>Last Name</strong>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="last_name"
                          placeholder="Doe"
                          name="last_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary btn-sm" type="submit">
                      Save Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <form>
          <h4>Occupation & Income Details</h4>
          <div className="flex">
            <div className="form-group">
              <label>Occupation</label>
              <br />
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="job">Job</option>
                <option value="business">Business</option>
                <option value="industrialist">Industrialist</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type</label>
              <br />
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="private">private</option>
                <option value="government">Government</option>
              </select>
            </div>
            <div className="form-group">
              <label>Income</label>
              <input
                type="number"
                id="income"
                placeholder="Enter yearly Income"
              />
            </div>
          </div>
          <h4 className="mt-4">Family Details</h4>
          <div className="flex mt-3">
            <div className="form-group">
              <label>Number of family Member</label>
              <input
                type="number"
                className=""
                name="no-of-family-member"
                id="no-of-family-member"
                placeholder="Eg: 4"
              />
            </div>
            <div className="form-group">
              <label>Facing any of these diesease</label>
              <select className="custom-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="Asthama">Asthama</option>
                <option value="cancer">Cancer</option>
                <option value="Asthama">Diabetes</option>
                <option value="Asthama">Related to Heart</option>
              </select>
            </div>
            <div className="form-group">
              <label>Loan Interest Rate</label>
              <input
                type="number"
                name="loan-interest-rate"
                id="loan-interest-rate"
                placeholder="Enter loan percentage"
              />
            </div>
          </div>
          <h4 className="mt-4">Loan Details</h4>
          <div className="flex mt-3">
            <div className="form-group">
              <label>Have you taken any loan ?</label>
              <br />

              <input
                type="radio"
                name="loan-confirmation-yes"
                id="loan-confirmation-yes"
                className="ml-20 mt-2 size-20"
              />
              <label className="ml-20"> yes</label>

              <input
                type="radio"
                name="loan-confirmation-no"
                id="loan-confirmation-no"
                className="ml-20 size-20"
              />
              <label className="ml-20"> No</label>
            </div>
            <div className="form-group">
              <label>Loan Remaining to pay</label>
              <input
                type="number"
                className=""
                name="loan-remaining"
                id="loan-remaining"
                placeholder="Enter the remaining amount to be paid"
              />
            </div>
            <div className="form-group">
              <label>Loan Interest Rate</label>
              <input
                type="number"
                name="loan-interest-rate"
                id="loan-interest-rate"
                placeholder="Enter loan percentage"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Monthly Expense</label>
            <input
              type="number"
              name="monthly-expense"
              id="monthly-expense"
              placeholder="how much you spend in a month"
            />
          </div>
          <h4 className="mt-4">Investment Details</h4>
          <div className="form-group">
            <label>Do you own any property ?</label>
            <br />

            <input
              type="radio"
              name="property-confirmation-yes"
              id="property-confirmation-yes"
              className="ml-20 mt-2 size-20"
            />
            <label className="ml-20">yes</label>

            <input
              type="radio"
              name="property-confirmation-no"
              id="property-confirmation-no"
              className="ml-20 size-20"
            />
            <label className="ml-20">No</label>
          </div>

          <div className="form-group invested-options">
            <label>Which property do you own ?</label>
            <div className="flex mt-2">
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="property-own-flat"
                  id="property-own-flat"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Flat</label>
              </div>
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="property-own-house"
                  id="property-own-house"
                  className="ml-20 size-30"
                />
                <label className="ml-20">House</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="property-own-shop"
                  id="property-own-shop"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Shop</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="property-own-farm"
                  id="property-own-farm"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Farm</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="property-own-plot"
                  id="property-own-plot"
                  className="ml-20 size-30 "
                />
                <label className="ml-20">Plot</label>
              </div>
            </div>

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>Buy year</th>
                    <th>Buy value</th>
                    <th>current value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Flat</th>
                    <td>
                      <input
                        type="number"
                        id="buy-year-flat"
                        name="buy-year-flat"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="buy-value-flat"
                        name="buy-value-flat"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-flat"
                        name="current-value-flat"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>House</th>
                    <td>
                      <input
                        type="number"
                        id="buy-year-house"
                        name="buy-year-house"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="buy-value-house"
                        name="buy-value-house"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-house"
                        name="current-value-house"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Shop</th>
                    <td>
                      <input
                        type="number"
                        id="buy-year-shop"
                        name="buy-year-shop"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="buy-value-shop"
                        name="buy-value-shop"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-shop"
                        name="current-value-shop"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Farm</th>
                    <td>
                      <input
                        type="number"
                        id="buy-year-farm"
                        name="buy-year-farm"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="buy-value-farm"
                        name="buy-value-farm"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-farm"
                        name="current-value-farm"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Plot</th>
                    <td>
                      <input
                        type="number"
                        id="buy-year-plot"
                        name="buy-year-plot"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="buy-value-plot"
                        name="buy-value-plot"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-house"
                        name="current-value-house"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-group invested-options">
            <label>Where you have invested ?</label>
            <div className="flex mt-2">
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="investment-confirmation-bank-fd"
                  id="investment-confirmation-bank-fd"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Bank FD</label>
              </div>
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="investment-confirmation-gold"
                  id="investment-confirmation-gold"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Gold</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="investment-confirmation-shares"
                  id="investment-confirmation-shares"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Shares</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="investment-confirmation-mutual-funds"
                  id="investment-confirmation-mutual-funds"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Mutual Funds</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="investment-confirmation-crypto"
                  id="investment-confirmation-crypto"
                  className="ml-20 size-30 "
                />
                <label className="ml-20">Cryptocurrency</label>
              </div>
            </div>

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>Money invested</th>
                    <th>current value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Bank FD</th>
                    <td>
                      <input
                        type="number"
                        id="money-invested-band-fd"
                        name="money-invested-band-fd"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-band-fd"
                        name="current-value-band-fd"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Gold</th>
                    <td>
                      <input
                        type="number"
                        id="money-invested-gold"
                        name="money-invested-gold"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-band-gold"
                        name="current-value-band-gold"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Shares</th>
                    <td>
                      <input
                        type="number"
                        id="money-invested-shares"
                        name="money-invested-shares"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-band-shares"
                        name="current-value-band-shares"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Mutual Funds</th>
                    <td>
                      <input
                        type="number"
                        id="money-invested-mutual-fund"
                        name="money-invested-mutual-fund"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-band-mutual-fund"
                        name="current-value-band-mutual-fund"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Crypto</th>
                    <td>
                      <input
                        type="number"
                        id="money-invested-crypto"
                        name="money-invested-crypto"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="current-value-band-crypto"
                        name="current-value-band-crypto"
                        placeholder=""
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 className="mt-4">Future Goals</h4>
          <div className="form-group invested-options">
            <label>What are your future goals ?</label>
            <div className="flex mt-2">
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="goal-buy-property"
                  id="goal-buy-property"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Buy Property</label>
              </div>
              <div className="flex-1">
                <input
                  type="checkbox"
                  name="goal-buy-car"
                  id="goal-buy-car"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Buy Car</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="goal-business-expansion"
                  id="goal-business-expansion"
                  className="ml-20 size-30"
                />
                <label className="ml-20">Business Expansion</label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="goal-marriage"
                  id="goal-marriage"
                  className="ml-20 size-30"
                />
                <label className="ml-20">For Marriage </label>
              </div>

              <div className="flex-1">
                <input
                  type="checkbox"
                  name="goal-medical-purpose"
                  id="goal-medical-purpose"
                  className="ml-20 size-30 "
                />
                <label className="ml-20">Medical Purpose</label>
              </div>
            </div>

            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th />
                    <th>How much money you want to save ?</th>
                    <th>Till which year ?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Buy Property</th>
                    <td>
                      <input
                        type="number"
                        id="save-for-property"
                        name="save-for-property"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="target-year-property"
                        name="target-year-property"
                        placeholder="Eg: 2025"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Buy Car</th>
                    <td>
                      <input
                        type="number"
                        id="save-for-car"
                        name="save-for-car"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="target-year-car"
                        name="target-year-car"
                        placeholder="Eg: 2025"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Business Expansion</th>
                    <td>
                      <input
                        type="number"
                        id="save-for-business"
                        name="save-for-business"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="target-year-business-expansion"
                        name="target-year-business-expansion"
                        placeholder="Eg: 2025"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>For Marriage</th>
                    <td>
                      <input
                        type="number"
                        id="save-for-marriage"
                        name="save-for-marriage"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="target-year-marriage"
                        name="target-year-marriage"
                        placeholder="Eg: 2025"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Medical Purpose</th>
                    <td>
                      <input
                        type="number"
                        id="save-for-medical"
                        name="save-for-medical"
                        placeholder=""
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        id="target-year-medical-purpose"
                        name="target-year-medical-purpose"
                        placeholder="Eg: 2025"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <button type="submit" className="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    </Base>
  );
};

export default ProfilePage;
