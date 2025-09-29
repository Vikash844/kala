// components/Footer.js
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d1b2a] to-[#1b263b] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            {[
              "About us",
              "Contact Us",
              "List Your Show",
              "Explore Projects",
              "Register as Brand",
              "Career",
              "Explore Events",
              "Awards Shows",
              "Talent Agencies",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {[
              "Terms & Condition",
              "Privacy Policy",
              "Disclaimer",
              "Advertise With Us",
              "Membership",
              "Platinum Artist",
              "Blog",
              "Exclusive Artist",
              "Venues & Clubs",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Artists & Creators */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Artists & Creators</h3>
          <ul className="space-y-2">
            {[
              "Artist Testimonials",
              "Top Creators",
              "Trending Influencers",
              "Top Influencers in India",
              "Music Studios",
              "Moody Square",
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="material-icons">email</span>
              <a href="mailto:info@kalasquare.com" className="hover:text-white">
                info@kalasquare.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">phone</span>
              <a href="tel:+919876543210" className="hover:text-white">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">location_on</span>
              <span>Delhi, India</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-600 rounded-lg hover:scale-110 transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="p-2 bg-pink-600 rounded-lg hover:scale-110 transition">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="p-2 bg-red-600 rounded-lg hover:scale-110 transition">
                <FaYoutube className="text-white" />
              </a>
              <a href="#" className="p-2 bg-sky-500 rounded-lg hover:scale-110 transition">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2025 <span className="font-semibold text-white">Kala Square.</span> All rights reserved.
      </div>
    </footer>
  );
}
