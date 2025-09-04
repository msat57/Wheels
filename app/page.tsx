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
function Button({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors ${className}`}>
      {children}
    </button>
  )
}

export default function DallasWheelsHomepage() {
  return (
    <main className="bg-stone-50 min-h-screen text-gray-800">
      <header className="bg-white shadow-sm py-6 px-4 md:px-12">
        <h1 className="text-4xl font-bold tracking-tight">Dallas Wheels</h1>
        <p className="text-lg mt-2 text-gray-600 italic">
          Traditional Wheelbuilding. Modern Precision.
        </p>
      </header>

      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Crafted Since 1973</h2>
        <p className="max-w-3xl mb-6 text-gray-700">
          For over 50 years, we've hand-built wheels for cyclists and wheelchair
          users alike. Combining old-world craftsmanship with cutting-edge
          analytics and technology.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Custom Bicycle Wheels</h3>
              <p>
                Built the old-fashioned way using traditional techniques, then
                optimized using modern tools like Trudi. Every wheel is constructed
                to tight tolerances with Berd spokes available as a premium option.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Wheelchair & DME</h3>
              <p>
                We specialize in precision wheel repair and upgrades for wheelchair
                users and athletes. Local pickup & delivery available via Bike
                Medics. We proudly serve those others overlook—including non-athletes
                who need extra convenience and care.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">Analytics-Driven Builds</h3>
              <p>
                We were the first in DFW to use Trudi, a revolutionary spoke tension
                analytics tool. Our builds are verified and tuned with data—not just
                feel. Trudi is used on nearly all builds, while Berd spokes are a
                high-performance option, not standard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Why Dallas Wheels?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Hand-built and individually inspected wheels</li>
          <li>Trudi analytics used on nearly every build</li>
          <li>Berd spokes available as a high-performance option</li>
          <li>Local pickup and delivery via Bike Medics</li>
          <li>Serving cyclists and wheelchair users alike</li>
        </ul>
      </section>

      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <a
              key={num}
              href={`/nate-${num}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-200"
            >
              <Image
                src={`/nate-${num}.jpg`}
                alt={`Gallery Image ${num}`}
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <em>
              "Dallas Wheels built the most reliable wheelset I've ever used—solid
              in all conditions."
            </em>{" "}
            — A. Cyclist
          </p>
          <p>
            <em>
              "When my wheelchair rim cracked, DW had me rolling again in days.
              Pickup and delivery was a lifesaver."
            </em>{" "}
            — R. Adams
          </p>
          <p>
            <em>
              "A rare blend of old-school craft and nerdy precision. Love what
              they're doing."
            </em>{" "}
            — B. Engineer
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Want a consultation or custom build quote? Reach out below.
        </p>
        <Button>Contact Form</Button>
      </section>

      <footer className="bg-stone-100 py-6 px-4 md:px-12 text-sm text-gray-500">
        Dallas Wheels © 2025 — Crafting since 1973
      </footer>
    </main>
  )
}