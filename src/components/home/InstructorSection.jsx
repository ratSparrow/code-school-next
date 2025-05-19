import React from "react";
import { FaChalkboardTeacher, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../../assets/images/others/rafi.jpg"

export default function InstructorSection() {
  return (
    <section id="instructor" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        পরিচিত হন আপনার মেন্টরের সঙ্গে
      </h2>
      <div className="max-w-7xl mx-auto gap-10 items-center">

        <div className="flex flex-col md:flex-row">
          <img
            src={profilePhoto} // Replace with your actual photo URL
            alt="Instructor"
            className="rounded-full shadow-lg w-32 h-32 object-cover border-4 border-indigo-200"
          />
          <div className="mt-4 pl-0 md:pl-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">রাফিউল আলম তন্ময়</h3>
            <h3 className="text-xl font-bold text-gray-800 mb-2">সফটওয়্যার ইঞ্জিনিয়ার ও প্রোগ্রামিং প্রশিক্ষক</h3>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/rafiulalam07/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/ratSparrow" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-2xl hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        <div>

          <p className="text-gray-600 leading-relaxed my-4">
            আমি একজন ফুল স্ট্যাক ডেভেলপার এবং প্রোগ্রামিং প্রশিক্ষক হিসেবে শূন্য থেকে শেখার ইচ্ছা থাকা শিক্ষার্থীদের হাতে-কলমে দক্ষ করে তোলার জন্য কাজ করি।
            বাংলা ভাষাভাষী শিক্ষার্থীদের জন্য সহজ, বাস্তবমুখী এবং অনুপ্রেরণাদায়ক কোড শেখানোর লক্ষ্যেই এই কোর্সটি তৈরি করেছি।
          </p>
          <p className="text-gray-600 leading-relaxed mb-1"> অভিজ্ঞতা ও দক্ষতা:</p>
          <ul className="">
            <li className="py-2">
              ✅ ৩+ বছরের বাস্তব প্রজেক্ট এবং ক্লায়েন্টের সঙ্গে কাজের অভিজ্ঞতা <br />
              দেশি ও বিদেশি ক্লায়েন্টদের জন্য ওয়েব অ্যাপ ও সফটওয়্যার ডেভেলপমেন্টে সরাসরি কাজ করেছি।
            </li>
            <li className="py-2">
              ✅ ইন্ডাস্ট্রি-ফোকাসড জ্ঞান ও প্র্যাকটিক্যাল স্কিলস <br />
              শুধু বইয়ের তত্ত্ব নয়, শেখাবো রিয়েল-ওয়ার্ল্ড সমস্যা সমাধানের উপায়।
            </li>
            <li className="py-2">
              ✅ সফটওয়্যার ইঞ্জিনিয়ার হিসেবে প্রতিষ্ঠিত ক্যারিয়ার <br />
              একজন অভিজ্ঞ ডেভেলপার হিসেবে, শেখানো প্রতিটি টপিকেই বাস্তব প্রয়োগের দৃষ্টিভঙ্গি থাকছে।
            </li>
          </ul>


          <p className="text-gray-600 leading-relaxed mt-4 mb-2"> এই কোর্স কেন তৈরি করেছি:</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            বাংলায় প্রোগ্রামিং শেখার সুযোগ খুবই সীমিত। আমি বিশ্বাস করি, ভাষা যেন কোনো বাধা না হয় শেখার পথে।
            তাই হাতে-কলমে প্রজেক্ট ভিত্তিক এই কোর্সটি তৈরি করেছি — একদম শুরু থেকে দক্ষ ডেভেলপার হবার জন্য।
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 mb-2">আমার লক্ষ্য:</p>
          <p className="text-gray-600 ">আপনাকে এমনভাবে গাইড করা যাতে আপনি আত্মবিশ্বাসের সঙ্গে নিজের প্রজেক্ট তৈরি করতে পারেন এবং ক্যারিয়ারে পরবর্তী ধাপে যেতে পারেন।</p>
        </div>
      </div>
    </section >
  );
}
