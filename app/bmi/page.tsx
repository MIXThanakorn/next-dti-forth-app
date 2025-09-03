"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function BMIPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("0.00");

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmiResult("0.00");
  };

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setBmiResult("Invalid Input");
      return;
    }
    const bmi = w / ((h / 100) * (h / 100));
    setBmiResult(bmi.toFixed(2));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm w-full border border-lime-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-lime-700 mb-2">
          BMI Calculator
        </h1>
        {/* Subtitle */}
        <h2 className="text-lg text-center text-lime-500 mb-6">
          คำนวณค่าดัชนีมวลกาย
        </h2>

        {/* Image - Replaced next/image with a standard <img> tag to avoid the error */}
        <div className="flex justify-center mb-6">
          <Image
            src="/bmi_img.png"
            alt="BMI Icon"
            width={32}
            height={32}
            className="h-40 w-40"
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-700 mb-1 "
          >
            น้ำหนัก (กิโลกรัม)
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
            placeholder="กรอกน้ำหนักของคุณ"
          />
        </div>

        {/* Height Input */}
        <div className="mb-6">
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ส่วนสูง (เซนติเมตร)
          </label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition duration-200 [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
            placeholder="กรอกส่วนสูงของคุณ"
          />
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
          <span className="text-lime-700">ค่าดัชนีมวลกาย:</span>{" "}
          <span className="text-lime-600 font-bold">{bmiResult}</span>
          <Link href="/" className="block mt-4">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
