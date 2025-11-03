// Eyedrop.jsx
// Same card layout as Frames/Lenses. Random images. Uses global cart via useCart().

import { useState } from "react";
import { useCart } from "../store/cart.jsx";

// Demo data (random images via picsum.photos)
const EYEDROPS = [
  {
    id: "ed-hyp-10",
    name: "HydraDrop Daily",
    price: 8500,
    code: "SKU-ED10HYP",
    type: "Lubricant",
    volume: "10 ml",
    active: "Hypromellose",
    preservativeFree: true,
    image: "https://picsum.photos/seed/eyedrop-a/1600/1200",
  },
  {
    id: "ed-sod-15",
    name: "Soothe-Plus",
    price: 9500,
    code: "SKU-ED15SOO",
    type: "Redness Relief",
    volume: "15 ml",
    active: "Naphazoline",
    preservativeFree: false,
    image: "https://picsum.photos/seed/eyedrop-b/1600/1200",
  },
  {
    id: "ed-blu-10",
    name: "ScreenGuard BLF",
    price: 11000,
    code: "SKU-ED10BLF",
    type: "Blue-Light Relief",
    volume: "10 ml",
    active: "PEG 400",
    preservativeFree: true,
    image: "https://picsum.photos/seed/eyedrop-c/1600/1200",
  },
];

export default function Eyedrop() {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState({});

  const handleAdd = async (product) => {
    setAdding((s) => ({ ...s, [product.id]: true }));
    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        code: product.code,
        image: product.image,
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
            Eye Drops
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Hydration and relief for strained or dry eyes. Pick the formula that fits your day.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EYEDROPS.map((p) => (
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
                    Volume: {p.volume}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Active: {p.active}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    {p.preservativeFree ? "Preservative-Free" : "With Preservative"}
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
                    href="#drop-guide"
                    className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
                  >
                    Usage guide
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* quick explainer */}
        <div
          id="drop-guide"
          className="mt-8 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm"
        >
          <h3 className="mb-2 text-base font-semibold text-slate-900">Eye Drop Basics</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li><span className="font-medium">Lubricants:</span> relieve dryness/irritation from screens or AC.</li>
            <li><span className="font-medium">Preservative-free:</span> gentler for sensitive or frequent use.</li>
            <li><span className="font-medium">Check expiry:</span> discard opened bottles after the stated period.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
