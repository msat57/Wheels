'use client'

import Image from 'next/image'

// Simple Card component
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

// Simple Button component
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
      <header className="bg-white shadow-sm py-6 px-4 md:px-12">
        <div className="flex items-center">
          <svg width="40" height="40" viewBox="0 0 100 100" className="mr-3">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#0066cc" strokeWidth="3"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="#0066cc" strokeWidth="2"/>
            <g stroke="#0066cc" strokeWidth="2">
              <line x1="50" y1="5" x2="50" y2="95"/>
              <line x1="5" y1="50" x2="95" y2="50"/>
              <line x1="14.6" y1="14.6" x2="85.4" y2="85.4"/>
              <line x1="85.4" y1="14.6" x2="14.6" y2="85.4"/>
            </g>
            <text x="50" y="58" textAnchor="middle" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#0066cc">D</text>
          </svg>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Dallas Wheels</h1>
            <p className="text-lg mt-1 text-blue-600 font-semibold">Custom Spoked Wheel Specialist</p>
            <p className="text-base text-gray-600">Traditional Experience Enhanced by Analytics Technology</p>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4">Building Precision Wheels Since 1973</h2>
          <p className="max-w-4xl mx-auto mb-6 text-gray-700 text-lg">
            Decades of traditional wheel building experience enhanced by cutting-edge wheel analytics technology. 
            From learning by feel and sound in 1973 (filing lugs, don't ask!) to applying revolutionary analytics systems today.
          </p>
        </div>

        {/* Introductory Special Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 INTRODUCTORY SPECIAL</h2>
          <p className="text-xl mb-6 text-yellow-300 font-semibold">Limited Availability - Premium German Components</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white text-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">30mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,295</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$1,400</div>
              <div className="text-red-600 font-bold text-lg">Save $895!</div>
              <p className="text-sm mt-2">Munich Composites rims, Tune hubs, Sapim spokes</p>
            </div>
            
            <div className="bg-white text-gray-800 p-6 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <h3 className="text-xl font-bold mb-2">47mm Carbon Wheelset</h3>
              <div className="text-gray-500 line-through">Regular $2,695</div>
              <div className="text-3xl font-bold text-blue-600 my-2">$1,500</div>
              <div className="text-red-600 font-bold text-lg">Save $1,195!</div>
              <p className="text-sm mt-2">Munich Composites rims, Tune hubs, Sapim spokes</p>
            </div>
          </div>
          
          <p className="text-lg mt-6">*While supplies last - First 20 customers only*</p>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-blue-600">Custom Bicycle Wheels</h3>
              <p>Traditional wheel building techniques enhanced by advanced analytics technology. Every wheel built to precise specifications with Berd spokes available as premium upgrade. Each build includes detailed tension mapping report.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-[#1E3C72]">Wheelchair & DME Services</h3>
              <p>Precision wheel services for wheelchair athletes and users. Racing performance or daily reliability - we understand both needs. Pickup & delivery via Bike Medics partnership makes service convenient.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-[#1E3C72]">Analytics-Driven Builds</h3>
              <p>Advanced wheel analytics technology ensures optimal spoke tension and wheel balance. Computer-calculated precision combined with traditional building expertise delivers superior performance and reliability.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-[#1E3C72]">Fleet & Team Services</h3>
              <p>Professional team and fleet services with volume pricing. Consistent builds, fast turnaround, expert support for racing teams, bike shops, and fleet operations. Contact for volume discounts.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-[#1E3C72]">Vintage Restoration</h3>
              <p>Classic wheel restoration and rebuilding. Period-correct components and traditional techniques preserve the authenticity of vintage bicycles while ensuring modern reliability.</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent>
              <h3 className="font-bold text-lg mb-2 text-[#1E3C72]">Precision Repair & Truing</h3>
              <p>Expert wheel repair services with comprehensive analysis. We provide detailed reporting on lateral, radial, and dish measurements with professional-grade truing and tension balancing.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
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

      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="aspect-square overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-200"
            >
              <Image
                src={`/nate-${num}.jpg`}
                alt={`Gallery Image ${num}`}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="custom-build">Custom Wheel Build</option>
                    <option value="wheelchair">Wheelchair Services</option>
                    <option value="repair">Wheel Repair/Truing</option>
                    <option value="fleet">Fleet/Team Services</option>
                    <option value="vintage">Vintage Restoration</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your wheel needs..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <footer className="bg-stone-800 py-6 px-4 md:px-12 text-sm text-white text-center">
        Dallas Wheels © 2025 — Traditional Experience Enhanced by Modern Analytics
      </footer>
    </main>
  )
}
