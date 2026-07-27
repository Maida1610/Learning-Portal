import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Policy from './pages/Policy.jsx'
import Faq from './pages/FAQ.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUP.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/courseDetail.jsx'
import Profile from './pages/Profile.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/login/*" element={<Login />} />
      <Route path="/signup/*" element={<Signup />} />
    </Routes>
  )
}

export default App