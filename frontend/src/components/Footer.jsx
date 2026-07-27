import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div>
            <h3 className="text-xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">
              ELearning LMS
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Empowering learners worldwide with next-generation courses and industry-leading mentors to help shape their future.
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">📧 support@elearning.com</p>
              <p className="flex items-center gap-2">📞 +1 (555) 123-4567</p>
              <p className="flex items-center gap-2">📍 123 Education St, Learning City</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-dark-border">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-white">All Courses</Link></li>
              <li><Link to="/courses" className="hover:text-white">Categories</Link></li>
              <li><Link to="/signup" className="hover:text-white">Become an Instructor</Link></li>
              <li><Link to="/" className="hover:text-white">Pricing Plans</Link></li>
              <li><Link to="/" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-dark-border">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/" className="hover:text-white">Careers</Link></li>
              <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 pb-2 border-b border-dark-border">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-3">
              Join our newsletter for updates, offers, and the latest eLearning insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-dark-card border border-dark-border rounded-l-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 rounded-r-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dark-border mt-10 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="text-white font-medium">ELearning</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500"
              >
                {s === 'facebook' && 'f'}
                {s === 'twitter' && '𝕏'}
                {s === 'instagram' && '📷'}
                {s === 'linkedin' && 'in'}
                {s === 'youtube' && '▶'}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}