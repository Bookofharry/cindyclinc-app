import { useState } from "react";
import { useCart } from "../store/cart.jsx";
import { useOutletContext } from "react-router-dom";

// Example data — swap for your real data source
const FRAMES = [
  {
    id: "fr-ava-52",
    name: "Ava Acetate",
    price: 42000,
    code: "SKU-A52",
    fit: "Medium",
    specs: { lens: 52, bridge: 18, temple: 145 },
    color: "Tortoise",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "fr-noah-49",
    name: "Noah Round",
    price: 38000,
    code: "SKU-N49",
    fit: "Narrow",
    specs: { lens: 49, bridge: 20, temple: 142 },
    color: "Matte Black",
    image:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "fr-luna-54",
    name: "Luna Cat-Eye",
    price: 51000,
    code: "SKU-L54",
    fit: "Wide",
    specs: { lens: 54, bridge: 16, temple: 147 },
    color: "Crystal",
    image:
      "https://images.unsplash.com/photo-1591076482161-b51b4f2a9a2c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Frames() {
  const { addToCart } = useCart(); // from Shop.jsx
  const [adding, setAdding] = useState({}); // { [id]: true }

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
            Frames
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Premium materials, precise sizing, and comfortable daily wear. Pick your fit below.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMES.map((p) => (
            <li
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-sm backdrop-blur transition hover:shadow-md"
            >
              {/* image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} - ${p.color}`}
                  className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* content */}
              <div className="p-4">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">
                    {p.name}
                  </h3>
                  <div className="text-right text-sm font-semibold text-slate-900 tabular-nums">
                    ₦{p.price.toLocaleString()}
                  </div>
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Code: {p.code}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Fits: {p.fit}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    {p.specs.lens}-{p.specs.bridge}-{p.specs.temple} mm
                  </span>
                  <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-0.5">
                    Color: {p.color}
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
                    href="#size-guide"
                    className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
                  >
                    Size guide
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Optional: a size/fit explainer */}
        <div id="size-guide" className="mt-8 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-700 shadow-sm">
          <h3 className="mb-2 text-base font-semibold text-slate-900">Fit & Sizing</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li><span className="font-medium">Fits:</span> Narrow, Medium, or Wide (face width guidance).</li>
            <li><span className="font-medium">52-18-145:</span> lens – bridge – temple length (mm).</li>
            <li><span className="font-medium">Tip:</span> Compare to a pair you own for the best comfort.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
