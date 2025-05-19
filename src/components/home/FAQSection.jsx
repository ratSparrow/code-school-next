import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function FAQSection() {
 const faqs = [
  {
    question: "এই কোর্সটি কি একেবারে নতুনদের জন্য উপযুক্ত?",
    answer: "হ্যাঁ, এই কোর্সটি একদম নতুনদের জন্য ডিজাইন করা হয়েছে। আপনি যদি কখনও কোডিং না করে থাকেন, তবুও ধাপে ধাপে শেখানো হবে।"
  },
  {
    question: "কোর্সটি অনলাইনে হবে, নাকি অফলাইনে?",
    answer: "এই কোর্সটি সম্পূর্ণ অনলাইন ভিত্তিক। আপনি ইচ্ছেমতো সময় নিয়ে ভিডিও লেকচার ও প্রজেক্ট করতে পারবেন।"
  },
  {
    question: "কোর্স শেষে কি সার্টিফিকেট দেওয়া হবে?",
    answer: "হ্যাঁ, সফলভাবে কোর্স সম্পন্ন করার পর আপনাকে একটি সার্টিফিকেট প্রদান করা হবে।"
  },
  {
    question: "আমি কী কী প্রজেক্ট তৈরি করতে শিখবো?",
    answer: "আপনি বাস্তবভিত্তিক ৫টি প্রজেক্ট তৈরি করতে শিখবেন যেমন: টুডু অ্যাপ, কুইজ অ্যাপ, এক্সপেন্স ট্র্যাকার, ই-কমার্স সাইট ইত্যাদি।"
  },
  {
    question: "কোর্সের মেয়াদ কতদিন?",
    answer: "কোর্সটি ২১ সপ্তাহের জন্য সাজানো হয়েছে, প্রতি সপ্তাহে ৩টি ক্লাস করে।"
  },
  {
    question: "আমি যদি কোর্স চলাকালীন কোনো সমস্যায় পড়ি, কাকে বলবো?",
    answer: "আপনি যেকোনো সময় আমাদের কমিউনিটি গ্রুপ বা হোয়াটসঅ্যাপের মাধ্যমে সাপোর্ট পাবেন।"
  },
  {
    question: "ভর্তি প্রক্রিয়া কীভাবে সম্পন্ন করবো?",
    answer: "ভর্তি হতে নিচের 'Enroll Now' বাটনে ক্লিক করে গুগল ফর্ম পূরণ করুন অথবা আমাদের হোয়াটসঅ্যাপে যোগাযোগ করুন।"
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow mb-4"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}