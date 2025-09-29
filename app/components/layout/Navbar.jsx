"use client";
import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import SignupModal from "../modals/SignupModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("New Delhi");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const openSignup = () => {
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  const handleLocationSelect = (city) => {
    setSelectedLocation(city);
    setIsLocationOpen(false);
  };

  const handleSignupSelect = (type) => {
    // TODO: connect routes like `/signup/${type}` or actions
    // Example: router.push(`/signup/${type}`)
    closeSignup();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-red-600">Kala</span>
                <span className="text-red-600">Square<sup className="text-xs align-top">®</sup></span>
              </h1>
            </a>
          </div>
          <div className="hidden lg:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <button 
                onClick={toggleLocation}
                className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {selectedLocation} <MdKeyboardArrowDown className="ml-1 h-4 w-4" />
              </button>
              
              {isLocationOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="py-1">
                    <button type="button" onClick={() => handleLocationSelect("Mumbai")} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mumbai</button>
                    <button type="button" onClick={() => handleLocationSelect("Delhi")} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delhi</button>
                    <button type="button" onClick={() => handleLocationSelect("Bangalore")} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bangalore</button>
                    <button type="button" onClick={() => handleLocationSelect("Chennai")} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Chennai</button>
                  </div>
                </div>
              )}
            </div>

            <button onClick={openSignup} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200">
              Sign up
            </button>

            <button
              className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex justify-center bg-gray-100 py-2">
        <div className="flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors py-2">Hire Talent</a>
          <a href="#" className="hover:text-gray-900 transition-colors py-2">Top Creators</a>
          <a href="#" className="hover:text-gray-900 transition-colors py-2">Events & Shows</a>
          <a href="#" className="hover:text-gray-900 transition-colors py-2">Exclusive</a>
          <a href="#" className="hover:text-gray-900 transition-colors py-2">Talent Management</a>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700 placeholder-gray-400"
              />
            </div>
            
            <div className="py-2">
              <span className="text-sm text-gray-600">Location: </span>
              <button className="flex items-center text-sm text-gray-700">
                {selectedLocation} <MdKeyboardArrowDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-gray-900 border-b border-gray-200">Hire Talent</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-gray-900 border-b border-gray-200">Top Creators</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-gray-900 border-b border-gray-200">Events & Shows</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-gray-900 border-b border-gray-200">Exclusive</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-gray-900">Talent Management</a>
            </div>
          </div>
        </div>
      )}

      <SignupModal isOpen={isSignupOpen} onClose={closeSignup} onSelect={handleSignupSelect} />
    </header>
  );
}
