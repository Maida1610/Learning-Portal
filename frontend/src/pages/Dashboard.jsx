import { useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const { user } = useUser()

  const enrolledCourses = [
    { id: 1, title: "React JS Complete Guide", progress: 65 },
    { id: 2, title: "MERN Stack Bootcamp", progress: 30 },
    { id: 3, title: "TypeScript Fundamentals", progress: 90 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Welcome back, {user?.firstName || "Student"} 👋
      </h1>
      <p className="text-gray-500 mt-1">Here's what's happening with your courses.</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Enrolled Courses</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{enrolledCourses.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-5">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
        </div>
      </div>

      {/* Course progress list */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Continue Learning</h2>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <Link to={`/courses/${course.id}`} className="font-medium text-gray-800 hover:text-primary-600">
                  {course.title}
                </Link>
                <span className="text-sm text-gray-500">{course.progress}% complete</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}