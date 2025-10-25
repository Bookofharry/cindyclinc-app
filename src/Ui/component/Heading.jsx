import React from "react";

/**
 * ClinicIntro — Clean heading + brief description for an eye clinic (frontend-only)
 * No CTAs, no interactivity. Pure presentational component.
 *
 * Props:
 * - eyebrow?: string (small label above the title)
 * - title?: string
 * - tagline?: string
 * - brief?: string
 * - points?: string[] (bullet highlights)
 * - align?: "left" | "center" (default: center)
 * - className?: string
 */
export default function ClinicIntro({
  eyebrow = "D’Cindy Eyecare",
  title = "Your Vision, Our Priority",
  tagline = "Give Your Eyes the Care They Deserve",
  brief =
    "Discover expert eye care services designed to protect and enhance your vision.",
  points = [
    "Comprehensive eye examinations",
    "Vision correction & lens advice",
    "Screening for glaucoma & cataract",
    "Stylish, comfortable frames",
  ],
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <section className={`w-full bg-sky-50 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className={isCenter ? "text-center" : "text-left"}>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700/80">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-sky-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {tagline && (
            <p className="mt-2 text-lg font-medium text-sky-800/90">{tagline}</p>
          )}

          {brief && (
            <p className={`mt-4 max-w-3xl text-base text-sky-900/80 ${isCenter ? "mx-auto" : ""}`}>
              {brief}
            </p>
          )}
        </div>

        {/* Highlights (frontend-friendly, semantic list) */}
        {points?.length > 0 && (
          <ul
            className={`mt-6 grid gap-3 sm:grid-cols-2 ${isCenter ? "max-w-4xl mx-auto" : ""}`}
          >
            {points.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white p-4 shadow-sm">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sky-900/90">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.414l-7.072 7.073a1 1 0 01-1.415 0L3.296 9.856a1 1 0 111.415-1.414l3.091 3.09 6.364-6.364a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
