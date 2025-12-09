import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import LanguageSwitcher from "./language";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const lang_icons = {
    en: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    vi: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  }

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-[#EEE7E7]">
      {/* Left Nav */}
    <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition"
            : "hover:text-gray-600 transition"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition"
            : "hover:text-gray-600 transition"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/class-schedule"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition"
            : "hover:text-gray-600 transition"
        }
      >
        Class Schedules
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition"
            : "hover:text-gray-600 transition"
        }
      >
        Services
      </NavLink>
    </nav>


      {/* Center Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Tinh Logo" className="h-15 w-auto mx-auto" />
      </div>

      {/* Right Nav */}
      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/register" className="bg-[#360185] hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-full">
          REGISTER NOW
        </NavLink>
        <LanguageSwitcher/>
      </div>

      {/* Mobile Menu Button (Animated) */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-between w-6 h-5 relative group"
      >
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`z-100 absolute top-full left-0 w-full bg-gray-200 text-gray-800 text-center space-y-3 py-4 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition block"
            : "hover:text-gray-600 transition block"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about-us"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition block"
            : "hover:text-gray-600 transition block"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/class-schedule"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition block"
            : "hover:text-gray-600 transition block"
        }
      >
        Class Schedules
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition block"
            : "hover:text-gray-600 transition block"
        }
      >
        Services
      </NavLink>
        
        <button className="w-100 mx-auto bg-gray-600 text-white px-6 py-2 rounded-full block">
          REGISTER NOW
        </button>
      </div>
    </header>
  );
};

export default Header;
