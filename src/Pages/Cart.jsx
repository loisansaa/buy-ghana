import React from 'react';
import { useCart } from '../Context/CartContext.jsx';

export default function CartPage() {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {items.map((it) => (
            <div key={it._id || it.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={it.image} alt={it.title} className="w-24 h-24 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-gray-600">GHS{it.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(it._id || it.id, Math.max((it.quantity || 1) - 1, 1))} className="px-2 py-1 bg-gray-100 rounded">-</button>
                <span className="px-3">{it.quantity}</span>
                <button onClick={() => updateQuantity(it._id || it.id, (it.quantity || 1) + 1)} className="px-2 py-1 bg-gray-100 rounded">+</button>
                <button onClick={() => removeItem(it._id || it.id)} className="ml-4 text-red-600">Remove</button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div className="font-semibold">Subtotal</div>
            <div className="font-bold">GHS{totalPrice.toFixed(2)}</div>
          </div>

          <div className="flex gap-3 justify-end">
            <button onClick={clearCart} className="px-4 py-2 bg-gray-100 rounded">Clear Cart</button>
            <button className="px-4 py-2 bg-[#C72F61] text-white rounded">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
