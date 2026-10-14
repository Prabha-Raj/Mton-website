import React, { useState } from 'react';
import { X, CheckCircle, MapPin, Clock, CreditCard, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND } from '../../data/products';

export default function CheckoutModal({ isOpen, onClose }) {
  const { cartItems, cartSubtotal, clearCart, setIsCartOpen } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Vikramaditya Roy',
    phone: '9876543210',
    address: 'Flat 402, Royal Palms, South Extension Part 2',
    deliverySlot: 'express',
    paymentMethod: 'cod',
  });

  if (!isOpen) return null;

  const deliveryFee = cartSubtotal >= 999 ? 0 : 60;
  const grandTotal = cartSubtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 200);
  };

  const handleCloseAll = () => {
    setIsSubmitted(false);
    onClose();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleCloseAll}
      />

      <div className="relative bg-[#0d0f15] border border-gold-metallic/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl z-10 max-h-[95vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest bg-amber-950/40 border border-gold-500/30 px-3 py-1 rounded-full">
                Order Confirmed • #{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-3">
                Fresh Cuts Dispatched Soon!
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto mt-2 leading-relaxed">
                Thank you for choosing <strong className="text-amber-400">MTON™</strong>. Our master butcher has received your order and is hand-trimming your cuts with vacuum sealing at 4°C.
              </p>
            </div>

            <div className="bg-[#12151e] border border-gold-dark/40 rounded-xl p-4 text-xs text-left space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Estimated Arrival:</span>
                <span className="font-bold text-amber-300">Within 60 - 90 Minutes</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Deliver To:</span>
                <span className="text-gray-200">{formData.address}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Payment Mode:</span>
                <span className="text-gray-200 uppercase font-semibold">{formData.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-gray-200 border-t border-gray-800 pt-2 font-bold text-sm">
                <span>Amount Payable:</span>
                <span className="text-gold-bright font-mono">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCloseAll}
              className="btn-gold w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider"
            >
              Continue Exploring MTON Cuts
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gold-dark/30">
              <div>
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <span>MTON Express Delivery Checkout</span>
                </h3>
                <p className="text-xs text-amber-300/80">
                  Total Payable: <strong className="text-gold-bright font-mono">₹{grandTotal}</strong> ({cartItems.length} cuts)
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#12151e] border border-gold-dark/40 focus:border-amber-400 px-3.5 py-2.5 rounded-xl text-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Mobile Number (For Delivery OTP)</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#12151e] border border-gold-dark/40 focus:border-amber-400 px-3.5 py-2.5 rounded-xl text-gray-200 outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Delivery Address & Landmark</label>
                <textarea
                  required
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#12151e] border border-gold-dark/40 focus:border-amber-400 px-3.5 py-2 rounded-xl text-gray-200 outline-none resize-none"
                />
              </div>

              {/* Delivery Slot Option */}
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Select Delivery Speed</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliverySlot: 'express' })}
                    className={`p-2.5 rounded-xl border text-left flex flex-col justify-between ${
                      formData.deliverySlot === 'express'
                        ? 'bg-amber-500/10 border-gold-metallic text-amber-300'
                        : 'bg-[#12151e] border-gray-800 text-gray-400'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      90-Min Express
                    </span>
                    <span className="text-[10px] text-gray-400 mt-1">Direct from butcher</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliverySlot: 'evening' })}
                    className={`p-2.5 rounded-xl border text-left flex flex-col justify-between ${
                      formData.deliverySlot === 'evening'
                        ? 'bg-amber-500/10 border-gold-metallic text-amber-300'
                        : 'bg-[#12151e] border-gray-800 text-gray-400'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Evening Slot
                    </span>
                    <span className="text-[10px] text-gray-400 mt-1">6:00 PM - 8:30 PM</span>
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'cod', label: 'Cash on Deliv.' },
                    { id: 'upi', label: 'UPI / GPay' },
                    { id: 'card', label: 'Card / NetBank' },
                  ].map((pay) => (
                    <button
                      key={pay.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: pay.id })}
                      className={`p-2 rounded-xl border text-center font-bold text-xs ${
                        formData.paymentMethod === pay.id
                          ? 'bg-amber-500/20 border-gold-metallic text-amber-300'
                          : 'bg-[#12151e] border-gray-800 text-gray-400'
                      }`}
                    >
                      {pay.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 p-2.5 bg-black/40 rounded-xl border border-gold-500/20 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Halal certified • Sealed thermal cold pouch included.</span>
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg mt-2"
              >
                <span>Confirm & Place Order (₹{grandTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
