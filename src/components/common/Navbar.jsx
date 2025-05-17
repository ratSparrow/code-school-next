import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import logoDark from "../../assets/images/logo/dark-logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const renderLink = (path, label) => (
        <Link
            to={path}
            className={`py-2 px-1 inline-flex items-center gap-2 border-b-[2px] whitespace-nowrap 
        ${location.pathname === path
                    ? "font-normal border-[#8B5CF6] gradient-text-primary"
                    : "border-transparent text-defaulttextcolor hover:text-blue-700"
                }`}
            onClick={() => setIsOpen(false)}
        >
            {label}
        </Link>
    );
    const renderAnchors = (path, label) => (
        <a
            href={path}
            className={`py-2 px-1 inline-flex items-center gap-2 border-b-[2px] whitespace-nowrap 
        ${location.pathname === path
                    ? "font-normal border-[#8B5CF6] gradient-text-primary"
                    : "border-transparent text-defaulttextcolor hover:text-blue-700"
                }`}
            onClick={() => setIsOpen(false)}
        >
            {label}
        </a>
    );

    return (
        <nav className="w-full py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/">
                        <div className="flex items-center gap-3 md:text-3xl font-bold text-blue-600">
                            <img src={logoDark} alt="" width={60} height={60} className="rounded-full" />
                            <h2 className="gradient-text-primary text-xxxlarge">CodeSchool</h2>
                        </div>
                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {renderLink("/", "Home")}
                        {renderAnchors("#whatyoulearn", "What You Learn")}
                        {renderAnchors("#whoisfor", "Who Is For")}
                        {renderAnchors("#features", "Features")}
                        {renderAnchors("#timeline", "Timeline")}
                        {renderAnchors("#projects", "Projects")}
                        {renderAnchors("#instrctor", "Instructor")}
                        {renderAnchors("#pricing", "Pricing")}
                        {renderAnchors("#faq", "FAQ")}

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {renderLink("/", "Home")}
                        {renderAnchors("#whatyoulearn", "What You Learn")}
                        {renderAnchors("#whoisfor", "Who Is For")}
                        {renderAnchors("#features", "Features")}
                        {renderAnchors("#timeline", "Timeline")}
                        {renderAnchors("#projects", "Projects")}
                        {renderAnchors("#instrctor", "Instructor")}
                        {renderAnchors("#pricing", "Pricing")}
                        {renderAnchors("#faq", "FAQ")}
                    </div>
                </div>
            )}
        </nav>
    );
}
