// src/components/Vision.jsx (File name should match the component name)

import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaCalendarPlus,
  FaClock,
  FaVials,
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

// --- Internal Helper Component for Flow Steps ---
/**
 * FeatureTile - A clean, modular component for displaying a step in the booking flow.
 */
function FeatureTile({ icon, title, text }) {
  return (
    <div className="feature-tile p-5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div className="text-indigo-400 mb-3">{icon}</div>
      <h4 className="font-semibold text-white text-lg">{title}</h4>
      <p className="text-sm text-gray-300 mt-1">{text}</p>
    </div>
  );
}
// --- End Helper Component ---

/**
 * Vision — The Conversion Engine (Optimized for Appointment Booking)
 * - Focused on clear CTAs and a three-step process.
 * - Uses a darker, high-contrast, 'premium' aesthetic.
 */
export default function Vision({
  title = "Secure Your Precision Eye Exam.",
  subtitle = "The fastest path to clarity. Book in under 60 seconds.",
  blurb = "Leverage our seamless platform to choose your service, secure your time slot, and get instant confirmation. Professional care, zero friction.",
  className = "",
}) {
  return (
    <section
      className={`w-full px-4 py-16 md:py-24 bg-gray-900 flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* Background Gradient / Visual Noise */}
      <div className="absolute inset-0 opacity-20 bg-dot-grid-white" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Headline & CTAs (Conversion Block) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Logo/Brand Tagline (optional, can be removed if in header) */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img src={Logo} alt="Clinic Logo" className="w-10 h-10 mr-2" />
              <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase">
                Future of Vision Care
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-indigo-300 font-medium mb-6">
              {subtitle}
            </p>
            <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
              {blurb}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA: High-Energy Button */}
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-bold text-lg cta-pulse transition-all duration-300 shadow-lg"
              >
                <FaCalendarPlus className="w-5 h-5" />
                <span>Book Now: Get Started</span>
              </Link>

              {/* Secondary CTA: Quick Access */}
              <Link
                to="/appointment#services"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-medium border-2 border-indigo-500 bg-transparent hover:bg-indigo-600/10 transition-all duration-300"
              >
                <FaBookOpen className="w-5 h-5" />
                <span>Explore Services & Pricing</span>
              </Link>
            </div>
          </div>

          {/* Right: Flow Steps (Value Prop Visual) */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6 p-6 lg:p-10 bg-gray-800/80 rounded-3xl shadow-2xl border border-gray-700">
              <FeatureTile
                icon={<FaVials className="w-6 h-6" />}
                title="1. Select Your Scope"
                text="Choose from Comprehensive Exam, Contacts, or Quick Checkup."
              />
              <FeatureTile
                icon={<FaClock className="w-6 h-6" />}
                title="2. Confirm Date & Time"
                text="See real-time availability and lock in your preferred slot."
              />
              <div className="col-span-2">
                <FeatureTile
                  icon={<FaCheckCircle className="w-6 h-6" />}
                  title="3. Instant Confirmation"
                  text="Secure your booking with minimum patient data. Get text/email reminders."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Local Styles for High-Impact Visuals (Tailwind Extensions) --- */}
      <style>{`
        /* Primary CTA Gradient/Pulse */
        .cta-pulse {
          background: linear-gradient(145deg, #4c66ff 0%, #20359f 100%);
          box-shadow: 0 8px 25px rgba(76, 102, 255, 0.4);
        }
        .cta-pulse:hover {
          background: linear-gradient(145deg, #5f77ff 0%, #3045ae 100%);
          transform: scale(1.02);
        }
        
        /* Background Dot Grid Pattern */
        .bg-dot-grid-white {
          background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Blob Animation (for dynamic background elements) */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.64, 0.57, 0.67, 1.53);
        }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}