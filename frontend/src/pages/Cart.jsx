import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Your cart is empty</h1>
        <p className="text-gray-400 mt-3">Browse our courses and add something you'd like to learn.</p>
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-8">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 bg-dark-card border border-dark-border rounded-xl p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full sm:w-32 h-32 sm:h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.instructor}</p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-primary-400 font-bold">${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-400 hover:text-red-300 font-medium"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-gray-400 text-sm">Total ({cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'})</p>
          <p className="text-2xl font-bold text-white mt-1">${totalPrice}</p>
        </div>

        <Link
          to="/checkout"
          className="px-8 py-3 rounded-lg bg-gradient-brand text-white font-semibold text-center hover:opacity-90"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}