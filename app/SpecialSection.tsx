'use client'
import { useState } from 'react'

export default function SpecialSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="special" className="bg-white p-8 rounded-xl mb-12 mx-4 md:mx-12 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#003366]">🎯 Introductory Special</h2>
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500"
      >
        {open ? "Hide Details" : "View Deals"}
      </button>

      {open && (
        <div className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">30mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $1,950</div>
              <div className="text-3xl font-bold text-[#003366] my-2">$585</div>
              <p className="text-sm text-gray-600">1,455 g • 21mm internal • internal nipples</p>
            </div>

            <div className="bg-gray-50 p-6 rounded shadow relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">47mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,300</div>
              <div className="text-3xl font-bold text-[#003366] my-2">$725</div>
              <p className="text-sm text-gray-600">1,525 g • 21mm internal • internal nipples</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Tune KillHill/ClimbHill hubs</strong> — German-engineered, CNC-machined aluminum, anodized finish, hand-assembled.
            </p>
            <p>
              <strong>Munich Composites rims</strong> — braided carbon fiber, available in 30mm + 47mm depths, lightweight, stiff, aerodynamic.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
