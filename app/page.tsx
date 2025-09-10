'use client'

import Image from 'next/image'
import SpecialSection from './SpecialSection'
import Testimonials from "./Testimonials"



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
      className={`bg-[#003366] hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default function DallasWheelsHomepage() {
  return (
    <main className="bg-stone-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl font-semibold mb-2 text-[#003366]">Traditional Wheelbuilding. Modern Precision</h2>
        <p className="text-xl text-[#003366] font-semibold mb-4">Crafted Since 1973</p>
        <p className="max-w-3xl mx-auto mb-6 text-gray-700">
          For over 50 years, we've hand-built wheels for cyclists and wheelchair users alike.
          Combining old-world craftsmanship with cutting-edge analytics and technology.
        </p>
      </section>

    <SpecialSection />


      {/* Services */}
      <section id="services" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Custom Bicycle Wheels</h3>
            <p>Traditional wheel building techniques enhanced by advanced analytics. Each build includes detailed tension mapping report.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Wheelchair & DME</h3>
            <p>Precision wheel services for wheelchair athletes and users. Pickup/delivery via Bike Medics makes service convenient.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Analytics-Driven Builds</h3>
            <p>Advanced analytics ensures optimal spoke tension and wheel balance. Traditional building expertise for superior reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Fleet & Team Services</h3>
            <p>Professional team and fleet builds with volume pricing. Fast turnaround and expert support for bike shops and race teams.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Vintage Restoration</h3>
            <p>Classic wheel restoration with period-correct parts and traditional techniques for authentic results and modern reliability.</p>
          </CardContent></Card>
          <Card><CardContent>
            <h3 className="font-bold text-lg mb-2 text-[#003366]">Precision Repair & Truing</h3>
            <p>Expert repair and truing with full lateral, radial, and dish analysis. Includes professional-grade tension balancing.</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Fleet & Team */}
      <section id="fleet" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">Fleet & Team Service</h2>
        <p className="text-gray-700">
          Professional team and fleet services with volume pricing. Consistent builds, fast turnaround, expert support for racing teams, bike shops, and fleet operations.
        </p>
      </section>

      {/* Vintage */}
      <section id="vintage" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">Vintage Restoration</h2>
        <p className="text-gray-700">
          Classic wheel restoration and rebuilding. Period-correct components and traditional techniques preserve authenticity while ensuring modern reliability.
        </p>
      </section>

      {/* Used Bikes */}
      <section id="used" className="py-12 px-4 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">Used Bikes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-[#003366]">LeMond Prolog</h3>
            <p className="text-gray-700">Size M, blue/black, excellent condition. Lightweight carbon road bike with Shimano group set.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#003366]">LeMond Dutch</h3>
            <p className="text-gray-700">Size L, silver/gray, lightly used. Endurance geometry; ideal for long rides or collectors.</p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366]">Proud Partners & Technology</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <a href="https://berdspokes.com" target="_blank" className="text-[#003366] hover:underline">Berd</a>
          <a href="https://philwood.com" target="_blank" className="text-[#003366] hover:underline">Phil Wood</a>
          <a href="https://lemond.com" target="_blank" className="text-[#003366] hover:underline">LeMond</a>
          <a href="https://bikemedics.net" target="_blank" className="text-[#003366] hover:underline">Bike Medics</a>
          <span>Trudi</span>
        </div>
      </section>

      {/* Why Dallas Wheels */}
      <section id="why" className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#003366]">Why Choose Dallas Wheels?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Traditional Expertise</h3><p>Decades of wheel building experience starting in 1973</p></div>
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Advanced Analytics</h3><p>Enhanced by cutting-edge wheel analytics technology</p></div>
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Authorized Dealer</h3><p>Official Berd Spoke Dealer with premium options</p></div>
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Comprehensive Reports</h3><p>Detailed tension mapping and performance analysis</p></div>
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Convenient Service</h3><p>Local pickup & delivery via Bike Medics partnership</p></div>
          <div className="text-center"><h3 className="font-bold text-lg mb-2 text-[#003366]">Full Service Range</h3><p>Fleet services and vintage restoration specialists</p></div>
        </div>
      </section>

      {/* Gallery with loop */}
      <section id="gallery" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#003366] text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, i) => (
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
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#003366]">Contact Us</h2>
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

      {/* Testimonials */}

      <Testimonials />


      {/* Footer */}
      <footer className="bg-stone-800 py-6 px-4 md:px-12 text-sm text-white text-center">
        Dallas Wheels © 2025 — Traditional Experience Enhanced by Modern Analytics
      </footer>
    </main>
  )
}




