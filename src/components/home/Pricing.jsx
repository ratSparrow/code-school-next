export function Pricing() {
  return (
    <section id="pricing" className="bg-white mx-2 py-0 md:py-8">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-2 md:mb-4 pt-4 md:pt-8 gradient-text-primary">
        কোর্স মূল্য ও ভর্তি
      </h2>
      <div className="w-full md:mx-auto md:w-[1000px] bg-indigo-50 rounded-xl p-10 shadow-lg my-8">
        <h3 className="text-2xl font-bold color-heading mb-4 text-center">সম্পূর্ণ কোর্সটি মাত্র <span className=" gradient-text-primary">৳4,999</span> টাকা!</h3>
        <p className="text-sm md:text-lg color-accent mb-4 text-center">One-time payment — lifetime access</p>
        <ul className="text-sm md:text-lg color-accent">
          <li className="my-1">লাইফটাইম অ্যাক্সেস</li>
          <li className="my-1">২১ সপ্তাহের কন্টেন্ট</li>
          <li className="my-1">প্রজেক্ট-ভিত্তিক রিয়েল ওয়ার্ল্ড স্কিল</li>
          <li className="my-1">কমপ্লিশন সার্টিফিকেট</li>
          <li className="my-1">সরাসরি সাপোর্ট ও গাইডেন্স</li>
        </ul>
        <a target="_blank" href="https://forms.gle/4LoKrvCZZSwhHXj67">
          <button className="button text-sm md:text-lg px-4 md:px-6 py-3 md:py-3 rounded-2xl">
            এখনই ভর্তি হোন
          </button>
        </a>

      </div>
    </section>
  );
}
Pricing