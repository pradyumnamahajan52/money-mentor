/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import Base from '../components/Base';
import '../css/Home.css';

import '../css/Calculators.css';

const CalculatorsPage = () => {
  return (
    <Base>
      <div className="calculator-page">
        {/* <div className="left-calculator-page"></div>
        <div className="right-calculator-page"></div> */}
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-income-tax-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-income-tax"
              type="button"
              role="tab"
              aria-controls="v-pills-income-tax"
              aria-selected="true"
            >
              Calculate Income Tax
            </button>
            <button
              className="nav-link"
              id="v-pills-gst-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-gst"
              type="button"
              role="tab"
              aria-controls="v-pills-gst"
              aria-selected="false"
            >
              Calculate GST
            </button>
            <button
              className="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Messages
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>

          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active income-tax-part"
              id="v-pills-income-tax"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="income-tax-heading">
                <h1>Income Tax Calculator</h1>
              </div>
              <div className="income-tax-calculator">
                <div className="flex-1 ">
                  <label>Income</label>
                  <input
                    type="number"
                    id="input-income"
                    name="input-income"
                    placeholder="Enter your income"
                    className="mt-2"
                  />
                </div>
                <div className="flex-1 ml-20">
                  <label htmlFor="label-age">Age</label>
                  <input
                    type="number"
                    id="input-age"
                    name="input-age"
                    placeholder="Enter your income"
                    className="mt-2"
                  />
                </div>
                <div className="flex-1 ml-20">
                  <label htmlFor="label-house-rent">House rent</label>
                  <input
                    type="number"
                    id="input-house-rent"
                    name="input-house-rent"
                    placeholder="Enter your income"
                    className="mt-2"
                  />
                </div>
              </div>

              <button type="button" className="calculate-income-tax">
                calculate
              </button>

              <div className="income-tax-result mt-5">
                <div className="income-tax-result-box">
                  <p className="flex-1">
                    Your Income tax to be paid for the financial year 2022-23 is{' '}
                  </p>
                  <FaRupeeSign size={25} />
                  <input
                    id="income-tax-result-box"
                    name="income-tax-result-box"
                    value="0"
                    disabled
                  />
                </div>
              </div>
              {/* <input type="text" id="result" value={currentSum} readOnly />
              <input type="text" id="num" placeholder="enter a number" />
              <button onClick={Add}>Add</button>
              <button onClick={Clear}>Clear</button> */}
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-gst"
              role="tabpanel"
              aria-labelledby="v-pills-gst"
            >
              gst
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              recusandae eius voluptates incidunt sed a labore eaque
              repudiandae. Totam quae doloribus esse hic alias non accusantium
              eos reiciendis, consequatur officia expedita cupiditate id
              corporis neque laborum. Voluptatibus incidunt accusantium
              temporibus magni deserunt natus tenetur et ullam. Odit consectetur
              nulla ad, dignissimos perspiciatis molestiae soluta harum
              voluptatum officia distinctio accusamus dolorem quisquam animi
              consequatur. Sint fuga beatae voluptas atque eveniet, quas iste
              sunt veritatis quasi labore praesentium nobis inventore
              perspiciatis ex molestiae esse quos delectus expedita
              necessitatibus quo recusandae eligendi officiis! Dolor ullam
              itaque accusamus deserunt, officiis quasi, architecto et non
              tempore iusto ipsum nulla laboriosam consequatur, minus ad
              recusandae facilis. Aspernatur officiis eius earum libero sapiente
              aliquam, alias voluptatem nihil eos deserunt repudiandae quas
              ipsum incidunt, ratione temporibus minus, veritatis quia animi
              soluta accusantium voluptate suscipit omnis necessitatibus.
              Corporis libero dolor quisquam sapiente fuga quam? Libero
              necessitatibus ea aut sint excepturi, accusamus qui sequi
              repudiandae accusantium mollitia dicta eaque recusandae, quod
              ducimus nostrum eligendi laudantium quisquam reprehenderit.
              Doloribus tenetur accusamus minima ducimus placeat veritatis!
              Totam cum doloribus quod? Repellendus beatae at facere officia,
              quibusdam neque error nemo corporis laboriosam saepe consequuntur
              eius doloremque necessitatibus delectus nobis dolor provident nisi
              dignissimos. Assumenda deleniti distinctio aspernatur voluptas
              ullam at optio ad cupiditate alias, autem odio tempore excepturi
              eius itaque ratione labore odit molestias debitis aliquid
              laudantium placeat? Eum quod, officiis in voluptatem tenetur
              assumenda doloribus ullam distinctio quasi magnam, dicta omnis
              dolores beatae, ad rem minus cumque? Odio iusto accusantium
              excepturi animi!
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default CalculatorsPage;
