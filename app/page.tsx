'use client'

import Image from 'next/image'

// Reusable components
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
  return (
    <main className="bg-stone-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 px-4 md:px-12">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold tracking-tight text-teal-700">Dallas Wheels</h1>
          <p className="ml-4 text-lg text-blue-600 font-semibold">Custom Spoked Wheel Specialist</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Traditional Wheelbuilding. Modern Precision</h2>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          For over 50 years, we’ve hand-built wheels for cyclists and wheelchair users alike. Combining old-world craft with modern analytics.
        </p>
      </section>

      {/* Introductory Special */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-12 text-center mx-4 md:mx-12">
        <h2 className="text-3xl font-bold mb-4">🎯 INTRODUCTORY SPECIAL</h2>
        <p className="text-xl mb-6 text-yellow-300 font-semibold">Limited Availability – Premium German Components</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white text-gray-800 relative">
            <CardContent>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">30mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,295</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$1,400</div>
              <p className="text-sm mt-2">Munich Composites rims, Tune hubs, Sapim spokes</p>
            </CardContent>
          </Card>
          <Card className="bg-white text-gray-800 relative">
            <CardContent>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">47mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,695</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$1,500</div>
              <p className="text-sm mt-2">Munich Composites rims, Tune hubs, Sapim spokes</p>
            </CardContent>
          </Card>
        </div>
        <p className="text-lg mt-6">*While supplies last – First 20 customers only*</p>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Custom Bicycle Wheels</h3>
            <p>Traditional wheel building techniques enhanced by advanced analytics. Each build includes detailed tension mapping report.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Wheelchair & DME</h3>
            <p>Precision wheel services for wheelchair athletes and users. Pickup/delivery via Bike Medics makes service convenient.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Analytics-Driven Builds</h3>
            <p>Advanced analytics ensures optimal spoke tension and wheel balance. Traditional building expertise for superior reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Fleet & Team Services</h3>
            <p>Professional team and fleet builds with volume pricing. Fast turnaround and expert support for bike shops and race teams.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Vintage Restoration</h3>
            <p>Classic wheel restoration with period-correct parts and traditional techniques for authentic results and modern reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-blue-600">Precision Repair & Truing</h3>
            <p>Expert repair and truing with full lateral, radial, and dish analysis. Includes professional-grade tension balancing.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Fleet & Team */}
      <section id="fleet" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Fleet & Team Service</h2>
        <p className="text-gray-700">
          Professional team and fleet services with volume pricing. Consistent builds, fast turnaround, expert support for racing teams, bike shops, and fleet operations.
        </p>
      </section>

      {/* Vintage */}
      <section id="vintage" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Vintage Restoration</h2>
        <p className="text-gray-700">
          Classic wheel restoration and rebuilding. Period-correct components and traditional techniques preserve authenticity while ensuring modern reliability.
        </p>
      </section>

      {/* Used Bikes */}
      <section id="used" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Used Bikes</h2>
        <h3 className="font-semibold text-lg text-blue-600">LeMond Prolog</h3>
        <p className="text-gray-700">Size M, blue/black, excellent condition. Lightweight carbon road bike with Shimano group set.</p>
        <h3 className="font-semibold text-lg mt-4 text-blue-600">LeMond Dutch</h3>
        <p className="text-gray-700">Size L, silver/gray, lightly used. Endurance geometry, perfect for long rides or collectors.</p>
      </section>

      {/* Partners */}
      <section id="partners" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Proud Partners & Technology</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="https://berdspokes.com" target="_blank">Berd</a>
          <a href="https://philwood.com" target="_blank">Phil Wood</a>
          <a href="https://lemond.com" target="_blank">LeMond</a>
          <a href="https://bikemedics.net" target="_blank">Bike Medics</a>
          <span>Trudi</span>
        </div>
      </section>

      {/* Why Dallas Wheels */}
      <section id="why" className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Dallas Wheels?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Traditional Expertise</h3>
            <p>Decades of wheel building experience starting in 1973</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Advanced Analytics</h3>
            <p>Enhanced by cutting-edge wheel analytics technology</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Authorized Dealer</h3>
            <p>Official Berd Spoke Dealer with premium options</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Comprehensive Reports</h3>
            <p>Detailed tension mapping and performance analysis</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Convenient Service</h3>
            <p>Local pickup & delivery via Bike Medics partnership</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2 text-blue-600">Full Service Range</h3>
            <p>Fleet services and vintage restoration specialists</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-200"
            >
              <Image
                src={`/gallery/wheel-${i + 1}.jpg`}
                alt={`Gallery Image ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" action="/success" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <label className="block">Name *<input type="text" name="name" required className="w-full border rounded px-3 py-2"/></label>
                <label className="block">Email *<input type="email" name="email" required className="w-full border rounded px-3 py-2"/></label>
                <label className="block">Message *<textarea name="message" rows={4} required className="w-full border rounded px-3 py-2"/></label>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Testimonials</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">"Dallas Wheels built the most reliable wheelset I've ever used—solid in all conditions."</blockquote>
              <cite className="text-blue-600 font-medium">— A. Cyclist</cite>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">"When my wheelchair rim cracked, DW had me rolling again in days. Pickup and delivery was a lifesaver."</blockquote>
              <cite className="text-blue-600 font-medium">— R. Adams</cite>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <blockquote className="italic text-lg mb-2">"A rare blend of old-school craft and nerdy precision. Love what they're doing."</blockquote>
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
