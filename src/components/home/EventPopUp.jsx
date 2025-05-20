// components/EventPopup.jsx
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

function EventPopup() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("webinar_popup_dismissed");
    if (dismissed) setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("webinar_popup_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-sm md:text-base">
        📢 <strong>শুক্রবার ওয়েবিনার:</strong> এক্সক্লুসিভ ফ্রি সেশন – কোডিং ক্যারিয়ার শুরু করুন বাংলায়!
      </div>
      <div className="flex items-center gap-3 ml-6">
        <a
          href="https://forms.gle/gkzLzGGZ9QbUYvXU9"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          এখনই জয়েন করুন
        </a>
        <button onClick={handleClose} className="hover:text-gray-200 transition text-xl">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default EventPopup