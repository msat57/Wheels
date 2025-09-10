'use client'

import Image from 'next/image'

// Reusable components (kept from your original)
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

function Button({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default function DallasWheelsHomepage() {
  // --- Explicit gallery list. Add more filenames here when you upload them ---
  const IMAGES = [
    "/gallery/wheel-1.jpg",
    "/gallery/wheel-2.jpg",
    "/gallery/wheel-3.jpg",
    // "/gallery/wheel-4.jpg",
    // "/gallery/wheel-5.jpg",
    // "/gallery/wheel-6.jpg",
    // add more as you upload them to /public/gallery/
  ];

  return (
    <main className="bg-stone-50 min-h-screen text-gray-800">
      {/* NOTE: Header is now provided by components/ui/Header.tsx via app/layout.tsx */}

      {/* Hero Section */}
      <section className="py-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-2">Traditional Wheelbuilding. Modern Precision</h2>
        <p className="text-xl text-teal-700 font-semibold mb-4">Crafted Since 1973</p>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          For over 50 years, we've hand-built wheels for cyclists and wheelchair users alike.
          Combining old-world craftsmanship with cutting-edge analytics and technology.
        </p>
      </section>

      {/* Introductory Special — updated to your exact content/prices */}
      <section className="bg-white p-8 rounded-none md:rounded-xl mb-12 text-left mx-0 md:mx-12 border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">Introductory Special</h2>
        <p className="text-gray-700 mb-6">
          2 Killer options on hand built DallasWheels wheelsets — <strong>30mm (1,455 g)</strong> and <strong>47mm (1,525 g)</strong> rims,
          internal nipples, with 21mm internal width. Both options use <strong>Tune KillHill/ClimbHill 24h centerlock hubs</strong> and
          super-strong, braided carbon, un-branded, un-painted <strong>Munich Composites (Schmolke) rims</strong>, with internal nipples
          for maximum aerodynamics. Very nice! We will provide a runout and tension report for each wheel, and a free re-true/re-tension
          within the first year.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="relative">
            <CardContent>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME • LIMITED QTY
              </div>
              <h3 className="text-xl font-bold mb-2">30mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $1,950</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$585</div>
              <p className="text-sm text-gray-600">1,455 g • 21mm internal • internal nipples</p>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME • LIMITED QTY
              </div>
              <h3 className="text-xl font-bold mb-2">47mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,300</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$725</div>
              <p className="text-sm text-gray-600">1,525 g • 21mm internal • internal nipples</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 space-y-4 text-gray-700">
          <p>
            <strong>Tune KillHill/ClimbHill hubs</strong> bring together expert German engineering and hand-finished craftsmanship.
            CNC-machined from aerospace-grade aluminum, they offer exceptional fatigue strength without unnecessary weight. A refined anodized
            coating defends against corrosion and wear, while hand assembly and adjustment in Buggingen ensure precision, durability, and performance that last.
          </p>
          <p>
            <strong>Munich Composites rims</strong> deliver precise engineering and high-end design, available in 47 mm and 30 mm depths for both speed and versatility.
            Built with advanced composites, they provide stiffness, lightweight durability, and smooth ride response. The internal nipple design streamlines aerodynamics
            and keeps the build clean and lasting. The raw braided carbon weave stands out with a technical yet refined finish that reflects superior craftsmanship.
          </p>
        </div>
      </section>

      {/* Services (kept, with your language) */}
      <section id="services" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Custom Bicycle Wheels</h3>
            <p>Traditional techniques enhanced by advanced analytics. Each build includes detailed tension mapping.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Wheelchair & DME</h3>
            <p>Precision services for wheelchair users & athletes. Pickup & delivery via Bike Medics.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Analytics-Driven Builds</h3>
            <p>Computer-calculated precision combined with traditional craft for performance and reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Fleet & Team Services</h3>
            <p>Volume pricing, consistent builds, fast turnaround for teams, shops, and fleet operations.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Vintage Restoration</h3>
            <p>Period-correct components and traditional techniques preserve authenticity with modern reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Precision Repair & Truing</h3>
            <p>Lateral/radial/dish analysis with professional-grade truing and tension balancing.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* New Sections (added) */}
      <section id="fleet" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Fleet & Team Service</h2>
        <p className="text-gray-700">
          Professional team and fleet services with volume pricing. Consistent builds, fast turnaround, expert support for racing teams, bike shops, and fleet operations.
        </p>
      </section>

      <section id="vintage" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Vintage Restoration</h2>
        <p className="text-gray-700">
          Classic wheel restoration and rebuilding. Period-correct components and traditional techniques preserve the authenticity of vintage bicycles while ensuring modern reliability.
        </p>
      </section>

      <section id="used" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Used Bikes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-blue-600">LeMond Prolog</h3>
            <p className="text-gray-700">Size M, blue/black, excellent condition. Lightweight carbon road bike with Shimano group set.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-blue-600">LeMond Dutch</h3>
            <p className="text-gray-700">Size L, silver/gray, lightly used. Endurance geometry; ideal for long rides or collectors.</p>
          </div>
        </div>
      </section>

      <section id="partners" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Proud Partners & Technology</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="https://berdspokes.com" target="_blank" className="text-blue-600 hover:underline">Berd</a>
          <a href="https://philwood.com" target="_blank" className="text-blue-600 hover:underline">Phil Wood</a>
          <a href="https://lemond.com" target="_blank" className="text-blue-600 hover:underline">LeMond</a>
          <a href="https://bikemedics.net" target="_blank" className="text-blue-600 hover:underline">Bike Medics</a>
          <span>Trudi</span>
        </div>
      </section>

      <section id="why" className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Dallas Wheels?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Traditional Expertise</h3>
            <p>Decades of wheel building experience starting in 1973.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Advanced Analytics</h3>
            <p>Enhanced by cutting-edge wheel analytics technology.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Authorized Dealer</h3>
            <p>Options like Berd spokes and premium components.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Comprehensive Reports</h3>
            <p>Detailed tension mapping and performance analysis.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Convenient Service</h3>
            <p>Local pickup & delivery via Bike Medics partnership.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Full Service Range</h3>
            <p>Fleet services and vintage restoration specialists.</p>
          </div>
        </div>
      </section>

      {/* Gallery — now uses explicit list above */}
      <section id="gallery" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map((src) => (
            <div key={src} className="relative w-full h-64">
              <Image src={src} alt="Dallas Wheels gallery" fill className="object-cover rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact — Netlify form kept */}
      <section id="contact" className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>
                <label className="block">Name *<input type="text" name="name" required className="w-full border rounded px-3 py-2"/></label>
                <label className="block">Email *<input type="email" name="email" required className="w-full border rounded px-3 py-2"/></label>
                <label className="block">Message *<textarea name="message" rows={4} required className="w-full border rounded px-3 py-2"/></label>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials (kept) */}
      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Testimonials</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">
                "Dallas Wheels built the most reliable wheelset I've ever used—solid in all conditions."
              </blockquote>
              <cite className="text-blue-600 font-medium">— A. Cyclist</cite>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">
                "When my wheelchair rim cracked, DW had me rolling again in days. Pickup and delivery was a lifesaver."
              </blockquote>
              <cite className="text-blue-600 font-medium">— R. Adams</cite>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">
                "A rare blend of old-school craft and nerdy precision. Love what they're doing."
              </blockquote>
              <cite className="text-blue-600 font-medium">— B. Engineer</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 py-6 px-4 md:px-12 text-sm text-white text-center">
        Dallas Wheels © 2025 — Traditional Experience Enhanced by Modern Analytics
      </footer>
    </main>
  )
}
