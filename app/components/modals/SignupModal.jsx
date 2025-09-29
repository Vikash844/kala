"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEnvelope, FaTimes, FaArrowLeft } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function SignupModal({ isOpen, onClose, onSelect }) {
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handlePhoneClick = () => {
    setShowPhoneInput(true);
  };

  const handleContinue = () => {
    if (phone.length >= 10) {
      console.log("Phone submitted:", phone);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-[92%] sm:w-[88%] max-w-md overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          aria-label="Close sign up"
        >
          <FaTimes size={18} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-2">Get Started</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Choose how you want to sign up
          </p>

          {/* Social + Mobile Options */}
          {!showPhoneInput && (
            <>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="py-2.5 border text-red-600 border-red-600 rounded-md font-medium hover:bg-red-700 hover:text-white transition-colors">
                  Register as Artist
                </button>
                <button className="py-2.5 border border-red-600 text-red-600 rounded-md font-medium hover:bg-red-700 hover:text-white transition-colors">
                  Register as Brand
                </button>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                  <FcGoogle size={20} />
                  <span className="flex-1 text-left">Continue with Google</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                  <FaEnvelope size={18} className="text-gray-600" />
                  <span className="flex-1 text-left">Continue with Email</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                  <FaApple size={20} className="text-gray-600" />
                  <span className="flex-1 text-left">Continue with Apple</span>
                </button>
              </div>

              <div className="flex items-center my-5">
                <div className="flex-1 border-t" />
                <span className="px-2 text-gray-400 text-sm">OR</span>
                <div className="flex-1 border-t" />
              </div>

              <button
                onClick={handlePhoneClick}
                className="w-full flex items-center gap-3 px-4 py-2.5 border rounded-md hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India"
                    className="w-5 h-5"
                  />
                  +91
                </span>
                <span className="flex-1 text-left text-gray-600">
                  Continue with mobile number
                </span>
                <MdOutlinePhoneIphone size={18} className="text-gray-500" />
              </button>
            </>
          )}

          {/* Phone Input Mode */}
          {showPhoneInput && (
            <div className="space-y-4">
              {/* Back Button */}
              <button
                onClick={() => setShowPhoneInput(false)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-2"
              >
                <FaArrowLeft /> Back
              </button>

              <label className="block text-sm text-gray-600">
                Enter your mobile number
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="w-5 h-5 mr-2"
                />
                <span className="mr-2">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  maxLength={10}
                  className="flex-1 outline-none text-gray-800"
                  placeholder="Enter mobile number"
                />
              </div>
              <button
                onClick={handleContinue}
                disabled={phone.length < 10}
                className={`w-full py-2.5 rounded-md font-medium transition-colors ${
                  phone.length < 10
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Continue
              </button>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            {" & "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
