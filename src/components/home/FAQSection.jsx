import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../../utilities/fakeData";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="mx-2 py-0 md:py-8">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary text-center pb-8">
        প্রায়শই জিজ্ঞাসিত <br className="block md:hidden" /> প্রশ্ন (FAQ)
      </h2>
      <div className="w-full md:w-[1000px] md:mx-auto">
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