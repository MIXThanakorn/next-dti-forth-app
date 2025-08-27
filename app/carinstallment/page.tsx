"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CarInstallmentPage() {
  const [carPrice, setCarPrice] = useState("");
  const [downPaymentAmount, setDownPaymentAmount] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("15");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  const loanTerms = [12, 24, 36, 48, 60, 72];
  const downPaymentOptions = [15, 20, 25, 30, 35];

  useEffect(() => {
    // This effect updates the downPaymentAmount when the carPrice or downPaymentPercent changes
    if (carPrice && downPaymentPercent) {
      const dpAmount =
        parseFloat(carPrice) * (parseFloat(downPaymentPercent) / 100);
      setDownPaymentAmount(dpAmount.toFixed(2));
    } else {
      setDownPaymentAmount("");
    }
  }, [carPrice, downPaymentPercent]);

  const handleCalculate = () => {
    const price = parseFloat(carPrice);
    const down = parseFloat(downPaymentAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const term = parseInt(loanTerm);

    if (
      isNaN(price) ||
      isNaN(down) ||
      isNaN(rate) ||
      isNaN(term) ||
      price <= 0
    ) {
      setMonthlyPayment("0.00");
      return;
    }

    const loanAmount = price - down;
    if (rate === 0) {
      // Handle zero interest rate case
      setMonthlyPayment((loanAmount / term).toFixed(2));
      return;
    }

    // PMT formula for loan calculation
    const pmt = (loanAmount * rate) / (1 - Math.pow(1 + rate, -term));
    setMonthlyPayment(pmt.toFixed(2));
  };

  const handleReset = () => {
    setCarPrice("");
    setDownPaymentAmount("");
    setDownPaymentPercent("15");
    setInterestRate("");
    setLoanTerm("12");
    setMonthlyPayment("0.00");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-lime-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-lime-700 mb-2">
          Car Installment Calculator
        </h1>
        {/* Subtitle */}
        <h2 className="text-lg text-center text-lime-500 mb-6">
          คำนวณค่างวดรถยนต์
        </h2>
        <div className="flex justify-center mb-6">
          <Image
            src="/car_img.png"
            alt="Car Installment Icon"
            width={32}
            height={32}
            className="h-40 w-40"
          />
        </div>

        {/* Car Price Input */}
        <div className="mb-4">
          <label
            htmlFor="carPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ราคารถ (บาท)
          </label>
          <input
            id="carPrice"
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
            placeholder="กรอกราคารถ"
          />
        </div>

        {/* Down Payment Options (Radio) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            เงินดาวน์ (%)
          </label>
          <div className="flex flex-wrap gap-2">
            {downPaymentOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`down-pay-${option}`}
                  name="down-payment"
                  value={option}
                  checked={downPaymentPercent === String(option)}
                  onChange={(e) => setDownPaymentPercent(e.target.value)}
                  className="form-radio text-lime-500 h-4 w-4"
                />
                <label
                  htmlFor={`down-pay-${option}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option}%
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Down Payment Amount Input (Calculated) */}
        <div className="mb-4">
          <label
            htmlFor="downPaymentAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            เงินดาวน์ (บาท)
          </label>
          <input
            id="downPaymentAmount"
            type="number"
            value={downPaymentAmount}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-4">
          <label
            htmlFor="interestRate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
            placeholder="กรอกอัตราดอกเบี้ย"
          />
        </div>

        {/* Loan Term Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="loanTerm"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            จำนวนเดือนที่ใช้ผ่อน
          </label>
          <select
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200"
          >
            {loanTerms.map((term) => (
              <option key={term} value={term}>
                {term} เดือน
              </option>
            ))}
          </select>
        </div>

        {/* Buttons - Arranged vertically */}
        <div className="flex flex-col space-y-4 mb-6">
          <button
            onClick={handleCalculate}
            className="w-full bg-lime-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-lime-600 transition duration-300 transform hover:scale-105"
          >
            คำนวณ
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-red-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-500 transition duration-300 transform hover:scale-105"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result */}
        <div className="text-center text-xl font-semibold text-gray-800">
          <span className="text-lime-700">ต้องผ่อนต่องวด:</span>{" "}
          <span className="text-lime-600 font-bold">{monthlyPayment} บาท</span>
        </div>
      </div>
    </div>
  );
}
