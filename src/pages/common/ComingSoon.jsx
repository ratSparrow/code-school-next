import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center px-4">
      <div>
        <h1 className="!text-white text-4xl md:text-6xl font-bold mb-4">🚀 Code School Next</h1>
        <p className="text-xl md:text-2xl mb-6">We’re building something amazing. Coming very soon!</p>

        {/* <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email to get notified"
            className="w-full px-4 py-3 rounded-full text-black focus:outline-none"
          />
          <button className="mt-4 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition">
            Notify Me
          </button>
        </div> */}

        <p className="mt-6 text-sm text-indigo-100">© {new Date().getFullYear()} Code School Next</p>
      </div>
    </div>
  );
};

export default ComingSoon;
