import React from "react";
import { Link } from "react-router-dom";

function Result() {
  const amount = localStorage.getItem("amount");
  const month = localStorage.getItem("month");
  const rate = localStorage.getItem("rate");
  const emi = localStorage.getItem("emi");
  const full = localStorage.getItem("full");
  const interest = localStorage.getItem("interest");
  return (
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-lg mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-xl font-semibold text-indigo-700 dark:text-gray-200">
              Loan EMI Calculator
            </h1>
          </div>
          <div class="m-7">
            <form action="" method="" id="form">
              <div class="mb-6 flex flex-col-3 justify-self-stretch">
                <label
                  for="name"
                  class="block mb-2 text-lg text-black-600 dark:text-gray-400"
                >
                  LoanAmount
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter amount"
                  required
                  class="w-70 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  value={amount}
                  disabled
                />
                <h4>INR</h4>
              </div>
              <div class="mb-6 flex flex-col-3">
                <label
                  for="number"
                  class="block mb-2 text-lg text-black-600 dark:text-gray-600 "
                >
                  LoanTenure
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Enter months"
                  required
                  class="w-70 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  value={month}
                  disabled
                />
                <h4>Months</h4>
              </div>
              <div class="mb-6 flex flex-col-3">
                <label
                  for="number"
                  class="text-lg text-black-600 dark:text-gray-400"
                >
                  InterestRate
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="NN.NN"
                  required
                  class="w-70 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  value={rate}
                  disabled
                />
                <h4>%</h4>
              </div>

              <div class="mb-6">
                <Link to="/">
                  <button
                    type="submit"
                    class="w-full px-3 py-4 text-white bg-blue-900 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Reset
                  </button>
                </Link>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
            <h1 class="my-3 text-xl font-semibold text-indigo-700 dark:text-gray-200">
              Loan EMI Calculator
            </h1>
            <div className="mx-auto items-center ">
              <div className="flex flex-col-2 mx-30">
                <div className="bg-yellow-400 w-32 h-auto rounded-lg font-semibold">
                  <h4>Loan EMI</h4>
                  <p>₹{emi}</p>
                </div>
                <div className="bg-green-200 w-50 h-auto ml-28 rounded-lg font-semibold">
                  <h4>Total Interest Payable</h4>
                  <p>₹{interest}</p>
                </div>
              </div>
              <div className="bg-indigo-300 mt-4 h-auto rounded-lg font-semibold">
                <h4>Total Payment (Principal + Interest)</h4>
                <p>₹{full}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
