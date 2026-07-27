export default function Policy() {
  const sections = [
    {
      title: "Privacy Policy",
      content:
        "We collect only the information necessary to provide our services — your name, email, and course progress. We never sell your personal data to third parties. Payment details are processed securely through our payment partners and are not stored on our servers.",
    },
    {
      title: "Refund Policy",
      content:
        "You can request a full refund within 7 days of purchase if you're not satisfied with a course, as long as you've completed less than 20% of the content. Refund requests can be submitted through your account dashboard or by contacting support.",
    },
    {
      title: "Terms of Use",
      content:
        "Course content is for personal, non-commercial use only. Sharing your account credentials or redistributing course materials is not permitted. Certificates are issued only upon full completion of a course's requirements.",
    },
    {
      title: "Cookie Policy",
      content:
        "We use cookies to keep you signed in, remember your preferences, and understand how learners use the platform so we can improve it. You can disable cookies in your browser settings, though some features may not work as expected.",
    },
  ]

  return (
    <div className="bg-dark-bg">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Our{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Policies</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Please review our policies to understand how we operate and protect your interests.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="text-gray-400 mt-3 leading-relaxed text-sm">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}