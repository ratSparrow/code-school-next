export function Pricing() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Pricing & Enrollment
      </h2>
      <div className="max-w-3xl mx-auto text-center bg-indigo-50 rounded-xl p-10 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Course Access</h3>
        <p className="text-3xl font-extrabold gradient-text-primary mb-2">৳4,999 BDT</p>
        <p className="text-gray-700 mb-4">One-time payment — lifetime access</p>
        <ul className="text-left text-gray-600 mb-6 list-disc list-inside">
          <li>21 weeks of content</li>
          <li>Hands-on projects and real-world examples</li>
          <li>Access to student community & mentorship</li>
          <li>Completion certificate</li>
        </ul>
         <button className="button text-lg px-6 py-3 rounded-2xl bg-blue-600 ">
          Enroll Now
        </button>
        <p className="text-sm text-gray-500 mt-4">7-day money-back guarantee. No questions asked.</p>
      </div>
    </section>
  );
}
