// CartDrawer.jsx
// Senior-grade cart drawer: overlay, scroll lock, focus management, basic focus trap,
// responsive panel, and checkout button. Tailwind only.

import { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
  onRemove,
  onQtyChange,
  onCheckout,
}) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Body scroll lock
  useEffect(() => {
    const { body } = document;
    if (!body) return;
    const prev = body.style.overflow;
    if (isOpen) body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [isOpen]);

  // Focus to panel when opened; restore on close
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement;
      const id = setTimeout(() => panelRef.current?.focus(), 0);
      return () => clearTimeout(id);
    } else if (previouslyFocused.current) {
      previouslyFocused.current.focus?.();
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Basic focus trap inside the panel
  const trapFocus = useCallback(
    (e) => {
      if (!isOpen || !panelRef.current) return;
      if (e.key !== "Tab") return;
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;
    node.addEventListener("keydown", trapFocus);
    return () => node.removeEventListener("keydown", trapFocus);
  }, [trapFocus]);

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const itemCount = items.reduce((s, it) => s + (it.qty ?? 1), 0);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/40 transition ${isOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        aria-describedby="cart-subtotal"
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <h3 id="cart-title" className="text-lg font-semibold text-slate-900">
            Your Cart{" "}
            <span className="ml-1 align-middle text-xs font-normal text-slate-500">({itemCount})</span>
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex h-[calc(100%-9.5rem)] flex-col overflow-hidden sm:h-[calc(100%-10rem)]">
          <ul className="flex-1 space-y-3 overflow-y-auto p-4">
            {items.length === 0 && (
              <li className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-600">
                <div className="mb-2 text-base font-semibold text-slate-900">Your cart is empty</div>
                <p className="mb-4">Browse our collection to add items.</p>
                <Link
                  to="/shop/frames"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  Continue shopping →
                </Link>
              </li>
            )}

            {items.map((it) => (
              <li key={it.id} className="flex gap-3 rounded-xl border border-slate-200 p-3">
                {it.image && (
                  <img
                    src={it.image}
                    alt=""
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900">{it.name}</div>
                      {it.code && <div className="text-xs text-slate-500">Code: {it.code}</div>}
                    </div>
                    <button
                      onClick={() => onRemove?.(it.id)}
                      className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
                      aria-label={`Remove ${it.name}`}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-sm">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => onQtyChange?.(it.id, Math.max(1, it.qty - 1))}
                        className="h-7 w-7 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100"
                        aria-label={`Decrease quantity of ${it.name}`}
                      >
                        −
                      </button>
                      <span className="px-2 tabular-nums" aria-live="polite" aria-atomic="true">
                        {it.qty}
                      </span>
                      <button
                        onClick={() => onQtyChange?.(it.id, it.qty + 1)}
                        className="h-7 w-7 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100"
                        aria-label={`Increase quantity of ${it.name}`}
                      >
                        +
                      </button>
                    </div>
                    <div className="font-semibold text-slate-900">
                      ₦{(it.price * it.qty).toLocaleString()}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="border-t border-slate-200 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
            <div id="cart-subtotal" className="mb-3 flex items-center justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-semibold text-slate-900">₦{subtotal.toLocaleString()}</span>
            </div>
            <button
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
