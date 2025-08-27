"use client";
import { useState } from "react";
import Image from "next/image";

// Main BMR Calculator component
export default function App() {
  // State for user inputs
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState(""); // Changed to input box
  const [gender, setGender] = useState("male");

  // State for the BMR result
  const [bmrResult, setBmrResult] = useState("0.00");

  // Function to handle BMR calculation
  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      setBmrResult("Invalid Input");
      return;
    }

    let bmr = 0;
    if (gender === "male") {
      // Mifflin-St Jeor Equation for men
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      // Mifflin-St Jeor Equation for women
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    setBmrResult(bmr.toFixed(2));
  };

  // Function to reset all input values and the result
  const handleReset = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmrResult("0.00");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lime-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-auto transform transition-all duration-300">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-lime-700 mb-2">
            BMR Calculator
          </h1>
          <p className="text-lg text-gray-600">คำนวณค่าอัตราการเผาผลาญ</p>
        </div>

        <div className="flex justify-center mb-6">
          {/* Using a placeholder since the original image src might not work in this environment */}
          <Image
            src="/bmr_img.png"
            alt="BMR Icon"
            width={32}
            height={32}
            className="h-40 w-40"
          />
        </div>

        <div className="space-y-4 mb-6">
          {/* Weight input */}
          <div>
            <label
              htmlFor="weight"
              className="block text-gray-700 font-semibold mb-1"
            >
              น้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500 transition-colors [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
              placeholder="กรอกน้ำหนัก"
            />
          </div>

          {/* Height input */}
          <div>
            <label
              htmlFor="height"
              className="block text-gray-700 font-semibold mb-1"
            >
              ส่วนสูง (เซนติเมตร)
            </label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500 transition-colors [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
              placeholder="กรอกส่วนสูง"
            />
          </div>

          {/* Age input */}
          <div>
            <label
              htmlFor="age"
              className="block text-gray-700 font-semibold mb-1"
            >
              อายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500 transition-colors [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
              placeholder="กรอกอายุ"
            />
          </div>

          {/* Gender radio buttons */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              เพศ
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio text-lime-500 h-5 w-5"
                />
                <span className="ml-2 text-gray-700">ชาย</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio text-lime-500 h-5 w-5"
                />
                <span className="ml-2 text-gray-700">หญิง</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-3 mb-6">
          <button
            onClick={handleCalculate}
            className="w-full bg-lime-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-lime-600 transition-colors duration-200"
          >
            คำนวณ
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-200"
          >
            รีเซ็ต
          </button>
        </div>

        {/* Result display */}
        <div className="text-center bg-lime-100 p-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-800">
            อัตราการเผาผลาญ:{" "}
            <span className="text-lime-700 font-bold text-xl">{bmrResult}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
