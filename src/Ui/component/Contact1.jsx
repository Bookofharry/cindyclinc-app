// src/components/ContactGuideCindy.jsx
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaArrowRight,
  FaBolt,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";

/**
 * ContactGuideCindy — Professional, Minimalist Contact Portal
 * - Aesthetic: Clean white background, calming deep-blue (indigo) accents.
 * - Focuses on clarity, trust, and efficient user triage.
 */

export default function ContactGuideCindy() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white text-gray-800">
      
      {/* ================================================================
        HEADER & SLA PLEDGE
        ================================================================
      */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 border-b border-gray-100">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              Connect with <span className="text-sky-700">Our Care Team</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We prioritize promptness. Get rapid support for appointments, frame inquiries, and prescription advice.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              <FaBolt className="h-3.5 w-3.5" /> **Service Pledge:** We aim to reply to chat/email within 60 minutes.
            </div>
          </div>
          <AssuranceCard />
        </div>
      </div>

      {/* ================================================================
        COMMUNICATION CHANNELS & CORE HOURS
        ================================================================
      */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Choose Your Preferred Channel</h3>
        <p className="mt-4 text-gray-500 max-w-3xl">
          Select the best method for your needs. WhatsApp is fastest; Phone is best for urgent matters.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <ChannelCard
            title="WhatsApp Chat"
            desc="Quickest for questions, sending photos, and non-urgent scheduling."
            href="https://wa.me/2348000000000"
            action="Chat Now"
            badge="Fastest Response"
            icon={FaWhatsapp}
            badgeColor="bg-emerald-100 text-emerald-700 ring-emerald-200"
          />
          <ChannelCard
            title="Clinic Phone Line"
            desc="Speak directly with our team for time-sensitive or complex issues."
            href="tel:+2348000000000"
            action="Call During Hours"
            icon={FaPhoneAlt}
          />
          <ChannelCard
            title="Email Support"
            desc="For formal documents, detailed queries, or prescription attachments."
            href="mailto:hello@cindyeyecare.com"
            action="Send Email"
            icon={FaEnvelope}
          />
          <ChannelCard
            title="Visit In-Person"
            desc="For frame adjustments, fittings, or comprehensive eye exams."
            href="/location"
            action="Get Directions"
            icon={FaMapMarkerAlt}
          />
        </div>

        {/* Operational Details (Re-labeled for clarity) */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <InfoBox
            title="Operational Hours"
            items={["Mon–Fri: 9:00am–5:00pm", "Sat: 10:00am–3:00pm", "Sun: Closed"]}
            icon={FaClock}
          />
          <InfoBox
            title="Quick Contact Checklist"
            items={["Name/Ref. Number", "Briefly state concern", "Attach photos (if relevant)"]}
            icon={FaCheck}
          />
          <InfoBox
            title="After Hours Policy"
            items={["Queries queued for next day AM", "Check for urgent care advice (below)", "For emergencies, call us or seek help"]}
            icon={FaBolt}
          />
        </div>
      </div>

      {/* ================================================================
        TRIAGE SYSTEM: URGENT VS ROUTINE
        ================================================================
      */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">When to Call vs. When to Message</h3>
          <p className="mt-4 text-gray-500 max-w-3xl">
            This guide helps you decide the fastest and safest route for your situation.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <TriageCard
              title="Urgent: Call Immediately (Sight Risk)"
              notes={[
                "Sudden vision loss or double vision",
                "Eye injury, chemical splash, or severe pain",
                "Flashes of light or new, many floaters",
              ]}
              accent="border-red-200 bg-red-50 text-red-700"
              buttonText="Call Clinic Now"
              href="tel:+2348000000000"
              icon={FaExclamationTriangle}
            />
            <TriageCard
              title="Routine: Message or Book Online"
              notes={[
                "Prescription renewal or mild headaches",
                "Frame adjustments or nose-pad replacements",
                "Questions about lens coatings (blue-light, etc.)",
              ]}
              accent="border-sky-200 bg-sky-50 text-sky-700"
              buttonText="Message Us on WhatsApp"
              href="https://wa.me/2348000000000"
              icon={FaWhatsapp}
            />
          </div>
        </div>
      </div>
      
      {/* ================================================================
        MINI FAQ / KNOWLEDGE BASE
        ================================================================
      */}
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Quick Q&A</h3>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-lg">
          {FAQS.map((q, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left transition duration-200 hover:bg-gray-50">
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-medium text-gray-900">{q.q}</span>
                <FaArrowRight 
                  className={`h-4 w-4 text-sky-500 transition-transform ${open === i ? "rotate-90" : "rotate-0"}`} 
                />
              </div>
              <div
                className={`px-6 pb-5 text-gray-600 transition-[grid-template-rows] ${
                  open === i ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
                }`}
              >
                <p className="overflow-hidden text-sm">{q.a}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ================================================================
        FINAL CTA
        ================================================================
      */}
      <div className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="rounded-2xl border border-sky-200 bg-sky-50 px-6 py-12 shadow-sm md:grid-cols-3 md:items-center md:px-12">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-gray-900">
                  Ready to Start Your Service Ticket?
                </h4>
                <p className="mt-2 text-gray-600">
                  Send us a message now for the quickest path to clarity.
                </p>
              </div>
              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://wa.me/2348000000000"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-sm font-bold text-white hover:bg-sky-700 transition-all duration-300 shadow-md shadow-sky-300/50"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" /> Live Chat Now
                </a>
                <a
                  href="tel:+2348000000000"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-600 hover:bg-sky-50 transition-all duration-300"
                >
                  <FaPhoneAlt className="w-4 h-4 mr-2" /> Direct Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== UTILITY COMPONENTS (Refactored for Clean Light Mode) ===== */

function AssuranceCard() {
  return (
    <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-lg">
      <h4 className="text-base font-semibold text-gray-900">Our Communication Promise</h4>
      <ul className="mt-3 space-y-2 text-sm text-gray-600">
        <li className="flex items-start gap-2"><Check /> **WhatsApp:** 15–30 min typical reply.</li>
        <li className="flex items-start gap-2"><Check /> **Phone:** Immediate during clinic hours.</li>
        <li className="flex items-start gap-2"><Check /> **Email:** Guaranteed reply same business day.</li>
        <li className="flex items-start gap-2"><Check /> **Quality:** Friendly, accurate guidance.</li>
      </ul>
    </div>
  );
}

function ChannelCard({ title, desc, href, action, badge, icon: Icon, badgeColor }) {
  return (
    <a
      href={href}
      className="group block h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-sky-400 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <Icon className="h-6 w-6 text-sky-600" />
        {badge && (
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ${badgeColor || 'bg-sky-100 text-sky-700 ring-sky-200'}`}>
            {badge}
          </span>
        )}
      </div>
      <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
        {action} <FaArrowRight />
      </span>
    </a>
  );
}

function InfoBox({ title, items, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-sky-600" />
        <h5 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{title}</h5>
      </div>
      <ul className="mt-3 list-none space-y-2 pl-0 text-sm text-gray-600">
        {items.map((i, idx) => <li key={idx} className="flex items-center gap-2"> {i}</li>)}
      </ul>
    </div>
  );
}

function TriageCard({ title, notes, accent, buttonText, href, icon: Icon }) {
  // Accent is used to pass Tailwind classes like "border-red-200 bg-red-50 text-red-700"
  return (
    <div className={`rounded-2xl border p-8 shadow-lg transition duration-300 ${accent} `}>
      <Icon className="h-6 w-6 mb-3 opacity-90" />
      <h4 className="text-xl font-bold text-gray-900">{title}</h4>
      <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
        {notes.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
      <a 
        href={href} 
        className={`mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold shadow-md transition-colors 
        ${title.includes('Urgent') ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-sky-600 text-white hover:bg-sky-700'}`}
      >
        {buttonText} <FaArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}

// Custom Check Icon for the Assurance Card
function Check() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-sky-100 text-sky-600">
      <FaCheck className="h-2.5 w-2.5" />
    </span>
  );
}


/* ===== Local FAQ ===== */
const FAQS = [
  {
    q: "What’s the fastest way to get a quick answer?",
    a: "WhatsApp is our high-priority channel, typically replied to within 15-30 minutes during clinic operating hours. Use this for quick checks, sizing, or simple questions.",
  },
  {
    q: "Can I send photos of my frames or prescription?",
    a: "Yes. Use WhatsApp for quick frame photos (e.g., damage check) or Email for formal documents like prescription scans and insurance support forms.",
  },
  {
    q: "Do you respond to messages outside of business hours?",
    a: "Messages sent after 5:00 PM are securely queued and processed immediately when the clinic opens the following business morning.",
  },
  {
    q: "How do I ensure a rapid resolution?",
    a: "Always include your full name and—if you are a returning client—your patient reference number. Clearly state your primary concern and the specific help you need.",
  },
];