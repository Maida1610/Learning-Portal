import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [processing, setProcessing] = useState(false)

  const handlePayment = () => {
    setProcessing(true)

    // Placeholder — real payment gateway (Stripe etc.) will replace this
    setTimeout(() => {
      setProcessing(false)
      clearCart()
      navigate('/dashboard')
    }, 1500)
  }

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Nothing to checkout</h1>
        <p className="text-gray-400 mt-3">Your cart is empty right now.</p>
        <Link
          to="/courses"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-brand text-white font-semibold hover:opacity-90"
        >
          Browse Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order summary */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-white">Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-xl p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.instructor}</p>
              </div>
              <span className="text-primary-400 font-bold">${item.price}</span>
            </div>
          ))}
        </div>

        {/* Payment box */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold text-white mb-4">Payment Details</h2>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card number"
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="border-t border-dark-border mt-5 pt-5 flex items-center justify-between">
            <span className="text-gray-400">Total</span>
            <span className="text-xl font-bold text-white">${totalPrice}</span>
          </div>

          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full mt-5 py-3 rounded-lg bg-gradient-brand text-white font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {processing ? 'Processing...' : `Pay $${totalPrice}`}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            This is a demo checkout — no real payment is processed.
          </p>
        </div>
      </div>
    </div>
  )
}