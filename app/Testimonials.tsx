"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Dallas Wheels built the most reliable wheelset I've ever used—solid in all conditions.",
    author: "— A. Cyclist",
  },
  {
    quote: "When my wheelchair rim cracked, DW had me rolling again in days. Pickup and delivery was a lifesaver.",
    author: "— R. Adams",
  },
  {
    quote: "A rare blend of old-school craft and nerdy precision. Love what they're doing.",
    author: "— B. Engineer",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false) // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length)
        setFade(true) // fade-in new one
      }, 300) // fade-out duration
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#003366]">Testimonials</h2>
      <div className="max-w-3xl mx-auto text-center">
        <blockquote
          className={`italic text-xl mb-4 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          "{testimonials[index].quote}"
        </blockquote>
        <cite className="text-[#003366] font-medium">
          {testimonials[index].author}
        </cite>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-[#003366]" : "bg-gray-300"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
