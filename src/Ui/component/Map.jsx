// src/components/CindyMapCard.jsx
import React from "react";

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
    </svg>
  );
}

/**
 * CindyMapCard — Reusable map block for Cindy Eye Care
 *
 * Props:
 * - title?: string
 * - embedSrc: string (Google Maps embed URL)
 * - mapsHref?: string (Open in Maps URL)
 * - height?: number | string (iframe height, default 360)
 * - className?: string (extra wrapper classes)
 * - secondaryHref?: string (optional second button link)
 * - secondaryLabel?: string (optional second button label)
 */
function CindyMapCard({
  title = "Find Us on the Map",
  embedSrc,
  mapsHref,
  height = 360,
  className = "",
  secondaryHref = "/location",
  secondaryLabel = "Parking & Access Info",
}) {
  return (
    <div className={`md:col-span-3 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
        <iframe
          title={title}
          src={embedSrc}
          width="100%"
          height={height}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
        {mapsHref && (
          <a
            href={mapsHref}
            className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
          >
            Open in Google Maps <ArrowRight />
          </a>
        )}
        {secondaryHref && (
          <a
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            {secondaryLabel}
          </a>
        )}
      </div>
    </div>
  );
}
// src/components/ContactExtrasCindy.jsx

export default function ContactExtrasCindy() {
  const ADDRESS_TEXT = "The Cindy Eye Care, Garki, Abuja, Nigeria";
  const MAPS_QUERY =
    "https://www.google.com/maps/search/?api=1&query=The+Cindy+Eye+Care%2C+Garki%2C+Abuja%2C+Nigeria";
  const MAPS_EMBED =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Cindy Eye Care, Garki, Abuja, Nigeria") +
    "&output=embed";

  const HOURS = [
    { day: "Monday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "3:00 PM" },
    { day: "Sunday", open: "Closed", close: "" },
  ];

  return (
    <section className="bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Intro / Extra explanation */}
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Extra Help on Contacting <span className="text-sky-700">Cindy Eye Care</span>
            </h2>
            <p className="mt-3 text-slate-600 md:text-lg">
              Need quick advice, directions, or to confirm availability? Use WhatsApp for the fastest response
              during business hours, or call the clinic if it’s time-sensitive. Email is best for sharing
              prescriptions, invoices, or detailed questions. Walk-ins for adjustments are welcome when we’re open.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <Bullet /> For headaches, glare, or screen fatigue, message us—we’ll guide you and book if needed.
              </li>
              <li className="flex items-start gap-2">
                <Bullet /> Already booked? Include your booking reference for faster assistance.
              </li>
              <li className="flex items-start gap-2">
                <Bullet /> Bring your current glasses or prescriptions if you’re visiting.
              </li>
              <li className="flex items-start gap-2">
                <Bullet /> Emergencies (injury, sudden vision loss): call immediately or seek urgent care.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2348000000000"
                className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2348000000000"
                className="rounded-xl border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                Call the Clinic
              </a>
              {/* <a
                href="mailto:hello@cindyeyecare.com"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Email Us
              </a> */}
            </div>
          </div>

          {/* Address / quick contact card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Visit & Contact</h3>
            <address className="not-italic">
              <p className="mt-2 text-sm text-slate-700">{ADDRESS_TEXT}</p>
              <p className="mt-3 text-sm">
                Phone:{" "}
                <a href="tel:+2348000000000" className="font-medium text-sky-700 underline">
                  +234 800 000 0000
                </a>
              </p>
              <p className="text-sm">
                Email:{" "}
                <a href="mailto:hello@cindyeyecare.com" className="font-medium text-sky-700 underline">
                  hello@cindyeyecare.com
                </a>
              </p>
              <a
                href={MAPS_QUERY}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 underline"
              >
                Get Directions <ArrowRight />
              </a>
            </address>
            <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50 p-4 text-sm text-sky-900">
              ASAP Response: WhatsApp replies in 15–30 mins (business hours). Email: same business day.
            </div>
          </div>
        </div>

        {/* Hours + Map */}
        <div className="mt-10 grid gap-8 md:grid-cols-5 md:items-start">
          {/* Hours Table */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">Opening Hours</h3>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {HOURS.map((h) => (
                    <tr key={h.day} className="bg-white">
                      <td className="px-4 py-3 font-medium text-slate-800">{h.day}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {h.open === "Closed" ? (
                          <span className="font-medium text-rose-600">Closed</span>
                        ) : (
                          `${h.open} – ${h.close}`
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Public holidays may affect hours—message us on WhatsApp to confirm availability.
            </p>
          </div>

          {/* Map — now a separate component */}
          <CindyMapCard
            title="Find Us on the Map"
            embedSrc={MAPS_EMBED}
            mapsHref={MAPS_QUERY}
            height={360}
            // secondaryHref/Label can be customized or removed
            secondaryHref="/location"
            secondaryLabel="Parking & Access Info"
          />
        </div>
      </div>

      {/* JSON-LD for SEO (optional) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(HOURS, ADDRESS_TEXT)) }}
      />
    </section>
  );
}

/* ---------- Helpers ---------- */
function Bullet() {
  return <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600" aria-hidden="true" />;
}

// function ArrowRight() {
//   return (
//     <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
//       <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
//     </svg>
//   );
// }

function localBusinessJsonLd(hours, addressText) {
  const openingSpecs = hours
    .filter((h) => h.open !== "Closed")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: to24(h.open),
      closes: to24(h.close),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: "The Cindy Eye Care",
    description:
      "Eye exams, prescription renewals, frame styling, blue-light solutions, and precise fittings at The Cindy Eye Care in Bwari, Abuja.",
    telephone: "+2348000000000",
    email: "hello@cindyeyecare.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: addressText,
      addressLocality: "Bwari",
      addressRegion: "Abuja",
      addressCountry: "NG",
    },
    url: "https://www.cindyeyecare.com",
    sameAs: ["https://wa.me/2348000000000"],
    openingHoursSpecification: openingSpecs,
  };
}

function to24(hhmm) {
  try {
    if (!hhmm || hhmm === "Closed") return "";
    const [time, mer] = hhmm.split(" ");
    let [h, m] = time.split(":").map((x) => parseInt(x, 10));
    if (mer?.toUpperCase() === "PM" && h !== 12) h += 12;
    if (mer?.toUpperCase() === "AM" && h === 12) h = 0;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  } catch {
    return hhmm;
  }
}
