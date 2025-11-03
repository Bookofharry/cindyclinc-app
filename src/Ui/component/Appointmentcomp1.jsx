// src/pages/AppointmentCindy.jsx
import React, { useMemo, useState } from "react";

/**
 * Cindy Eye Care — Appointment Booking
 * - Tailwind-only, no external libs
 * - Service select, date picker, time-slot grid
 * - Basic validation + confirmation screen
 * - Easy to wire to your API: see onSubmit()
 */

export default function AppointmentCindy() {
  const SERVICES = [
    "Comprehensive Eye Exam",
    "Prescription Renewal",
    "Frame Styling & Fitting",
    "Contact Lens Fitting",
    "Blue-Light Consultation",
    "Pediatric Vision Screening",
  ];

  // Generate bookable slots (9:00–16:30, every 30 min)
  const SLOTS = useMemo(() => {
    const times = [];
    for (let h = 9; h <= 16; h++) {
      for (let m of [0, 30]) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        times.push(`${hh}:${mm}`);
      }
    }
    return times;
  }, []);

  // Min date = today (Africa/Lagos users)
  const todayISO = new Date().toISOString().slice(0, 10);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: todayISO,
    slot: "",
    contactPref: "WhatsApp",
    notes: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  }

  function selectSlot(value) {
    setForm((p) => ({ ...p, slot: p.slot === value ? "" : value }));
  }

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!/^[\d+\-\s()]{7,}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (!form.service) e.service = "Please choose a service.";
    if (!form.date) e.date = "Select a date.";
    if (form.date < todayISO) e.date = "Date cannot be in the past.";
    if (!form.slot) e.slot = "Pick a time slot.";
    if (!form.consent) e.consent = "You must accept the privacy notice.";
    return e;
  }

  function onSubmit(e) {
    e.preventDefault();
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    // TODO: Replace with your API call
    // await fetch("/api/appointments", { method: "POST", body: JSON.stringify(form) })
    console.log("Booking payload:", form);

    // Make a lightweight booking reference
    const ref = "CEC-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setRefCode(ref);
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setRefCode("");
  }

  return (
    <main className="bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700">
                Your Vision, Our Piority
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                Book an Appointment
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                <strong>Experience Unmatched Clarity and Comfort with Eyewear Designed for Your Life.</strong> From eye exams to
                blue-light protection, book a visit that fits your schedule.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <Check /> Same-day simple prescriptions
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Free frame adjustments
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Pediatric friendly
                </li>
                <li className="flex items-center gap-2">
                  <Check /> Installment options on premium lenses
                </li>
              </ul>
            </div>

            {/* Summary card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              {!submitted ? (
                <p className="text-slate-600">
                  Choose your service, pick a date, and select a time slot. We’ll confirm your booking
                  instantly on this page.
                </p>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Booking Confirmed</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Thank you, {form.firstName}. Your reference is{" "}
                    <span className="font-semibold text-slate-900">{refCode}</span>.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <Summary label="Name" value={`${form.firstName} ${form.lastName}`} />
                    <Summary label="Phone" value={form.phone} />
                    <Summary label="Email" value={form.email} />
                    <Summary label="Service" value={form.service} />
                    <Summary label="Date" value={formatDate(form.date)} />
                    <Summary label="Time" value={form.slot} />
                    <Summary label="Contact via" value={form.contactPref} />
                    <Summary label="Notes" value={form.notes || "—"} />
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={resetForm}
                      className="rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                    >
                      Book Another
                    </button>
                    <a
                      href="/shop/eyewear"
                      className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
                    >
                      Browse Frames
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <form onSubmit={onSubmit} noValidate className="grid gap-8 md:grid-cols-5">
          {/* Left column: Details */}
          <div className="md:col-span-3 space-y-6">
            <FieldGroup title="Your Details">
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  name="firstName"
                  label="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  autoComplete="given-name"
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  autoComplete="family-name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
                <TextField
                  name="phone"
                  label="Phone"
                  placeholder="+234 801 234 5678"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  autoComplete="tel"
                />
              </div>
            </FieldGroup>

            <FieldGroup title="Visit Preferences">
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  name="service"
                  label="Service"
                  value={form.service}
                  onChange={handleChange}
                  options={SERVICES}
                  placeholder="Select a service"
                  error={errors.service}
                />
                <TextField
                  name="date"
                  type="date"
                  label="Preferred Date"
                  min={todayISO}
                  value={form.date}
                  onChange={(e) => {
                    // Clear chosen slot if user changes the date
                    setForm((p) => ({ ...p, date: e.target.value, slot: "" }));
                  }}
                  error={errors.date}
                />
              </div>

              {/* Slots */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
                  {SLOTS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => selectSlot(t)}
                      className={`rounded-lg border px-3 py-2 text-sm font-medium ${
                        form.slot === t
                          ? "border-sky-600 bg-sky-700 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.slot && <ErrorText>{errors.slot}</ErrorText>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  name="contactPref"
                  label="Preferred Contact"
                  value={form.contactPref}
                  onChange={handleChange}
                  options={["WhatsApp", "SMS", "Email", "Phone Call"]}
                />
                <TextArea
                  name="notes"
                  label="Notes (optional)"
                  placeholder="Anything we should know? (e.g., sensitivity to light, bring existing frames, etc.)"
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-600"
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  I agree to D’Cindy Eye Care’s{" "}
                  <a href="/privacy" className="text-sky-700 underline">
                    Privacy Notice
                  </a>{" "}
                  and consent to being contacted about my appointment.
                </label>
              </div>
              {errors.consent && <ErrorText>{errors.consent}</ErrorText>}
            </FieldGroup>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={() =>
                  setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    service: "",
                    date: todayISO,
                    slot: "",
                    contactPref: "WhatsApp",
                    notes: "",
                    consent: false,
                  })
                }
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Right column: Clinic info */}
          <aside className="md:col-span-2 space-y-6">
            {/* <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <h3 className="text-base font-semibold text-slate-900">Clinic Hours</h3>
              <ul className="mt-3 text-sm text-slate-700">
                <li>Mon–Fri: 9:00am – 5:00pm</li>
                <li>Saturday: 10:00am – 3:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Visit Us</h3>
              <p className="mt-2 text-sm text-slate-700">
                The Cindy Eye Care, Bwari, Abuja. <br />
                Need help?{" "}
                <a href="tel:+2348000000000" className="text-sky-700 underline">
                  Call the clinic
                </a>
                .
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/images/cindy-eyecare/map-placeholder.jpg"
                  alt="Map to Cindy Eye Care"
                  className="h-44 w-full object-cover"
                />
              </div>
            </div> */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">What to Bring</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                <li>Existing prescriptions or glasses</li>
                <li>Any eye medications you use</li>
                <li>Insurance card (if applicable)</li>
              </ul>
            </div>
          </aside>
        </form>
      </section>
    </main>
  );
}

/* ---------- Small Reusable Bits (no external libs) ---------- */

function FieldGroup({ title, children }) {
  return (
    <fieldset className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <legend className="px-2 text-sm font-semibold text-slate-900">{title}</legend>
      <div className="mt-4 space-y-4">{children}</div>
    </fieldset>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  min,
  error,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`block w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 ${
          error
            ? "border-rose-300 ring-rose-100 focus:ring-rose-200"
            : "border-slate-300 ring-sky-100 focus:border-sky-300 focus:ring-sky-200"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, placeholder, error }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`block w-full appearance-none rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 ${
            error
              ? "border-rose-300 ring-rose-100 focus:ring-rose-200"
              : "border-slate-300 ring-sky-100 focus:border-sky-300 focus:ring-sky-200"
          }`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function TextArea({ label, name, value, onChange, placeholder, error }) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-900">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={3}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 ${
          error
            ? "border-rose-300 ring-rose-100 focus:ring-rose-200"
            : "border-slate-300 ring-sky-100 focus:border-sky-300 focus:ring-sky-200"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function Summary({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="mt-0.5 text-sm text-slate-900">{value}</div>
    </div>
  );
}

function ErrorText({ children }) {
  return <p className="mt-1 text-xs text-rose-600">{children}</p>;
}

function Check() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
      </svg>
    </span>
  );
}

/* ---------- Utilities ---------- */

function formatDate(iso) {
  try {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
