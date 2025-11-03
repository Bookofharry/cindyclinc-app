import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import CartDrawer from "../Ui/CartDrawer.jsx";
import { useCart } from "../store/cart.jsx"; // NEW

const navItems = [
  { to: "/shop/frames", label: "Frames" },
  { to: "/shop/lenses", label: "Lenses" },
  { to: "/shop/eyedrop", label: "Eye Drop" },
  { to: "/shop/accessories", label: "Accessories" },
];

export default function Shop() {
  const { items, cartCount, removeItem, qtyChange } = useCart(); // from context
  const [cartHover, setCartHover] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const checkout = () => console.log("checkout"); // plug your flow

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      {/* background omitted for brevity (keep your version) */}

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="sticky top-3 z-10 mb-6 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:top-6">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-slate-900" aria-hidden />
            <span className="text-sm font-semibold text-slate-900 sm:text-base">D’Cindy Eyecare</span>
          </Link>

          <button
            type="button"
            aria-label="Open cart"
            onClick={() => setIsCartOpen(true)}
            onMouseEnter={() => setCartHover(true)}
            onMouseLeave={() => setCartHover(false)}
            className="relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="1.8"
                 className="h-6 w-6 text-slate-900" aria-hidden>
              <path d="M3 3h2l.4 2M7 13h10l3-7H6.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="17" cy="19" r="1.5" />
            </svg>
            <span
              className="absolute -right-1 -top-1 min-w-[1.25rem] rounded-full bg-slate-900 px-1.5 text-center text-[10px] font-bold leading-5 text-white shadow"
              aria-live="polite"
            >
              {cartCount}
            </span>
            <span
              className={`pointer-events-none absolute inset-0 -z-10 rounded-xl ring-0 transition ${cartHover ? "ring-4 ring-slate-900/5" : ""}`}
              aria-hidden
            />
          </button>
        </div>

        {/* Header + Nav ... keep your existing markup */}

        {/* Nested content */}
        <main className="mx-auto mt-6 min-h-[40vh] max-w-6xl rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Drawer uses global items */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onRemove={removeItem}
        onQtyChange={qtyChange}
        onCheckout={checkout}
      />
    </div>
  );
}
