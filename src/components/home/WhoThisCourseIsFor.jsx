import React from "react";
import { FaUserGraduate, FaLaptopCode, FaGlobeAsia } from "react-icons/fa";
import { audience } from "../../utilities/fakeData";

export default function WhoThisCourseIsFor() {


  return (
    <section id="whoisfor" className="text-center mx-2 py-0 md:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary">
        এই কোর্স কার জন্য?
      </h2>
      <p className="text-sm md:text-lg color-accent">
        আপনি যদি একদম নতুন হন, আগে কখনও কোড না লিখে থাকেন, <br className="hidden md:block" /> অথবা ফ্রিল্যান্সিং ক্যারিয়ার শুরু করতে চান — এই কোর্সটি আপনার জন্যই তৈরি।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mx-2 md:w-[1400px] md:mx-auto py-8 md:py-16">
        {audience.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="color-heading text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
            <p className="color-accent text-sm md:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}