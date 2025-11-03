// import { NavLink, Outlet, Link } from "react-router-dom";
// import { useMemo, useState } from "react";
// import CartDrawer from "./CartDrawer";

// const navItems = [
//   { to: "/shop/frames", label: "Frames" },
//   { to: "/shop/lenses", label: "Lenses" },
//   { to: "/shop/eyedrop", label: "Eye Drop" },
//   { to: "/shop/accessories", label: "Accessories" },
// ];

// /**
//  * ShopWithCart
//  * Senior‑grade, responsive shop shell with a cart icon that opens a drawer
//  * showing added products and a checkout button.
//  *
//  * Props:
//  *  - cartItems: Array<{ id, name, price, qty, code?, image? }>
//  *  - onRemoveItem(id)
//  *  - onQtyChange(id, qty)
//  *  - onCheckout()
//  */
// export default function ShopWithCart({
//   cartItems = [],
//   onRemoveItem,
//   onQtyChange,
//   onCheckout,
// }) {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartHover, setCartHover] = useState(false);
//   const cartCount = useMemo(
//     () => cartItems.reduce((s, it) => s + (it.qty ?? 1), 0),
//     [cartItems]
//   );

//   return (
//     <div className="relative min-h-screen bg-white text-slate-800">
//       {/* Background pattern */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(2,6,23,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,.06)_1px,transparent_1px)] bg-[size:22px_22px]" />
//         <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_10%,black,transparent_70%)]">
//           <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-300/50 via-blue-300/30 to-transparent blur-3xl" />
//           <div className="absolute -bottom-56 left-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-t from-indigo-300/40 via-violet-300/25 to-transparent blur-3xl" />
//         </div>
//       </div>

//       <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
//         {/* Top bar: brand + cart */}
//         <div className="sticky top-3 z-10 mb-6 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:top-6">
//           <Link to="/" className="inline-flex items-center gap-2">
//             <span className="h-7 w-7 rounded-lg bg-slate-900" aria-hidden />
//             <span className="text-sm font-semibold text-slate-900 sm:text-base">D’Cindy Eyecare</span>
//           </Link>

//           <button
//             type="button"
//             aria-label="Open cart"
//             onClick={() => setIsCartOpen(true)}
//             onMouseEnter={() => setCartHover(true)}
//             onMouseLeave={() => setCartHover(false)}
//             className="relative inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 p-2 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-slate-900" aria-hidden>
//               <path d="M3 3h2l.4 2M7 13h10l3-7H6.4" strokeLinecap="round" strokeLinejoin="round" />
//               <circle cx="9" cy="19" r="1.5" />
//               <circle cx="17" cy="19" r="1.5" />
//             </svg>
//             <span className="absolute -right-1 -top-1 min-w-[1.25rem] rounded-full bg-slate-900 px-1.5 text-center text-[10px] font-bold leading-5 text-white shadow" aria-live="polite">{cartCount}</span>
//             <span className={`pointer-events-none absolute inset-0 -z-10 rounded-xl ring-0 transition ${cartHover ? "ring-4 ring-slate-900/5" : ""}`} aria-hidden />
//           </button>
//         </div>

//         {/* Header */}
//         <header className="mb-6 text-center">
//           <h1 className="text-balance bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
//             D’Cindy Eyecare Shop
//           </h1>
//           <p className="mx-auto mt-2 max-w-xl text-pretty text-sm text-slate-600 sm:text-base">
//             Explore premium eyewear, lenses, and care products crafted for clarity, comfort, and timeless style.
//           </p>
//         </header>

//         {/* Nav */}
//         <nav className="mx-auto mt-4 flex w-full justify-center">
//           <ul className="flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto rounded-2xl border border-slate-200/70 bg-white/70 p-1.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//             {navItems.map((item) => (
//               <li key={item.to} className="snap-start">
//                 <NavLink
//                   to={item.to}
//                   className={({ isActive }) =>
//                     [
//                       "group inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition",
//                       "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70",
//                       isActive
//                         ? "bg-slate-900 text-white shadow"
//                         : "text-slate-700 hover:bg-slate-100/80 active:bg-slate-200/70",
//                     ].join(" ")
//                   }
//                   end
//                 >
//                   <span className="relative">
//                     {item.label}
//                     <span className="pointer-events-none absolute -bottom-1 left-1/2 hidden h-[2px] w-8 -translate-x-1/2 rounded-full bg-white/70 group-[.active]:block" />
//                   </span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Routed content */}
//         <main className="mx-auto mt-6 min-h-[40vh] max-w-6xl rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50 sm:p-6 md:p-8">
//           <Outlet />
//         </main>
//       </div>

//       {/* Cart Drawer */}
//       <CartDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         items={cartItems}
//         onRemove={onRemoveItem}
//         onQtyChange={onQtyChange}
//         onCheckout={onCheckout}
//       />
//     </div>
//   );
// }

// /**
//  * Example usage (parent route):
//  *
//  * import ShopWithCart from "./ShopWithCart";
//  * import { useState } from "react";
//  *
//  * export default function ShopRoute() {
//  *   const [items, setItems] = useState([
//  *     // { id, name, price, qty, code?, image? }
//  *   ]);
//  *
//  *   const removeItem = (id) => setItems((xs) => xs.filter((x) => x.id !== id));
//  *   const qtyChange = (id, qty) => setItems((xs) => xs.map((x) => x.id === id ? { ...x, qty } : x));
//  *   const checkout = () => console.log("checkout");
//  *
//  *   return (
//  *     <ShopWithCart
//  *       cartItems={items}
//  *       onRemoveItem={removeItem}
//  *       onQtyChange={qtyChange}
//  *       onCheckout={checkout}
//  *     />
//  *   );
//  * }
//  */
