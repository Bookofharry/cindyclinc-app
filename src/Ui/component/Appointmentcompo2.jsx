// src/components/BookingGuideCindy.jsx
import React, { useState } from "react";

/**
 * Cindy Eye Care — Booking Guide & Assurances
 * - Simple step-by-step booking guidance
 * - What to expect, prep tips, aftercare
 * - Quality assurances & policies
 * - Mini FAQ with collapsible answers
 * - No external libraries
 */

export default function BookingGuideCindy() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white text-slate-800">
      {/* Intro / Promise */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Booking Made Easy—And Care You Can Trust
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              At <span className="font-semibold">The Cindy Eye Care</span>, your comfort and clarity come first.
              This guide walks you through booking, what happens during your visit, and how we make sure
              your eyewear feels designed for your life—every single day.
            </p>
          </div>
          <AssuranceCard />
        </div>
      </div>


      {/* How Booking Works */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
          How to Book in 3 Simple Steps
        </h3>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          <Step
            number={1}
            title="Choose Your Service"
            desc="Eye exam, prescription renewal, frame styling, or contact lens fitting."
          />
          <Step
            number={2}
            title="Pick a Date & Time"
            desc="Select a convenient day and a slot—mornings are great for detailed fittings."
          />
          <Step
            number={3}
            title="Confirm & Get Ref"
            desc="Enter your details, confirm, and receive a booking reference for easy follow-up."
          />
        </ol>
        <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
          Tip: Bring your current glasses, lens prescriptions, and any symptoms you’ve noticed recently.
        </div>
      </div>






    </section>
  );
}

/* ===== Reusable bits ===== */

function AssuranceCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-base font-semibold text-slate-900">Our Assurances</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        <li className="flex items-start gap-2">
          <Check /> Accurate prescriptions with transparent recommendations.
        </li>
        <li className="flex items-start gap-2">
          <Check /> Curated frames + premium lenses for real-world comfort.
        </li>
        <li className="flex items-start gap-2">
          <Check /> Free adjustments and fit checks—anytime.
        </li>
        <li className="flex items-start gap-2">
          <Check /> Friendly team, clean clinic, and on-time appointments.
        </li>
      </ul>
    </div>
  );
}

function Reason({ title, desc, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex items-center justify-center rounded-xl border border-sky-100 bg-sky-50 p-3">
        <Icon className="h-5 w-5 text-sky-700" />
      </div>
      <h4 className="mt-3 text-base font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
          {number}
        </span>
        <h5 className="text-base font-semibold text-slate-900">{title}</h5>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </li>
  );
}

function InfoBlock({ title, points, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-sky-700" />
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <Bullet /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Policy({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h5 className="text-base font-semibold text-slate-900">{title}</h5>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
      </svg>
    </span>
  );
}
function Bullet() {
  return (
    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-600" aria-hidden="true" />
  );
}

/* ===== Inline icons (no external libs) ===== */
function IconLens(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M4 12a8 8 0 1113.86 5.36l2.39 2.39-1.41 1.41-2.39-2.39A8 8 0 014 12zm8-6a6 6 0 100 12A6 6 0 0012 6z" />
    </svg>
  );
}
function IconScan(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M3 7h18v2H3V7zm0 8h18v2H3v-2zm2-6h2v6H5V9zm10 0h2v6h-2V9z" />
    </svg>
  );
}
function IconScreen(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M3 5h18v12H3zM1 19h22v2H1z" />
    </svg>
  );
}
function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M7 2h2v2h6V2h2v2h3a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h3V2zm13 7H4v10h16V9z" />
    </svg>
  );
}
function IconChecklist(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M7 5h14v2H7V5zm0 6h14v2H7v-2zm0 6h14v2H7v-2zM3 5h2v2H3V5zm0 6h2v2H3v-2zm0 6h2v2H3v-2z" />
    </svg>
  );
}
function IconCare(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.33-8A5.67 5.67 0 116 5.67 5.67 5.67 0 1112 9a5.67 5.67 0 116-3.33C22.33 9 12 21 12 21z" />
    </svg>
  );
}

/* ===== Local FAQ ===== */
const FAQS = [
  {
    q: "How long does an eye exam take?",
    a: "Most comprehensive exams take 20–30 minutes. If you also want frame styling or contact lens fitting, allow an extra 15 minutes.",
  },
  {
    q: "Do you offer blue-light protection?",
    a: "Yes. We provide blue-light filters across single-vision, bifocal, and progressives. They help reduce eyestrain during long screen sessions.",
  },
  {
    q: "Can I reschedule my booking?",
    a: "Absolutely. Use your booking reference to contact us via WhatsApp, SMS, or phone and we’ll find a new time that suits you.",
  },
  {
    q: "Do you adjust frames I already own?",
    a: "Yes, we’re happy to adjust and refit existing frames when compatible with your prescription and lens type.",
  },
];
