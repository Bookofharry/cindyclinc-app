// src/components/ClinicServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaGlasses,
  FaEyeDropper,
  FaHeartbeat,
  FaStethoscope,
  FaLaptopMedical,
} from "react-icons/fa";

/**
 * ClinicServices — Home page services section for Cindy Eye Care Clinic
 *
 * Props:
 * - title?: string
 * - subtitle?: string
 * - services?: Array<{ id: string; title: string; blurb: string; icon?: React.ReactNode; href?: string }>
 * - seeAllHref?: string (e.g., "/services")
 * - className?: string
 */
export default function ClinicServices({
  title = "Our Services",
  subtitle = "Comprehensive eye care for every stage of life.",
  services = DEFAULT_SERVICES,
  seeAllHref = "/services",
  className = "",
}) {
  return (
    <section className={`w-full bg-sky-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700/80">
              Cindy Eye Care Clinic
            </p>
            <h2 className="mt-1 text-2xl font-bold text-sky-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-1 text-sm text-sky-900/70">{subtitle}</p>
          </div>

          {seeAllHref && (
            <Link
              to={seeAllHref}
              className="whitespace-nowrap rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-medium text-sky-900 shadow-sm hover:bg-sky-100"
            >
              See all services
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ id, title, blurb, icon, href }) {
  // Make two responsive versions of the provided icon
  const mobileIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon, {
          size: 22,
          className: `${icon.props.className || ""} shrink-0`.trim(),
        })
      : null;

  const desktopIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon, {
          size: 28,
          className: `${icon.props.className || ""} shrink-0`.trim(),
        })
      : null;

  const content = (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* MOBILE ICON (shown on <sm>) */}
      {mobileIcon && (
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700 sm:hidden">
          {mobileIcon}
        </div>
      )}
      {/* DESKTOP/TABLET ICON (shown on ≥sm) */}
      {desktopIcon && (
        <div className="mb-3 hidden h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 sm:inline-flex">
          {desktopIcon}
        </div>
      )}

      <h3 className="text-base font-semibold text-sky-950">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-sky-900/80">{blurb}</p>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-800 transition group-hover:text-sky-900">
        Learn more
        <svg
          className="h-4 w-4 transition group-hover:translate-x-0.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.6"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
        </svg>
      </span>
    </div>
  );

  return href ? (
    <Link to={href} aria-label={title} className="h-full">
      {content}
    </Link>
  ) : (
    <div className="h-full">{content}</div>
  );
}

const DEFAULT_SERVICES = [
  {
    id: "comprehensive-exams",
    title: "Comprehensive Eye Exams",
    blurb:
      "Full vision checks and ocular health screening to detect refractive errors and early eye disease.",
    icon: <FaEye className="h-5 w-5" />,
    href: "/services/comprehensive-exams",
  },
  {
    id: "vision-correction",
    title: "Vision Correction & Lenses",
    blurb:
      "Prescription glasses and lens options including anti-glare, blue-light filter, and photochromic.",
    icon: <FaGlasses className="h-5 w-5" />,
    href: "/services/vision-correction",
  },
  {
    id: "contact-lens-fitting",
    title: "Contact Lens Fitting",
    blurb:
      "Evaluation, trial fitting, and aftercare for soft, toric, and daily disposables to ensure comfort and clarity.",
    icon: <FaEyeDropper className="h-5 w-5" />,
    href: "/services/contact-lens-fitting",
  },
  {
    id: "dry-eye-care",
    title: "Dry Eye & Irritation Care",
    blurb:
      "Targeted assessment and treatment plans for dryness, redness, and screen-related eye strain.",
    icon: <FaLaptopMedical className="h-5 w-5" />,
    href: "/services/dry-eye-care",
  },
  {
    id: "disease-screening",
    title: "Glaucoma & Cataract Screening",
    blurb:
      "Risk assessment and monitoring with timely referrals for advanced care when needed.",
    icon: <FaHeartbeat className="h-5 w-5" />,
    href: "/services/disease-screening",
  },
  {
    id: "co-management",
    title: "Surgery Co-management",
    blurb:
      "Pre- and post-operative coordination for cataract and refractive procedures with partner surgeons.",
    icon: <FaStethoscope className="h-5 w-5" />,
    href: "/services/surgery-co-management",
  },
];
