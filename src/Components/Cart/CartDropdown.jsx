import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext.jsx';

export default function CartDropdown({ onClose }) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="absolute right-4 top-14 w-80 bg-white shadow-xl rounded-lg border z-50">
      <div className="p-4">
        <h4 className="font-semibold">Your Cart</h4>
      </div>

      <div className="max-h-56 overflow-auto px-4 pb-4">
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-6">Your cart is empty</div>
        ) : (
          items.map((it) => (
            <div key={it._id || it.id} className="flex items-center gap-3 py-3 border-b last:border-b-0">
              <img src={it.image} alt={it.title} className="w-12 h-12 object-contain" />
              <div className="flex-1">
                <div className="text-sm font-medium line-clamp-1">{it.title}</div>
                <div className="text-xs text-gray-500">GHS{it.price} x {it.quantity}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <button onClick={() => updateQuantity(it._id || it.id, Math.max((it.quantity || 1) - 1, 1))} className="text-xs px-2 py-1 bg-gray-100 rounded">-</button>
                <button onClick={() => updateQuantity(it._id || it.id, (it.quantity || 1) + 1)} className="text-xs px-2 py-1 bg-gray-100 rounded">+</button>
                <button onClick={() => removeItem(it._id || it.id)} className="text-xs text-red-600 mt-1">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium">Subtotal</span>
          <span className="font-semibold">GHS{totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/cart" onClick={onClose} className="block text-center bg-[#C72F61] text-white px-3 py-2 rounded">View Cart</Link>
      </div>
    </div>
  );
}
