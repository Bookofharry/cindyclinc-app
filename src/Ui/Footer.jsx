// src/components/Footer.jsx

import React from "react";
import { Link } from "react-router-dom"; // Use Link for internal navigation
import Logo from '../assets/images/Logo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub, // Added GitHub for a developer touch
  FaHeart,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

/**
 * CleanTechFooter - A high-contrast, structured footer component.
 * - Uses a dark background for a modern SaaS aesthetic.
 * - Links are grouped logically for user clarity.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 text-gray-400">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-5">
          
          {/* Column 1: Logo & Brand */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-10">
            <Link to="/" className="flex items-center space-x-3">
                <img src={Logo} alt="D’Cindy Eyecare Logo" className="w-40 h-20" />
                
            </Link>
            <p className="text-sm text-gray-500 max-w-sm">
              Precision vision care meets modern technology. Book your appointment seamlessly and securely.
            </p>
          </div>

          {/* Column 2: Platform Links (Products/Features) */}
          <div className="space-y-4">
            <h3 className="tracking-widest uppercase text-sm font-semibold text-white mb-3">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/features" className="hover:text-indigo-400 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/appointments" className="hover:text-indigo-400 transition-colors">Book Now</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div className="space-y-4">
            <h3 className="tracking-widest uppercase text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Resources & Social */}
          <div className="space-y-4">
            <h3 className="tracking-widest uppercase text-sm font-semibold text-white mb-3">Resources</h3>
            
            {/* Social Icons (Refactored using React Icons) */}
            <div className="flex space-x-4">
              <a href="#" title="Facebook" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" title="Twitter" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" title="Instagram" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/developer-link" title="GitHub" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
            
            <p className="pt-2 text-sm text-gray-500">
                <Link to="/support" className="hover:text-indigo-400 transition-colors">
                    Help & Support
                </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom: Copyright & Attribution */}
      <div className="border-t border-gray-700/50 py-6">
        <div className="container mx-auto px-4 text-sm text-center">
          <p className="text-gray-500">
            &copy; {currentYear} D’Cindy Eyecare. All rights reserved. <br />
            <span className="ml-4">
              Built with <FaHeart className="inline w-3 h-3 text-red-500 mx-1" /> by 
              <a 
                href="https://wa.me/2348104377665" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-400 hover:text-indigo-300 font-medium ml-1"
              >
                Dev Harry
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}