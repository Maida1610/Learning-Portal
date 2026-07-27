import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignedOut } from '@clerk/clerk-react'
import CourseCard from '../components/courseCard'
import illustration from '../assets/illustration.png'

const dummyCourses = [
  {
    id: 1,
    title: "Full-Stack MERN Bootcamp",
    instructor: "12 students",
    thumbnail: "https://placehold.co/400x250/1f2740/8b5cf6?text=MERN+Stack",
    price: 199,
    originalPrice: 299,
    rating: 4.5,
  },
  {
    id: 2,
    title: "React JS Complete Guide",
    instructor: "20 students",
    thumbnail: "https://placehold.co/400x250/1f2740/6366f1?text=React+JS",
    price: 149,
    originalPrice: 249,
    rating: 4.8,
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    instructor: "15 students",
    thumbnail: "https://placehold.co/400x250/1f2740/ec4899?text=TypeScript",
    price: 99,
    originalPrice: 179,
    rating: 4.7,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full Stack Developer",
    rating: 5,
    text: "The courses here are absolutely amazing! I've learned so much and the instructors are top-notch. The interactive content keeps me engaged throughout.",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    rating: 5,
    text: "Excellent platform for learning. The course structure is well-organized and the practical examples really help in understanding complex concepts.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    rating: 4,
    text: "I love how comprehensive the courses are. From beginner to advanced, there's something for everyone. Highly recommended!",
  },
  {
    name: "David Wilson",
    role: "Software Engineer",
    rating: 5,
    text: "The quality of education here is outstanding. The instructors are knowledgeable and the course materials are up-to-date with industry standards.",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    rating: 4,
    text: "Great learning experience! The courses are well-structured and the community support is fantastic. I've gained valuable skills for my career.",
  },
  {
    name: "James Anderson",
    role: "Marketing Specialist",
    rating: 5,
    text: "The platform offers incredible value for money. The variety of courses and the quality of instruction exceeded my expectations.",
  },
]

const faqs = [
  {
    question: "Will I receive the certification for each course?",
    answer: "Yes, you'll receive a certificate of completion for every course you finish on the platform.",
  },
  {
    question: "Can I get the code for each course?",
    answer: "Yes, source code and project files are provided with courses that include hands-on coding content.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
      <span className="text-gray-400 text-sm ml-1">({rating}/5)</span>
    </div>
  )
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-white">{faq.question}</span>
        <span className="text-gray-400 text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div className="bg-dark-bg">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.1]">
              Improve Your Online Learning Experience Better Instantly
            </h1>
            <p className="text-gray-400 mt-6 text-lg">Find your desired courses from them</p>

            <div className="mt-8 flex items-center bg-dark-card border border-dark-border rounded-xl overflow-hidden w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-gradient-brand p-3 m-1 rounded-lg text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 mt-10">
              <div className="flex -space-x-2">
                <span className="w-9 h-9 rounded-full bg-primary-500 border-2 border-dark-bg flex items-center justify-center text-white text-xs font-bold">A</span>
                <span className="w-9 h-9 rounded-full bg-accent-500 border-2 border-dark-bg flex items-center justify-center text-white text-xs font-bold">B</span>
                <span className="w-9 h-9 rounded-full bg-primary-400 border-2 border-dark-bg flex items-center justify-center text-white text-xs font-bold">C</span>
              </div>
              <p className="text-sm text-gray-400">
                500K+ learners already trust us.{' '}
                <SignedOut>
                  <Link to="/signup" className="text-primary-400 font-medium hover:underline">
                    Join them
                  </Link>
                </SignedOut>
              </p>
            </div>
          </div>

          {/* Illustration with decorative ring */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-[85%] h-[85%] border-2 border-primary-500/40 rounded-full"></div>

            <div className="relative bg-dark-card rounded-2xl h-72 sm:h-96 w-full flex items-center justify-center border border-dark-border overflow-hidden">
  <img
    src={illustration}
    alt="Student learning illustration"
    className="w-full h-full object-contain p-2"
  />
</div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Expand Your Career{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Opportunity</span>
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
            Opportunities With our Courses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-block px-6 py-3 rounded-lg border border-dark-border text-gray-300 hover:text-white hover:border-primary-500 font-medium"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">What Our Students Say</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our amazing students have to say about their learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="mt-3">
                <StarRating rating={t.rating} />
              </div>
              <p className="text-gray-400 text-sm mt-4 italic">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-brand text-center py-6 px-4">
          <p className="text-white font-bold text-lg">Join Thousands of Happy Students</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-3">
            Got questions? We've got answers. Find everything you need to know about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>

        <div className="mt-10 bg-dark-card border border-dark-border rounded-2xl text-center py-10 px-6">
          <h3 className="text-xl font-bold text-white">Still have questions?</h3>
          <p className="text-gray-400 mt-2">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="mt-5 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  )
}