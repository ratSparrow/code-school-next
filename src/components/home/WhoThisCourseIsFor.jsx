import React from "react";
import { FaUserGraduate, FaLaptopCode, FaGlobeAsia } from "react-icons/fa";

export default function WhoThisCourseIsFor() {
  const audience = [
    {
      icon: <FaUserGraduate className="text-indigo-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "সম্পূর্ণ নতুনদের জন্য",
      description: `কোডিং সম্পর্কে একদমই কিছু জানেন না? চিন্তার কিছু নেই! এই কোর্সে আপনি শিখবেন একদম শুরু থেকে ধাপে ধাপে — এমনভাবে যেন নিজেই বুঝতে পারেন, নিজেই করতে পারেন।`
    },
    {
      icon: <FaLaptopCode className="text-green-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "ফ্রিল্যান্সার হতে ইচ্ছুক?",
      description: "প্র্যাকটিকাল ফ্রন্টএন্ড স্কিল শিখে ক্লায়েন্টদের জন্য ওয়েবসাইট তৈরি করুন এবং আপনার ইনকাম বাড়ান।"
    },
    {
      icon: <FaGlobeAsia className="text-blue-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      title: "বাংলাভাষী শিক্ষার্থীদের জন্য",
      description: "এই কোর্সটি তৈরি হয়েছে বিশেষভাবে বাংলাদেশের শিক্ষার্থীদের কথা মাথায় রেখে — যেন আপনি সহজ ভাষায়, স্বাচ্ছন্দ্যে শিখতে পারেন।"
    }
  ];

  return (
    <section id="whoisfor" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 gradient-text-primary">
        এই কোর্স কার জন্য?
      </h2>
      <p className="text-md md:text-lg color-accent mb-12 max-w-2xl mx-auto">
        আপনি যদি একদম নতুন হন, আগে কখনও কোড না লিখে থাকেন, অথবা ফ্রিল্যান্সিং ক্যারিয়ার শুরু করতে চান — এই কোর্সটি আপনার জন্যই তৈরি।
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
            <h3 className="color-heading text-xl font-semibold mb-2">{item.title}</h3>
            <p className="color-accent text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}