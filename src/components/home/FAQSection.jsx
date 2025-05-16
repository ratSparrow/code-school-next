import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need any prior experience?",
      answer: "No experience needed. This course is designed for complete beginners."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, you’ll receive a certificate after completing the full course."
    },
    {
      question: "How long is the course?",
      answer: "It’s a 10-week course with lifetime access to all materials."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 7-day money-back guarantee."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-indigo-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
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