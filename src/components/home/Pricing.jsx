export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-10 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        কোর্স মূল্য ও ভর্তি
      </h2>
      <div className="max-w-3xl mx-auto text-center bg-indigo-50 rounded-xl p-10 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">সম্পূর্ণ কোর্সটি মাত্র ৳4,999 টাকা!</h3>
        <p className="text-gray-700 mb-4">One-time payment — lifetime access</p>
        <ul className="text-left text-gray-600 mb-6 list-disc list-inside">
          <li>লাইফটাইম অ্যাক্সেস</li>
          <li>২১ সপ্তাহের কন্টেন্ট</li>
          <li>প্রজেক্ট-ভিত্তিক রিয়েল ওয়ার্ল্ড স্কিল</li>
          <li>কমপ্লিশন সার্টিফিকেট</li>
          <li>সরাসরি সাপোর্ট ও গাইডেন্স</li>
        </ul>
        <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
          <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
            Enroll Now
          </button>
        </a>
        {/* <p className="text-sm text-gray-500 mt-4">7-day money-back guarantee. No questions asked.</p> */}
      </div>
    </section>
  );
}
 Pricing