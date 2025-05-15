import React from "react";
import reactBanner from "../../assets/images/banner/react-banner.png"

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="color-heading text-4xl md:text-6xl font-bold mb-6">
          Launch Your Career as a Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl color-accent mb-8">
          Master in HTML, CSS, JavaScript, React, NodeJs & MongoDB from scratch — no experience needed!
        </p>
        <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
          Enroll Now
        </button>
        <div className="mt-12 flex justify-center">
          <img
            src={reactBanner} 
            alt="Learning React illustration"
            width="600"
            height="400"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}