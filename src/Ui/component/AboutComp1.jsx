// src/pages/AboutCindyEyeCare.jsx
import React from "react";

export default function AboutCindyEyeCare() {
  return (
    <main className="bg-white text-slate-800">
      {/* Hero / Promise */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700">
                The Cindy Eye Care
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                About <span className="text-sky-700">Cindy Eye Care</span>
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
                  Book Appointment
                </a>
                <a
                  href="/shop/eyewear"
                  className="rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:border-sky-300 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  Explore Eyecare Products
                </a>
              </div>
            </div>

            {/* Brand image / illustration placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Replace src with your clinic photo */}
                <img
                  src="/images/cindy-eyecare/clinic-hero.jpg"
                  alt="Cindy Eye Care clinic interior with display of frames"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl bg-sky-100/70 md:block" />
              <div className="pointer-events-none absolute -top-6 -right-6 hidden h-16 w-16 rounded-full bg-sky-50 md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Cindy Eye Care */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Why Patients Choose Us</h2>
          <p className="mt-3 text-slate-600">
            We combine medical precision with fashion-forward frames—so you see clearly and look great every day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title="Advanced Optics"
            desc="Accurate refractions, quality lenses (single-vision, bifocal, progressives) and anti-glare coatings."
            icon={IconLens}
          />
          <Feature
            title="Personalized Care"
            desc="One-on-one fittings, pupil distance measurements, and lifestyle-based recommendations."
            icon={IconHeart}
          />
          <Feature
            title="Stylish Frames"
            desc="Curated collections—from minimalist titanium to bold acetates—fitted to your face shape."
            icon={IconFrame}
          />
          <Feature
            title="Blue-Light Protection"
            desc="Comfort for screen time with blue-filter lenses that reduce eye strain day and night."
            icon={IconShield}
          />
        </div>
      </section>

      {/* Story + Services */}
      <section className="border-y border-slate-100 bg-slate-50/40">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">Our Story</h3>
              <p className="mt-4 text-slate-600">
                Cindy Eye Care was founded on a simple idea: eye care should be precise, warm, and beautifully
                executed. From your first eye exam to your final frame adjustment, our clinicians and opticians
                obsess over the details—so you don’t have to.
              </p>
              <p className="mt-4 text-slate-600">
                Whether you’re a student, professional, creator, or retiree, our recommendations are tailored to
                your daily life, ensuring clarity, comfort, and confidence in every setting.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Check /> Comprehensive eye exams & vision screening
                </li>
                <li className="flex items-start gap-3">
                  <Check /> Prescription glasses, contact lenses & lens upgrades
                </li>
                <li className="flex items-start gap-3">
                  <Check /> Blue-light, UV, anti-glare & photochromic solutions
                </li>
                <li className="flex items-start gap-3">
                  <Check /> Frame styling, adjustments & repairs
                </li>
                <li className="flex items-start gap-3">
                  <Check /> Kids’ vision care & school screenings
                </li>
              </ul>
            </div>

            {/* Stats / Trust */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h4 className="text-lg font-semibold text-slate-900">Trusted by our community</h4>
              <p className="mt-2 text-sm text-slate-600">
                We measure success by clearer days, happier eyes, and confident smiles.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Stat label="Years of Care" value="10+" />
                <Stat label="Happy Patients" value="7,500+" />
                <Stat label="Frames in Stock" value="800+" />
                <Stat label="Fit Satisfaction" value="99%" />
              </div>

              <div className="mt-8 rounded-xl bg-sky-50 p-4 text-sm text-sky-900">
                “I finally love wearing my glasses—no headaches, no glare. The team nailed my fit and look.”
                <span className="block pt-1 text-sky-700">— Amina O.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Teaser / Care Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Replace with your team image */}
              <img
                src="/images/cindy-eyecare/team.jpg"
                alt="Optometrists and opticians at Cindy Eye Care"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">Clarity. Comfort. Confidence.</h3>
            <p className="mt-4 text-slate-600">
              Our care philosophy is simple: listen first, recommend second. We consider your work, hobbies, and
              environment to select lenses and frames that match your lifestyle—so your eyewear works for you, not
              the other way around.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <BadgeLine title="Same-day simple prescriptions" />
              <BadgeLine title="Free frame adjustments" />
              <BadgeLine title="Warranty on premium lenses" />
              <BadgeLine title="Installment options available" />
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Contact the Team <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-100 bg-gradient-to-br from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="rounded-2xl border border-sky-100 bg-white px-6 py-10 shadow-sm md:px-10">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-slate-900">
                  Ready for clearer, more comfortable vision?
                </h4>
                <p className="mt-2 text-slate-600">
                  Book an exam or stop by to try frames. We’ll guide you to the perfect fit.
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
        </div>
      </section>
    </main>
  );
}

/* ---------- Small, reusable bits (no external libs) ---------- */

function Feature({ title, desc, icon: Icon }) {
  return (
    <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="inline-flex items-center justify-center rounded-xl border border-sky-100 bg-sky-50 p-3">
        <Icon className="h-5 w-5 text-sky-700" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function BadgeLine({ title }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-sky-700" fill="currentColor">
          <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
        </svg>
      </span>
      <span className="text-sm text-slate-700">{title}</span>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
      </svg>
    </span>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
    </svg>
  );
}

function IconLens(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M4 12a8 8 0 1113.86 5.36l2.39 2.39-1.41 1.41-2.39-2.39A8 8 0 014 12zm8-6a6 6 0 100 12A6 6 0 0012 6z" />
    </svg>
  );
}
function IconHeart(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7-4.35-9.33-8A5.67 5.67 0 116 5.67 5.67 5.67 0 1112 9a5.67 5.67 0 116-3.33C22.33 9 12 21 12 21z" />
    </svg>
  );
}
function IconFrame(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M4 6h16v12H4zM2 4h20v16H2z" />
    </svg>
  );
}
function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" {...props} fill="currentColor" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
    </svg>
  );
}
