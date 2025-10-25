import React, { useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * LatestProducts — Eye clinic: shows most recent products (frames, lenses, drops, etc.)
 *
 * Props:
 * - products: Array<Product>
 *   Product = {
 *     id: string | number,
 *     name: string,
 *     price: number,
 *     imageUrl?: string,
 *     category?: string,
 *     createdAt?: string | number | Date,
 *     inStock?: boolean,
 *     rating?: number, // 0..5
 *   }
 * - limit?: number (default 8)
 * - loading?: boolean (show skeletons)
 * - seeAllHref?: string (e.g., "/shop")
 * - currency?: "NGN" | "USD" | string (default "NGN")
 * - className?: string
 */
export default function LatestProducts({
  products = [],
  limit = 8,
  loading = false,
  seeAllHref = "/shop",
  currency = "NGN",
  className = "",
}) {
  const items = useMemo(() => {
    if (!Array.isArray(products)) return [];
    return [...products]
      .filter(Boolean)
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      .slice(0, limit);
  }, [products, limit]);

  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        {/* Heading */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-700/80">
              Store
            </p>
            <h2 className="mt-1 text-2xl font-bold text-sky-950 sm:text-3xl">
              Latest Products
            </h2>
            <p className="mt-1 text-sky-900/70 text-sm">
              Fresh arrivals from our optical shop — frames, lenses, solutions and more.
            </p>
          </div>
          {seeAllHref && (
            <Link
              to={seeAllHref}
              className="whitespace-nowrap rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-900 hover:bg-sky-100"
            >
              See all
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array.from({ length: limit }).map((_, i) => <SkeletonCard key={i} />)
            : items.length > 0
            ? items.map((p) => <ProductCard key={p.id} product={p} currency={currency} />)
            : <EmptyState />}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, currency }) {
  const {
    id,
    name,
    price = 0,
    code,
    imageUrl,
    category,
    createdAt,
    inStock = true,
    rating = 0,
  } = product || {};

  const isNew = createdAt ? daysSince(createdAt) <= 14 : false;
  const href = `/shop/${id}`;

  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sky-50">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <FallbackImage name={name} />
        )}

        {/* Badges */}
        <div className="absolute left-2 top-2 flex gap-2">
          {isNew && (
            <span className="rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
              New
            </span>
          )}
          {!inStock && (
            <span className="rounded-full bg-red-500/90 px-2.5 py-1 text-xs font-semibold text-white shadow">
              Out of stock
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 p-3">
        {category && (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700/70">
            {category}
          </p>
        )}
        <h3 className="line-clamp-2 text-sm font-semibold text-sky-950">{name}</h3>
        <span>Code - {code}</span>
        <div className="mt-1 flex items-center justify-between">
          <Price value={price} currency={currency} />
          {/* <Stars value={rating} /> */}
        </div>
      </div>
    </Link>
  );
}

function Price({ value = 0, currency = "NGN" }) {
  const formatted = useMemo(() => {
    try {
      return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }).format(value);
    } catch {
      return `${currency} ${value}`;
    }
  }, [value, currency]);
  return <span className="text-sm font-bold text-sky-900">{formatted}</span>;
}

function Stars({ value = 0 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${full} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < full ? "fill-yellow-400" : "fill-sky-100"}`}
        >
          <path d="M10 15.27L16.18 18l-1.64-7.03L20 6.24l-7.19-.61L10 0 7.19 5.63 0 6.24l5.46 4.73L3.82 18z" />
        </svg>
      ))}
    </div>
  );
}

function FallbackImage({ name }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 to-sky-50">
      <span className="text-xs font-medium text-sky-500">{name?.[0] || ""}</span>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-sky-100 bg-white">
      <div className="aspect-[4/3] w-full bg-sky-100" />
      <div className="space-y-2 p-3">
        <div className="h-3 w-20 rounded bg-sky-100" />
        <div className="h-3 w-3/4 rounded bg-sky-100" />
        <div className="h-3 w-24 rounded bg-sky-100" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="col-span-2 sm:col-span-3 lg:col-span-4">
      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-8 text-center">
        <p className="text-sm font-medium text-sky-900">No products yet</p>
        <p className="mt-1 text-sm text-sky-900/70">
          When new items are added to the shop, they’ll appear here automatically.
        </p>
      </div>
    </div>
  );
}

function daysSince(dateLike) {
  const d = new Date(dateLike);
  const now = new Date();
  return Math.floor((now - d) / (1000 * 60 * 60 * 24));
}
