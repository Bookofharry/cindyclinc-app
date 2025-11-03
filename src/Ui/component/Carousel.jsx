// src/components/Vision.jsx (File name should match the component name)

import React from "react";
import Logo from "../../assets/images/Logo.png"; // Keeping this import
import { Link } from "react-router-dom";
import {
  FaCalendarAlt, // Swapped to a cleaner icon
  FaClock,
  FaSearchPlus, // Swapped to a dedicated exam icon
  FaCheckCircle,
  FaBookOpen,
} from "react-icons/fa";

// --- Internal Helper Component for Flow Steps ---
/**
 * FlowStepCard - A clean, modular component for displaying a step in the booking flow.
 * Desktop: Two columns for visual hierarchy. Mobile: Stacks cleanly.
 */
function FlowStepCard({ icon, title, text }) {
  return (
    <div className="flow-step-card p-5 md:p-6 bg-gray-800 rounded-xl border border-indigo-500/20 transition-all duration-300 shadow-xl shadow-gray-900/50">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-full bg-indigo-600/20 text-indigo-400">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-white text-lg leading-snug">{title}</h4>
          <p className="text-sm text-gray-400 mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
}
// --- End Helper Component ---

/**
 * Vision — The Conversion Engine (Optimized for Appointment Booking)
 * - Aesthetic: Modern, high-contrast dark mode with premium subtle lighting.
 * - Mobile UI: Large, finger-friendly CTAs and vertically stacked steps.
 * - Desktop UI: Clean two-column layout for conversion focus.
 */
export default function Vision({
  title = "Secure Your Precision Eye Exam.",
  subtitle = "The fastest path to optimized vision. Book in under 60 seconds.",
  blurb = "Leverage our seamless digital platform to choose your service, secure your time slot, and get instant confirmation. Professional care, zero friction.",
  className = "",
}) {
  return (
    <section
      className={`w-full px-4 py-20 md:py-32 bg-gray-900 flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* Background Lighting Effect (Subtle, professional ambient light) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="w-1/2 h-full bg-indigo-500/5 absolute left-0 top-0 blur-3xl rounded-full" />
        <div className="w-1/2 h-full bg-sky-500/5 absolute right-0 bottom-0 blur-3xl rounded-full" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Headline & CTAs (Conversion Block) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Tagline/Metadata */}
            <p className="text-sm font-medium tracking-widest text-indigo-400 uppercase mb-4">
            D’Cindy Eye Care Platform
            </p>

            {/* Main Title (Larger on desktop, perfectly sized on mobile) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-indigo-300 font-medium mb-6">
              {subtitle}
            </p>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10">
              {blurb}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary CTA: High-Energy, High-Visibility */}
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-lg cta-primary transition-all duration-300 w-full sm:w-auto shadow-lg shadow-indigo-500/30"
              >
                <FaCalendarAlt className="w-5 h-5" />
                <span>Book Your Session Now</span>
              </Link>

              {/* Secondary CTA: Quick Access */}
              <Link
                to="/appointment#services"
                className="inline-flex items-center justify-center gap-3 text-indigo-300 px-8 py-4 rounded-xl font-medium border-2 border-gray-700 bg-transparent hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
              >
                <FaBookOpen className="w-5 h-5" />
                <span>View Our Service Menu</span>
              </Link>
            </div>
          </div>

          {/* Right: Flow Steps (Value Prop Visual) */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="space-y-6">
              <FlowStepCard
                icon={<FaSearchPlus className="w-6 h-6" />}
                title="1. Select Your Scope"
                text="Choose from Comprehensive Exam, Contact Lens Evaluation, or a Quick Checkup."
              />
              <FlowStepCard
                icon={<FaClock className="w-6 h-6" />}
                title="2. Confirm Date & Time"
                text="Access our real-time calendar, lock in your slot, and see estimated visit duration."
              />
              <FlowStepCard
                icon={<FaCheckCircle className="w-6 h-6" />}
                title="3. Receive Instant Access Key"
                text="Secure confirmation sent via email/SMS. You'll also receive intake forms and reminders."
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Local Styles for High-Impact Visuals (Tailwind Extensions) --- */}
      <style>{`
        /* Primary CTA Gradient/Hover Effect (Simplified and integrated) */
        .cta-primary {
          background-color: #4f46e5; /* indigo-600 */
        }
        .cta-primary:hover {
          background-color: #4338ca; /* indigo-700 */
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.4);
        }
        
        /* Mobile adjustment for better button sizing */
        @media (max-width: 640px) {
            .cta-primary, 
            .inline-flex {
                padding-left: 1.5rem; /* px-6 */
                padding-right: 1.5rem; /* px-6 */
            }
        }
      `}</style>
    </section>
  );
}