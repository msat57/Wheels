import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DallasWheelsHomepage() {
  return (
    <main className="bg-white min-h-screen text-gray-800">
      <header className="bg-white shadow-sm py-6 px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/dallaswheelslogo.jpg"
            alt="Dallas Wheels Logo"
            width={60}
            height={60}
            className="rounded"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-teal-700">Dallas Wheels</h1>
            <p className="text-sm text-gray-600 italic">
              Traditional Wheelbuilding. Modern Precision.
            </p>
          </div>
        </div>
        <nav className="md:block hidden">
          <ul className="flex space-x-6 text-teal-700 font-medium">
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#why">Why Us</Link></li>
            <li><Link href="#gallery">Gallery</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="services" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Crafted Since 1973</h2>
        <p className="max-w-3xl mb-6 text-gray-700">
          For over 50 years, we've hand-built wheels for cyclists and wheelchair users alike. Combining old-world craftsmanship with cutting-edge analytics and technology.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-teal-700">Custom Bicycle Wheels</h3>
              <p>Built the old-fashioned way using traditional techniques, then optimized using modern tools like Trudi. Every wheel is constructed to tight tolerances with Berd spokes available as a premium option.</p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-teal-700">Wheelchair & DME</h3>
              <p>We specialize in precision wheel repair and upgrades for wheelchair users and athletes. Local pickup & delivery available via Bike Medics. We proudly serve those others overlook—including non-athletes who need extra convenience and care.</p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-teal-700">Analytics-Driven Builds</h3>
              <p>We were the first in DFW to use Trudi, a revolutionary spoke tension analytics tool. Our builds are verified and tuned with data—not just feel. Trudi is used on nearly all builds, while Berd spokes are a high-performance option, not standard.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="why" className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Why Dallas Wheels?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Hand-built and individually inspected wheels</li>
          <li>Trudi analytics used on nearly every build</li>
          <li>Berd spokes available as a high-performance option</li>
          <li>Local pickup and delivery via Bike Medics</li>
          <li>Serving cyclists and wheelchair users alike</li>
        </ul>
      </section>

      <section id="gallery" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <a
              key={num}
              href={`/gallery/nate-${num}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded shadow-md hover:shadow-xl transition-all duration-200"
            >
              <img
                src={`/gallery/nate-${num}.jpg`}
                alt={`Gallery Image ${num}`}
                className="object-cover w-full h-full"
              />
            </a>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Testimonials</h2>
        <div className="space-y-4 text-gray-700">
          <p><em>"Dallas Wheels built the most reliable wheelset I've ever used—solid in all conditions."</em> — A. Cyclist</p>
          <p><em>"When my wheelchair rim cracked, DW had me rolling again in days. Pickup and delivery was a lifesaver."</em> — R. Adams</p>
          <p><em>"A rare blend of old-school craft and nerdy precision. Love what they're doing."</em> — B. Engineer</p>
        </div>
      </section>

      <section id="contact" className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Get in Touch</h2>
        <p className="mb-4 text-gray-700">Want a consultation or custom build quote? Reach out below.</p>
       <section id="contact" className="py-12 px-4 md:px-12">
  <h2 className="text-2xl font-semibold mb-4 text-teal-700">Get in Touch</h2>
  <p className="mb-4 text-gray-700">
    Want a consultation or custom build quote? Reach out below.
  </p>

  {/* Netlify form starts here */}
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    action="/success"
    className="mt-6 space-y-4 max-w-xl"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p className="hidden">
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </p>

    <label className="block">
      <span className="block font-medium">Your Name</span>
      <input
        type="text"
        name="name"
        required
        className="w-full border rounded px-3 py-2"
      />
    </label>

    <label className="block">
      <span className="block font-medium">Your Email</span>
      <input
        type="email"
        name="email"
        required
        className="w-full border rounded px-3 py-2"
      />
    </label>

    <label className="block">
      <span className="block font-medium">Message</span>
      <textarea
        name="message"
        rows={5}
        required
        className="w-full border rounded px-3 py-2"
      />
    </label>

    <button
      type="submit"
      className="inline-flex items-center px-4 py-2 rounded bg-black text-white"
    >
      Send
    </button>
  </form>
  {/* Netlify form ends here */}
</section>

      </section>

      <footer className="bg-teal-700 py-6 px-4 md:px-12 text-sm text-white text-center">
        Dallas Wheels © 2025 — Crafting since 1973
      </footer>
    </main>
  );
}





