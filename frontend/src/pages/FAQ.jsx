import { useState } from 'react'

const faqs = [
  {
    question: "Will I receive the certification for each course?",
    answer: "Yes, you'll receive a certificate of completion for every course you finish on the platform.",
  },
  {
    question: "Can I get the code for each course?",
    answer: "Yes, source code and project files are provided with courses that include hands-on coding content.",
  },
  {
    question: "How long do I have access to a course after purchase?",
    answer: "Once purchased, you get lifetime access to the course content, including any future updates.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a full refund within 7 days of purchase if you've completed less than 20% of the course.",
  },
  {
    question: "Do I need any prior experience to start?",
    answer: "It depends on the course level. Beginner courses assume no prior experience, while advanced courses list prerequisites on their page.",
  },
]

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-white">{faq.question}</span>
        <span className="text-gray-400 text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default function Faq() {
  return (
    <div className="bg-dark-bg">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Frequently Asked{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Got questions? We've got answers. Find everything you need to know about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>

        <div className="mt-10 bg-dark-card border border-dark-border rounded-2xl text-center py-10 px-6">
          <h3 className="text-xl font-bold text-white">Still have questions?</h3>
          <p className="text-gray-400 mt-2">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <button className="mt-5 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  )
}