// src/components/Vision.jsx
import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaCalendarCheck,
  FaGlasses,
  FaEyeDropper,
  FaHeartbeat,
  FaUser,
} from "react-icons/fa";

/**
 * Vision — Appointment-focused hero (rephrased & structured for booking data)
 * - Copy emphasizes scheduling flow (service → date/time → patient details → confirmation)
 * - Buttons link to the appointment page/section
 */
export default function Vision({
  title = "Book Your Eye Appointment",
  subtitle = "Professional care, convenient scheduling",
  blurb =
    "Select a service, choose a date and time, and we’ll reserve your slot. Same-day and weekend availability when open.",
  className = "",
}) {
  return (
    <section
      className={`min-h-[70vh] w-full px-4 py-8 md:py-12 flex items-center justify-center ${className}`}
    >
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-sky-300 to-white">
        <div className="grid md:grid-cols-2">
          {/* Left: Visual */}
          <div className="hidden md:flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <div className="relative z-10 text-center">
              <div className="mb-6 text-white animate-bounce">
                <img src={Logo} alt="Clinic logo" className="mx-auto w-76 h-auto" />
              </div>
              <p className="text-white/95 text-lg font-medium">
                Easy, fast, and reliable scheduling
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10" />
          </div>

          {/* Right: Copy */}
          <div className="bg-white p-8 md:p-12">
            <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                {title}
              </h1>
              <p className="text-gray-600 mb-4">{subtitle}</p>
              <p className="text-gray-700">{blurb}</p>

              <div className="flex flex-wrap gap-4 mt-8">
                {/* Primary: Schedule */}
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium btn-primary transition-all duration-300"
                >
                  <FaCalendarCheck />
                  <span>Schedule an Appointment</span>
                </Link>

                {/* Secondary: Hours/Slots (adjust anchor to match your page) */}
                <Link
                  to="/appointment#availability"
                  className="inline-flex items-center gap-2 text-indigo-700 px-6 py-3 rounded-full font-medium border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <FaGlasses />
                  <span>View Clinic Hours & Slots</span>
                </Link>
              </div>
            </div>

            {/* Appointment Flow / Services */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <ServiceCard
                icon={<FaEye className="w-5 h-5" />}
                title="1) Choose a Service"
                text="Eye exam, consultation, lens fitting, and more."
              />
              <ServiceCard
                icon={<FaCalendarCheck className="w-5 h-5" />}
                title="2) Pick Date & Time"
                text="Select the slot that fits your schedule."
              />
              <ServiceCard
                icon={<FaUser className="w-5 h-5" />}
                title="3) Patient Details"
                text="Provide your name, contact, and preferences."
              />
              <ServiceCard
                icon={<FaHeartbeat className="w-5 h-5" />}
                title="4) Confirmation"
                text="Receive booking confirmation and reminders."
              />
            </div>
          </div>
        </div>

        {/* Testimonial (kept, but rephrased toward appointments) */}
        <div className="bg-indigo-50 p-8 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Patients love our simple booking
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 italic mb-4">
              “Booking was quick and easy, and the exam was thorough. Highly
              recommend!”
            </p>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center mr-3">
                <FaUser className="text-indigo-700" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Patient since 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles for gradient button (kept minimal and scoped) */}
      <style>{`
        .btn-primary { background: linear-gradient(135deg, #4a6cf7 0%, #2541b2 100%); box-shadow: 0 0 0 rgba(0,0,0,0); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37, 65, 178, 0.3); }
      `}</style>
    </section>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="service-card group bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-indigo-600 mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
