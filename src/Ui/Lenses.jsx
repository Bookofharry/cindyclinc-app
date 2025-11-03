// Lenses.jsx
// Same layout/behavior as Frames, but using RANDOM images.
// Uses global cart via useCart().

import { useState } from "react";
import { useCart } from "../store/cart.jsx";

// Demo data — images are random via picsum.photos
const LENSES = [
  {
    id: "ln-sv-156-bl",
    name: "Single-Vision 1.56 Blue-Light",
    price: 28000,
    code: "SKU-LN156BL",
    type: "Single-Vision",
    material: "Index 1.56",
    treatment: "Blue-Light Filter",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSB0keLonAjaufnf2ZzfZ280lacGIaECDWf1w_5nUyBYK4SMYk1Cpe1GzfYGSfZStRXP_uP0Ve0uo8apkFqS_eJLk3TmAKfQp9RmZawSPmO&usqp=CAc",
  },
  {
    id: "ln-sv-160-hmc",
    name: "Single-Vision 1.60 HMC",
    price: 36000,
    code: "SKU-LN160HMC",
    type: "Single-Vision",
    material: "Index 1.60",
    treatment: "Hard-Multi Coating",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRw310-J1dos8h_RNfE7UyduFuCFxUm9tTyz2LwKZv6m71cuGVREG8dG476Uo06llSKt7X66QtBAHXOvHXtOVkZkDhV39ovf1U2uWHJaBWn&usqp=CAc",
  },
  {
    id: "ln-pg-167-uv",
    name: "Progressive 1.67 UV+",
    price: 72000,
    code: "SKU-LN167PG",
    type: "Progressive",
    material: "Index 1.67",
    treatment: "UV+ Anti-Glare",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtTxXBHwxUT4FLuHy0LKCXfWkemQKSXfGw561ZCfp4Wkd9BKlCTHZAU3QIGq29Wj2pVpsmKs4R3P7rYzs5D5MooHrb72RIwugKCQAyH9_r&usqp=CAc",
  },
];

export default function Lenses() {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState({}); // { [id]: true }

  const handleAdd = async (product) => {
    setAdding((s) => ({ ...s, [product.id]: true }));
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        code: product.code,
        image: product.image, // random pic
      });
      await new Promise((r) => setTimeout(r, 400));
    } finally {
      setAdding((s) => ({ ...s, [product.id]: false }));
    }
  };

  return (
    <section className="relative min-h-[60vh]">
      {/* background pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(2,6,23,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h2 className="text-balance bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
            Lenses
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            High-clarity optics with dependable coatings. Choose the lens type that fits your needs.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LENSES.map((p) => (
            <li
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm backdrop-blur transition hover:shadow-md"
            >
              {/* image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* content */}
              <div className="p-4">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                  <div className="text-right text-sm font-semibold text-slate-900 tabular-nums">
                    ₦{p.price.toLocaleString()}
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Code: {p.code}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Type: {p.type}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    {p.material}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    {p.treatment}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleAdd(p)}
                    disabled={!!adding[p.id]}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 disabled:cursor-not-allowed disabled:opacity-70"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    {adding[p.id] ? "Adding…" : "Add to Cart"}
                  </button>

                  <a
                    href="#lens-guide"
                    className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
                  >
                    Lens guide
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Quick lens explainer */}
        <div
          id="lens-guide"
          className="mt-8 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm"
        >
          <h3 className="mb-2 text-base font-semibold text-slate-900">Lens Basics</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li><span className="font-medium">Type:</span> Single-Vision (distance/reading) or Progressive (multi-focus).</li>
            <li><span className="font-medium">Index:</span> 1.56 / 1.60 / 1.67 — higher index = thinner lens.</li>
            <li><span className="font-medium">Coatings:</span> HMC anti-glare, UV+, and Blue-Light options available.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
