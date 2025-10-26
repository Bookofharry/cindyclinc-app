// src/pages/AboutCindyCreative.jsx
import React, { useState } from "react";

export default function AboutCindyCreative() {
  const [tab, setTab] = useState("mission");
  const [open, setOpen] = useState(null);

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-800">
      {/* Hero with Glassmorphism card */}
      <section className="relative overflow-hidden">
        <BlobDecor />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">
                <Sparkle className="h-3.5 w-3.5" /> Since 2015
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                See Clearly, Live Brightly—<span className="text-sky-700">Cindy Eye Care</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 md:text-xl">
                Experience Unmatched Clarity and Comfort with Eyewear Designed for Your Life.
                At The Cindy Eye Care, we offer advanced optics with stylish frames. From prescription
                glasses to blue light protection, we’ve got you covered.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/book-appointment"
                  className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  Book an Eye Exam
                </a>
                <a
                  href="/about"
                  className="rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:border-sky-300 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  Our Story
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/40 bg-white/60 p-4 shadow-xl backdrop-blur">
                <img
                  src="/images/cindy-eyecare/frames-wall.jpg"
                  alt="Display of stylish frames at Cindy Eye Care"
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
              </div>

              {/* Floating quality badges */}
              <div className="pointer-events-none absolute -right-6 -top-6 hidden md:block">
                <Badge title="Medical-Grade Lenses" />
              </div>
              <div className="pointer-events-none absolute -left-10 bottom-10 hidden md:block">
                <Badge title="Lifestyle Fitting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Mission / Promise / Technology */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-4 md:py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2">
            <TabButton active={tab === "mission"} onClick={() => setTab("mission")}>
              Our Mission
            </TabButton>
            <TabButton active={tab === "promise"} onClick={() => setTab("promise")}>
              Our Promise
            </TabButton>
            <TabButton active={tab === "tech"} onClick={() => setTab("tech")}>
              Our Technology
            </TabButton>
          </div>

          <div className="mt-6">
            {tab === "mission" && (
              <Panel
                title="Personalized Clarity for Every Life"
                points={[
                  "Care that starts with listening: your routine, your work, your screens.",
                  "Clear recommendations for lenses, coatings, and frames—no upsell pressure.",
                  "Confidence that your eyewear looks great and feels effortless all day.",
                ]}
                kicker="Clarity, comfort, and style—without compromise."
              />
            )}
            {tab === "promise" && (
              <Panel
                title="The Cindy Care Promise"
                points={[
                  "Accurate refractions, honest prescriptions, and transparent pricing.",
                  "Free frame adjustments & fit checks for the lifetime of your glasses.",
                  "30-day comfort guarantee on premium lenses and coatings.",
                ]}
                kicker="If it doesn’t feel right, we’ll make it right."
              />
            )}
            {tab === "tech" && (
              <Panel
                title="Advanced Optics, Real-World Comfort"
                points={[
                  "High-index, polycarbonate, and Trivex options for lighter, thinner lenses.",
                  "Anti-glare, UV400, and blue-light filters for screen-heavy days.",
                  "Digital surfacing for precise vision across the entire lens.",
                ]}
                kicker="Engineered for your lifestyle—from studio lights to late-night emails."
              />
            )}
          </div>
        </div>
      </section>

      {/* Value Cards */}
      {/* <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<LensIcon />}
            title="Advanced Optics"
            desc="Progressives, photochromics, and anti-glare coatings tuned to your day."
          />
          <ValueCard
            icon={<FrameIcon />}
            title="Style that Fits"
            desc="Minimal titanium, bold acetates, and classic silhouettes for every face."
          />
          <ValueCard
            icon={<ShieldIcon />}
            title="Blue-Light Comfort"
            desc="Reduce strain and keep focus sharp during long screen sessions."
          />
          <ValueCard
            icon={<HeartIcon />}
            title="Gentle, Precise Care"
            desc="Warm service, exact measurements, and lifetime adjustments."
          />
        </div>
      </section> */}

      {/* Story Timeline */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">
            The Cindy Eye Care Journey
          </h2>
          <div className="mx-auto mt-10 max-w-3xl">
            <ol className="relative border-l border-slate-200 pl-6">
              <TimelineItem
                year="2015"
                title="A Clear Vision"
                text="We opened our doors with a simple goal: precision care that feels like family."
              />
              <TimelineItem
                year="2018"
                title="Lens Labs & Digital Fitting"
                text="Upgraded to digital surfacing partners and introduced lifestyle-based fittings."
              />
              <TimelineItem
                year="2022"
                title="Screen-Smart Solutions"
                text="Expanded blue-light, UV, and photochromic options for modern work and play."
              />
              <TimelineItem
                year="Today"
                title="Clarity for Every Day"
                text="Thousands of happy patients later, our promise remains the same—care without compromise."
              />
            </ol>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <h3 className="text-center text-xl font-semibold text-slate-900 md:text-2xl">
          Quick Answers
        </h3>
        <div className="mx-auto mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {FAQS.map((q, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="group block w-full text-left"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="font-medium text-slate-900">{q.q}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
              <div
                className={`px-5 pb-4 text-slate-600 transition-[grid-template-rows] ${
                  open === i ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
                }`}
              >
                <p className="overflow-hidden text-sm">{q.a}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-tr from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-6 rounded-2xl border border-sky-100 bg-white px-6 py-10 shadow-sm md:grid-cols-3 md:items-center md:px-10">
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold text-slate-900">
                Ready to experience eyewear designed for your life?
              </h4>
              <p className="mt-2 text-slate-600">
                Walk in for a fitting or book online—get matched to lenses and frames that feel like you.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a
                href="/book-appointment"
                className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800"
              >
                Book Now
              </a>
              <a
                href="/shop/eyewear"
                className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Browse Frames
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============ Small Reusable Bits ============ */
function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-sky-700 text-white shadow-sm"
          : "bg-sky-50 text-sky-700 ring-1 ring-sky-200 hover:bg-sky-100"
      }`}
    >
      {children}
    </button>
  );
}

function Panel({ title, points, kicker }) {
  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-3">
        <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
        <ul className="mt-4 space-y-3 text-slate-700">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-2">
        <div className="rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
          <Sparkle className="mr-2 inline h-4 w-4" />
          {kicker}
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="inline-flex items-center justify-center rounded-xl border border-sky-100 bg-sky-50 p-3">
        <span className="text-sky-700">{icon}</span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function TimelineItem({ year, title, text }) {
  return (
    <li className="mb-10 ml-2">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-sky-200 bg-sky-600"></div>
      <time className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sky-700">
        {year}
      </time>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </li>
  );
}

function Badge({ title }) {
  return (
    <div className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-sky-700 shadow ring-1 ring-sky-100 backdrop-blur">
      {title}
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

function Sparkle(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.2 5.6L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.4L12 2z" />
    </svg>
  );
}
function LensIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4 12a8 8 0 1113.86 5.36l2.39 2.39-1.41 1.41-2.39-2.39A8 8 0 014 12zm8-6a6 6 0 100 12A6 6 0 0012 6z" />
    </svg>
  );
}
function FrameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4 6h16v12H4zM2 4h20v16H2z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.33-8A5.67 5.67 0 116 5.67 5.67 5.67 0 1112 9a5.67 5.67 0 116-3.33C22.33 9 12 21 12 21z" />
    </svg>
  );
}

function BlobDecor() {
  return (
    <>
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute left-1/2 top-full h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-50 blur-3xl" />
    </>
  );
}

/* ============ Local Data ============ */
const FAQS = [
  {
    q: "Do you offer blue-light lenses?",
    a: "Yes. We carry blue-light filters across single-vision, bifocal, and progressive lenses. They reduce eye strain without heavily tinting your view.",
  },
  {
    q: "How long does a fitting take?",
    a: "Simple fittings take 10–15 minutes. For progressives or complex prescriptions, allow 25–35 minutes so we get every measurement perfect.",
  },
  {
    q: "Can I bring my own frames?",
    a: "Absolutely. We can fit new lenses into your existing frames if they’re in good condition and compatible with your prescription.",
  },
];
