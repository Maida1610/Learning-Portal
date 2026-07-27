import { useState } from 'react'
import CourseCard from '../components/CourseCard'
import mernThumb from '../assets/mern.png'
import reactThumb from '../assets/react.png'
import typescriptThumb from '../assets/typescript.png'
import uiuxThumb from '../assets/UI.png'

const dummyCourses = [
  {
    id: 1,
    title: "React JS Complete Guide",
    instructor: "Ali Raza",
    thumbnail: reactThumb,
    price: 29,
    rating: 4.8,
    category: "Web Development",
  },
  {
    id: 2,
    title: "MERN Stack Bootcamp",
    instructor: "Sara Ahmed",
    thumbnail: mernThumb,
    price: 49,
    rating: 4.6,
    category: "Web Development",
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    instructor: "Bilal Khan",
    thumbnail: typescriptThumb,
    price: 19,
    rating: 4.9,
    category: "Programming",
  },
  {
    id: 4,
    title: "UI/UX Design Basics",
    instructor: "Hina Malik",
    thumbnail: uiuxThumb,
    price: 25,
    rating: 4.5,
    category: "Design",
  },
]

export default function Courses() {
  const [search, setSearch] = useState("")

  const filteredCourses = dummyCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Courses</h1>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center py-10">No courses found.</p>
        )}
      </div>
    </div>
  )
}