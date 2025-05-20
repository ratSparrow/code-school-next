import React from "react";
import { FaChalkboardTeacher, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../../assets/images/others/rafi.jpg"

export default function InstructorSection() {
  return (
    <section id="instructor" className="w-full md:w-[1400px] mx-auto py-2 md:py-8">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4 pt-4 md:pt-8 gradient-text-primary">
        পরিচিত হন আপনার <br className="block md:hidden" /> মেন্টরের সঙ্গে
      </h2>

      <div className="flex flex-col md:flex-row mx-2">
        <img
          src={profilePhoto}
          alt="Instructor"
          className="rounded-full shadow-lg w-32 h-32 object-cover border-4 border-indigo-200"
        />
        <div className="mt-4 pl-0 md:pl-6">
          <h3 className="text-xl md:text-2xl color-accent mb-2">রাফিউল আলম তন্ময়</h3>
          <h3 className="text-xl md:text-2xl color-accent mb-2">সফটওয়্যার ইঞ্জিনিয়ার ও প্রোগ্রামিং প্রশিক্ষক</h3>
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

      <div className="mx-2">

        <p className="text-sm md:text-lg color-accent my-4">
          আমি একজন ফুল স্ট্যাক ডেভেলপার এবং প্রোগ্রামিং প্রশিক্ষক হিসেবে শূন্য থেকে শেখার ইচ্ছা থাকা শিক্ষার্থীদের হাতে-কলমে দক্ষ করে তোলার জন্য কাজ করি।
          বাংলা ভাষাভাষী শিক্ষার্থীদের জন্য সহজ, বাস্তবমুখী এবং অনুপ্রেরণাদায়ক কোড শেখানোর লক্ষ্যেই এই কোর্সটি তৈরি করেছি।
        </p>
        <p className="text-sm md:text-lg color-accent mb-1"> অভিজ্ঞতা ও দক্ষতা:</p>
        <ul className="text-sm md:text-lg color-accent">
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


        <p className="text-sm md:text-lg color-accent mt-4 mb-2"> এই কোর্স কেন তৈরি করেছি:</p>
        <p className="text-sm md:text-lg color-accent mb-4">
          বাংলায় প্রোগ্রামিং শেখার সুযোগ খুবই সীমিত। আমি বিশ্বাস করি, ভাষা যেন কোনো বাধা না হয় শেখার পথে।
          তাই হাতে-কলমে প্রজেক্ট ভিত্তিক এই কোর্সটি তৈরি করেছি — একদম শুরু থেকে দক্ষ ডেভেলপার হবার জন্য।
        </p>
        <p className="text-sm md:text-lg color-accent mt-4 mb-2">আমার লক্ষ্য:</p>
        <p className="text-sm md:text-lg color-accent">আপনাকে এমনভাবে গাইড করা যাতে আপনি আত্মবিশ্বাসের সঙ্গে নিজের প্রজেক্ট তৈরি করতে পারেন এবং ক্যারিয়ারে পরবর্তী ধাপে যেতে পারেন।</p>
      </div>

    </section >
  );
}
