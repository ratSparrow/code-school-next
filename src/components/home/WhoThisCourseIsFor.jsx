import React from "react";
import { FaUserGraduate, FaLaptopCode, FaGlobeAsia } from "react-icons/fa";

export default function WhoThisCourseIsFor() {
  const audience = [
    {
      icon: <FaUserGraduate className="text-indigo-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Complete Beginners",
      description: "No coding experience? No problem. Start from scratch and build your skills step-by-step."
    },
    {
      icon: <FaLaptopCode className="text-green-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Aspiring Freelancers",
      description: "Learn practical frontend skills you can use to build websites for clients and grow your income."
    },
    {
      icon: <FaGlobeAsia className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "Bangladeshi Learners",
      description: "Tailored for local learners — in Bangla, with real-world examples and community support."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
        Who This Course Is For
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Whether you're starting your first line of code or looking to launch a freelance career, this course is designed for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {audience.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}