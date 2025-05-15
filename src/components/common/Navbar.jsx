import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import logoDark from "../../assets/images/logo/dark-logo.png"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 md:text-3xl font-bold text-blue-600">
                        <img src={logoDark} alt="" width={60} height={60} className="rounded-full" />
                        <h2 className="gradient-text">CodeSchool</h2>
                    </div>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="">Home</Link>
                        <Link to="/" className="">About</Link>
                        <Link to="/" className="">Services</Link>
                        <Link to="/" className="">Contact</Link>
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
                        <Link to="/" className="block px-3 py-2 ">Home</Link>
                        <Link to="/" className="block px-3 py-2 ">About</Link>
                        <Link to="/" className="block px-3 py-2 ">Services</Link>
                        <Link to="/" className="block px-3 py-2 ">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
