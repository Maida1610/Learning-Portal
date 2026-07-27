import { useUser, UserProfile } from '@clerk/clerk-react'

export default function Profile() {
  const { user } = useUser()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {user?.firstName}'s Profile
      </h1>
      <p className="text-gray-500 mt-1">
        Manage your account details, email, and security settings.
      </p>

      <div className="mt-8 w-full overflow-x-auto">
        <UserProfile
          routing="hash"
          appearance={{
            elements: {
              rootBox: "w-full mx-auto",
              card: "shadow-sm rounded-xl w-full",
            },
          }}
        />
      </div>
    </div>
  )
}