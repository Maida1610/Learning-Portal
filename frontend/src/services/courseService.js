import mernThumb from '../assets/mern.png'
import reactThumb from '../assets/react.png'
import typescriptThumb from '../assets/typescript.png'

const courses = [
  {
    id: 1,
    title: "Full-Stack MERN Bootcamp",
    instructor: "12 students",
    thumbnail: mernThumb,
    price: 199,
    originalPrice: 299,
    rating: 4.5,
    description: "Learn how to build full-stack applications with MongoDB, Express, React, and Node.js.",
    lessons: ["MongoDB Basics", "Express APIs", "React Frontend", "Authentication", "Deployment"],
  },
  {
    id: 2,
    title: "React JS Complete Guide",
    instructor: "20 students",
    thumbnail: reactThumb,
    price: 149,
    originalPrice: 249,
    rating: 4.8,
    description: "Master React JS from basics to advanced concepts including hooks, context, and routing.",
    lessons: ["Introduction to React", "Components & Props", "State & Hooks", "React Router", "Final Project"],
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    instructor: "15 students",
    thumbnail: typescriptThumb,
    price: 99,
    originalPrice: 179,
    rating: 4.7,
    description: "Learn TypeScript from the ground up and add type safety to your JavaScript projects.",
    lessons: ["Types & Interfaces", "Generics", "TypeScript with React", "Advanced Types", "Final Project"],
  },
]

export function getAllCourses() {
  return courses
}

export function getCourseById(id) {
  return courses.find((course) => course.id === Number(id))
}