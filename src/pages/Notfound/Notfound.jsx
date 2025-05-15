import React from "react";

export default function Notfound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
        >
          Go Home
        </a>
        <div className="mt-10">
          <img
            src="/images/404-illustration.png" // Replace with your image path
            alt="404 Illustration"
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}
