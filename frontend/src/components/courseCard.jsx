import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function CourseCard({ course }) {
  const { id, title, instructor, thumbnail, price, originalPrice, rating } = course
  const { addToCart, isInCart } = useCart()

  const alreadyInCart = isInCart(id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!alreadyInCart) {
      addToCart(course)
    }
  }

  return (
    <Link
      to={`/courses/${id}`}
      className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-primary-500 transition-colors block"
    >
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-40 sm:h-48 object-cover" />
        {originalPrice && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            ${price} <span className="line-through opacity-70">${originalPrice}</span>
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{instructor}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-primary-400 font-bold">${price}</span>
            {originalPrice && (
              <span className="text-gray-500 text-sm line-through">${originalPrice}</span>
            )}
          </div>
          <span className="text-sm text-yellow-400 flex items-center gap-1">
            ★ {rating}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={alreadyInCart}
          className={`w-full mt-4 py-2.5 rounded-lg text-sm font-semibold ${
            alreadyInCart
              ? 'bg-dark-border text-gray-400 cursor-not-allowed'
              : 'bg-gradient-brand text-white hover:opacity-90'
          }`}
        >
          {alreadyInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  )
}