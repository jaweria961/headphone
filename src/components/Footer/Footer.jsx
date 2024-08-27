import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details */}
          <div>
            <h1 className="text-3xl font-bold uppercase">Our Company</h1>
            <p className="text-sm max-w-[300px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </p>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <FaPhone />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapMarkerAlt /> Noida, Uttar Pradesh
              </p>
            </div>
          </div>

          {/* Footer Links Section */}
          <div>
            <h2 className="text-2xl font-bold uppercase">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links section */}
          <div>
            <h2 className="text-2xl font-bold uppercase">Follow Us</h2>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-secondary">
                {/* Replace with actual social icons */}
                <FaPhone /> {/* Example Icon */}
              </a>
              <a href="#" className="hover:text-secondary">
                <FaPhone /> {/* Example Icon */}
              </a>
              <a href="#" className="hover:text-secondary">
                <FaPhone /> {/* Example Icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-sm">
          © 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
