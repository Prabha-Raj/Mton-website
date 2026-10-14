import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND } from '../../data/products';

export default function CartDrawer({ onCheckout }) {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 999;
  const isFreeDelivery = cartSubtotal >= FREE_SHIPPING_THRESHOLD;
  const deliveryFee = isFreeDelivery || cartSubtotal === 0 ? 0 : 60;
  const grandTotal = cartSubtotal + deliveryFee;
  const amountNeeded = FREE_SHIPPING_THRESHOLD - cartSubtotal;
  const progressPercent = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c0e13] border-l border-gold-dark/40 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gold-dark/30 flex items-center justify-between bg-[#12151c]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-gold-500/30 rounded-lg">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-100 text-base">Your Fresh Order</h3>
                <p className="text-xs text-amber-300/80">
                  {cartItems.length} {cartItems.length === 1 ? 'Cut' : 'Cuts'} in Cart
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free delivery progress */}
          <div className="px-5 py-3 bg-[#161a22] border-b border-gold-dark/20 text-xs">
            {isFreeDelivery ? (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Zap className="w-4 h-4 fill-emerald-400" />
                <span>You unlocked FREE Express 90-Min Delivery!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-gray-300 mb-1.5">
                  <span>Add <strong className="text-amber-400">₹{amountNeeded}</strong> more for FREE delivery</span>
                  <span className="text-gray-500 font-mono">{progressPercent}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-rose-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-gold-500/20 flex items-center justify-center text-amber-400">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-200">Your Basket is Empty</h4>
                  <p className="text-xs text-gray-400 max-w-xs mt-1">
                    Select from our hand-cut tender goat curry cuts, French trimmed lamb chops, or artisanal keema.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Explore Prime Cuts
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.itemKey}
                  className="bg-[#12151d] border border-gold-dark/30 rounded-xl p-3 flex gap-3.5 hover:border-gold-500/40 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg object-cover border border-gold-500/20 shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-gray-100 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.itemKey)}
                          className="text-gray-500 hover:text-rose-400 p-0.5 transition-colors"
                          title="Remove cut"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded font-medium">
                          Portion: {item.selectedWeight}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {item.pieces}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-800/60">
                      <div className="font-bold text-sm text-gold-bright font-mono">
                        ₹{item.unitPrice * item.quantity}
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-[#0a0b0e] border border-gold-500/30 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.itemKey, -1)}
                          className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.itemKey, 1)}
                          className="px-2 py-1 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-[#12151c] border-t border-gold-dark/40 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-gray-200">₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Express Chilled Delivery</span>
                  <span className="font-mono">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-800 pt-2 flex justify-between text-sm font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-gold-bright font-mono text-base">₹{grandTotal}</span>
                </div>
              </div>

              {/* Halal and Fresh Assurance */}
              <div className="flex items-center gap-2 text-[10px] text-gray-400 bg-black/40 p-2 rounded-lg border border-gold-500/10">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vacuum packed in food-grade thermal bags with ice gel pads.</span>
              </div>

              <button
                onClick={() => {
                  if (onCheckout) onCheckout();
                }}
                className="btn-gold w-full py-3 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Proceed to Express Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] text-gray-500 hover:text-rose-400 py-1"
              >
                Clear All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
