import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useCart } from '../hooks/useCart'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartItems } = useCart()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Policy', path: '/policy' },
    { name: 'FAQ', path: '/faq' },
  ]

  return (
    <nav className="bg-[#131829] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-[72px]">

          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-brand bg-clip-text text-transparent"
          >
            ELearning
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-white text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            {/* Cart icon */}
            <Link to="/cart" className="relative text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-brand text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <SignedIn>
              <Link to="/dashboard" className="text-gray-300 hover:text-white text-base font-medium">
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <Link
                to="/login"
                className="flex items-center gap-2 px-7 py-2.5 rounded-lg bg-gradient-brand text-white text-base font-semibold hover:opacity-90"
              >
                Login
              </Link>
            </SignedOut>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white flex items-center gap-2"
            >
              Cart {cartItems.length > 0 && `(${cartItems.length})`}
            </Link>

            <SignedIn>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-gray-300">
                Dashboard
              </Link>
              <div className="pt-2"><UserButton afterSignOutUrl="/" /></div>
            </SignedIn>

            <SignedOut>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="px-7 py-2.5 rounded-lg bg-gradient-brand text-white text-center font-semibold"
              >
                Login
              </Link>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  )
}