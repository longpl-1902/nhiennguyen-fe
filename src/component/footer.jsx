import React from "react";
import logo from "../assets/images/logo.png"; // adjust this path as needed
import twitterLogo from "../assets/images/twitter.jpg";
import threadLogo from "../assets/images/thr.jpg";
import igLogo from "../assets/images/igg.jpg";
import fbLogo from "../assets/images/fb.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#EEE7E7] text-gray-800 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mr-5">
        {/* Logo + Subscribe */}
        <div>
          <img src={logo} alt="Tinh Logo" className="h-16 mb-6" />

          <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-5 py-3 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Class Schedules</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Memberships</a></li>
            <li><a href="#" className="hover:underline">Updates</a></li>
            <li><a href="#" className="hover:underline">Changelog</a></li>
          </ul>
        </div>

        {/* Tĩnh Meditation */}
        <div>
          <h3 className="font-semibold mb-4">Tĩnh Meditation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Culture</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="font-semibold mb-4">Follow</h3>
          <div className="grid grid-cols-2 gap-3">
            <img src={twitterLogo} className="bg-gray-100 rounded-xl h-24 w-24"></img>
            <img src={threadLogo} className="bg-gray-100 rounded-xl h-24 w-24"></img>
            <img src={igLogo} className="bg-gray-100 rounded-xl h-24 w-24"></img>
            <img src={fbLogo} className="bg-gray-100 rounded-xl h-24 w-24"></img>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-500" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-gray-700">
          Copyright © 2025 Tĩnh Wellness | All Rights Reserved
        </p>

        <div className="flex space-x-3">
          {[
            "facebook-f",
            "twitter",
            "instagram",
            "linkedin-in",
            "youtube",
          ].map((icon) => (
            <a
              key={icon}
              href="#"
              className="bg-gray-300 hover:bg-gray-500 hover:text-white p-2 rounded-lg transition"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;