
import { FaEnvelope, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="primary-gradient-background text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Code School Hub</h3>
          <p className="text-white">Empowering Bangladesh through modern tech education.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-white flex items-center gap-2"><FaEnvelope /> support@codeschoolnext.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <Link to="/" className="text-white hover:text-white"><FaFacebookF /></Link>
            <Link to="/" className="text-white hover:text-white"><FaTwitter /></Link>
            <Link to="/" className="text-white hover:text-white"><FaYoutube /></Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Code School Hub. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/" className="hover:underline">Terms</Link>
          <Link to="/" className="hover:underline">Privacy</Link>
          <Link to="/" className="hover:underline">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer