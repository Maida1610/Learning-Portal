import { useParams, Link } from 'react-router-dom'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

const dummyCourses = [
  {
    id: "1",
    title: "React JS Complete Guide",
    instructor: "Ali Raza",
    thumbnail: "https://placehold.co/800x400/6366f1/white?text=React+JS",
    price: 29,
    rating: 4.8,
    description: "Master React JS from basics to advanced concepts including hooks, context, and routing.",
    lessons: ["Introduction to React", "Components & Props", "State & Hooks", "React Router", "Final Project"],
  },
  {
    id: "2",
    title: "MERN Stack Bootcamp",
    instructor: "Sara Ahmed",
    thumbnail: "https://placehold.co/800x400/4f46e5/white?text=MERN+Stack",
    price: 49,
    rating: 4.6,
    description: "Build full-stack applications using MongoDB, Express, React, and Node.js.",
    lessons: ["MongoDB Basics", "Express APIs", "React Frontend", "Authentication", "Deployment"],
  },
]

export default function CourseDetail() {
  const { id } = useParams()
  const course = dummyCourses.find((c) => c.id === id)

  if (!course) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500">Course not found.</p>
        <Link to="/courses" className="text-primary-600 font-medium mt-2 inline-block">
          Back to Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 sm:h-72 object-cover rounded-xl"
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="text-gray-500 mt-1">By {course.instructor} · ⭐ {course.rating}</p>
        </div>

        <SignedIn>
          <button className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 whitespace-nowrap">
            Enroll · ${course.price}
          </button>
        </SignedIn>

        <SignedOut>
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 text-center whitespace-nowrap"
          >
            Login to Enroll
          </Link>
        </SignedOut>
      </div>

      <p className="text-gray-600 mt-6">{course.description}</p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Course Content</h2>
        <div className="space-y-2">
          {course.lessons.map((lesson, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-primary-600 font-medium">{i + 1}.</span>
              <span className="text-gray-700">{lesson}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}