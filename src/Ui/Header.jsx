// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";

/**
 * Header — solid light-blue, no unwanted transparency on scroll
 * - Sticky top with consistent height (prevents layout shift)
 * - Solid bg at top; slightly elevated with shadow after scroll
 * - Mobile menu uses solid bg (no backdrop translucency)
 */
export default function Header({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "true" : "false"}
      className={[
        "sticky top-0 z-50 w-full transition-all duration-300",
        // Keep a border in both states to avoid height jump
        scrolled
          ? "bg-sky-50/95 supports-[backdrop-filter]:bg-sky-50/90 backdrop-blur-md border-b border-sky-200 shadow-sm"
          : "bg-sky-50 border-b border-transparent",
        "dark:bg-blue-900/80 dark:supports-[backdrop-filter]:bg-blue-900/70 dark:border-white/5",
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 md:px-6 lg:px-8 py-3">
        {/* Left: Logo */}
        <div className="flex min-w-0 flex-1 items-center">
          <img src={Logo} className="w-[150px] h-auto" alt="D’Cindy Eyecare logo" />
          {/* <span className="hidden text-lg font-bold tracking-tight sm:block text-sky-900">
            D’Cindy Eyecare
          </span> */}
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            {[
              ["Home", "/"],
              ["Contact", "/contact"],
              ["About", "/about"],
              ["Shop", "/shop"],
            ].map(([label, href]) => (
              <li key={label} className="group">
                <a
                  href={href}
                  className="relative inline-flex items-center text-sm font-medium text-sky-900 hover:text-sky-950 dark:text-gray-100/90 dark:hover:text-white transition-colors"
                >
                  {label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Actions */}
        <div className="ms-auto flex items-center gap-2">
          <a
            href="/signin"
            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Book Appointments
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 text-sky-900 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:hidden dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-800"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={[
          "lg:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-4">
          <ul className="divide-y divide-sky-200 rounded-2xl border border-sky-200 bg-sky-50 dark:bg-blue-900/80 dark:divide-white/5 dark:border-white/5">
            {[
              ["Home", "/"],
              ["Contact", "/contact"],
              ["About", "/about"],
              ["Shop", "/shop"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-sky-900 hover:bg-white/70 dark:text-gray-200 dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <span aria-hidden="true">›</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
