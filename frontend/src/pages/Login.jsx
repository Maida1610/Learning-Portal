import { SignIn } from '@clerk/clerk-react'

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/signup"
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "w-full mx-auto",
              card: "shadow-lg rounded-xl w-full",
            },
          }}
        />
      </div>
    </div>
  )
}