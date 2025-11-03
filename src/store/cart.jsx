import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart_v1")) ?? [];
    } catch {
      return [];
    }
  });

  // persist
  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(items));
  }, [items]);

  const addToCart = (p) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === p.id);
      if (i >= 0) {
        return prev.map((x) => (x.id === p.id ? { ...x, qty: (x.qty ?? 1) + 1 } : x));
      }
      return [...prev, { id: p.id, name: p.name, price: p.price, code: p.code, image: p.image, qty: 1 }];
    });
  };

  const removeItem = (id) => setItems((xs) => xs.filter((x) => x.id !== id));
  const qtyChange = (id, qty) =>
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x)));
  const clearCart = () => setItems([]);

  const cartCount = useMemo(() => items.reduce((s, it) => s + (it.qty ?? 1), 0), [items]);
  const subtotal  = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);

  const value = { items, addToCart, removeItem, qtyChange, clearCart, cartCount, subtotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
