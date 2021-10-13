import React, { useState } from "react";

function CalculateEMI({ history }) {
  const [amount, setAmount] = useState();
  const [month, setMonth] = useState();
  const [rate, setRate] = useState();
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!amount || !month || !rate) {
      setError("Please enter all the fields correctly");
    }

    localStorage.setItem("amount", amount);
    localStorage.setItem("month", month);
    localStorage.setItem("rate", rate);

    let a = parseInt(amount);
    let m = parseInt(month);
    let r = parseInt(rate);
    let monthlyInterestRatio = r / 100 / 12;

    let top = Math.pow(1 + monthlyInterestRatio, m);
    let bottom = top - 1;
    let sp = top / bottom;
    let emi = Math.ceil(a * monthlyInterestRatio * sp);
    let full = Math.ceil(m * emi);
    let interest = Math.ceil(full - a);

    console.log(emi, full, interest);

    localStorage.setItem("emi", emi);
    localStorage.setItem("full", full);
    localStorage.setItem("interest", interest);

    history.push("/result");
  };

  return (
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-lg mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-indigo-700 dark:text-gray-200">
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
                  onChange={(e) => setAmount(e.target.value)}
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
                  onChange={(e) => setMonth(e.target.value)}
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
                  onChange={(e) => setRate(e.target.value)}
                />
                <h4>%</h4>
              </div>

              <div class="mb-6">
                <button
                  type="submit"
                  class="w-full px-3 py-4 text-white bg-blue-900 rounded-md focus:bg-indigo-600 focus:outline-none"
                  onClick={submitHandler}
                  disabled={error}
                >
                  Calculate
                </button>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
            {error && (
              <div style={{ color: "red" }}>Please Enter Valid Details</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculateEMI;
