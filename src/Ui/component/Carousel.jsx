import React from "react";
import Logo from '../../assets/images/Logo.png'
import { Link } from "react-router-dom";
import {
  FaEye,
  FaCalendarCheck,
  FaGlasses,
  FaEyeDropper,
  FaHeartbeat,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

/**
 * Vision (EyeCare hero) — React + Tailwind
 *
 * Usage:
 *   <Vision onBook={() => navigate('/book')} onExplore={() => navigate('/shop')} />
 *
 * Props:
 * - title, subtitle, blurb: strings to override default copy
 * - onBook, onExplore: click handlers for CTAs
 * - className: extra wrapper classes
 */
export default function Vision({
  title = "Your Vision, Our Priority",
  subtitle = "Give Your Eyes the Care They Deserve",
  blurb =
    "Discover expert eye care services designed to protect and enhance your vision. See better, live better.",
  onBook,
  onExplore,
  className = "",
}) {


  return (
    <section  className={`min-h-[70vh] w-full px-4 py-8 md:py-12 flex items-center justify-center ${className}`}>
      <div  className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-sky-300 to-white-600">
        <div className="grid md:grid-cols-2">
          {/* Left: Visual */}
          <div className="hidden md:flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <div className="relative z-10 text-center">
              <div className="mb-8 text-white animate-bounce">
                <img src={Logo} alt="" />
                {/* <FaEye className="w-24 h-24 md:w-28 md:h-28 inline-block" /> */}
              </div>
              <p className="text-white/95 text-lg font-medium">
                Clear Vision for a Brighter Tomorrow
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10" />
          </div>

          {/* Right: Copy */}
          <div className="bg-white p-8 md:p-12">
            <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{title}</h1>
              <p className="text-gray-600 mb-4">{subtitle}</p>
              <p className="text-gray-700">{blurb}</p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium btn-primary transition-all duration-300"
                >
                  <FaCalendarCheck />
                  <Link to='/appointment'><span>Book Appointment</span></Link>
                </button>
                <button
                  
                  className="inline-flex items-center gap-2 text-indigo-700 px-6 py-3 rounded-full font-medium border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  <FaGlasses />
                  <Link to='/shop' ><span>Explore Eyecare Products</span></Link>
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <ServiceCard
                icon={<FaEyeDropper className="w-5 h-5" />}
                title="Comprehensive Exams"
                text="Thorough eye health assessments"
              />
              <ServiceCard
                icon={<FaGlasses className="w-5 h-5" />}
                title="Vision Correction"
                text="Personalized solutions"
              />
              <ServiceCard
                icon={<FaHeartbeat className="w-5 h-5" />}
                title="Disease Management"
                text="Specialized treatments"
              />
              <ServiceCard
                icon={<FaShoppingBag className="w-5 h-5" />}
                title="Premium Frames"
                text="Stylish & comfortable"
              />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-indigo-50 p-8 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Trusted by Thousands</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 italic mb-4">
              "The care I received was exceptional. My vision has never been clearer!"
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
