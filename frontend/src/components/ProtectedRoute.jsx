import { useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import Loader from './Loader'

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return <Loader />
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}