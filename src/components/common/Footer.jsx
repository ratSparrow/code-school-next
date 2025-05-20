import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text-primary">Code School Next</h2>
          <p className="text-gray-400">
            বাংলায় প্রোগ্রামিং শেখা এখন সহজ। বাস্তব প্রজেক্ট, প্র্যাকটিকাল স্কিলস এবং কমিউনিটির মাধ্যমে ক্যারিয়ার গড়ুন।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 !text-gray-300">দ্রুত লিঙ্ক</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#timeline" className="hover:text-white">কোর্স পরিচিতি</a></li>
            <li><a href="#projects" className="hover:text-white">প্রজেক্টসমূহ</a></li>
            <li><a href="#instructor" className="hover:text-white">মেন্টর</a></li>
            <li><a href="#banner" className="hover:text-white">ভর্তি</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 !text-gray-300">যোগাযোগ</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={18} /> mrafiul.alam7@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880-1648-886671
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 !text-gray-300">আমাদের অনুসরণ করুন</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61576153477129" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/rafiulalam07/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://github.com/ratSparrow" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com/@codeschoolnext" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Code School Next. All rights reserved.
      </div>
    </footer>
  );
}
