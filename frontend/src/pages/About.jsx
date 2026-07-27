export default function About() {
  return (
    <div className="bg-dark-bg">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            About{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">ELearning</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary-400">500K+</p>
            <p className="text-gray-400 text-sm mt-2">Active Learners</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary-400">200+</p>
            <p className="text-gray-400 text-sm mt-2">Expert Instructors</p>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
            <p className="text-3xl font-extrabold text-primary-400">1000+</p>
            <p className="text-gray-400 text-sm mt-2">Courses Available</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              ELearning started with a simple idea — learning shouldn't be limited by location or budget.
              Today we bring together industry professionals and curious learners on one platform, offering
              practical, hands-on courses in web development, design, data, and more.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 mt-3 leading-relaxed">
              To empower learners worldwide with next-generation courses and industry-leading mentors,
              helping them build real skills that translate directly into career growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}