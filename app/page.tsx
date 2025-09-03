import React from "react";
import Image from "next/image";
export default function HomePage() {
  type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
  };

  const Card: React.FC<CardProps> = ({ title, description, icon, href }) => {
    return (
      <a
        href={href}
        className="block p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 flex items-center justify-center bg-lime-100 text-lime-600 rounded-full mb-6">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-base">{description}</p>
        </div>
      </a>
    );
  };
  return (
    <div className="min-h-screen bg-lime-50 font-sans flex flex-col items-center p-8">
      <Image
        src="/logo.png"
        alt="Calculator Icon"
        width={32}
        height={32}
        className="h-50 w-50"
      />
      {/* Logo Section */}
      <header className="w-full flex justify-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-lime-800 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-lime-700">
            คำนวณง่ายๆ หลายหลายแบบ
          </span>
        </h1>
      </header>

      {/* Card Grid Section */}
      <main className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card for BMI */}
          <Card
            title="คำนวณ BMI"
            description="ดัชนีมวลกาย"
            icon={
              <Image
                src="/bmi_img.png"
                alt="BMI Icon"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            }
            href="/bmi"
          />

          {/* Card for BMR */}
          <Card
            title="คำนวณ BMR"
            description="อัตราการเผาผลาญ"
            icon={
              <Image
                src="/bmr_img.png"
                alt="BMR Icon"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            }
            href="/bmr"
          />

          {/* Card for Car Installment */}
          <Card
            title="คำนวณผ่อนรถ"
            description="คำนวณยอดผ่อนรถยนต์"
            icon={
              <Image
                src="/car_img.png"
                alt="Car Installment Icon"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            }
            href="/carinstallment"
          />
        </div>
      </main>
    </div>
  );
}
