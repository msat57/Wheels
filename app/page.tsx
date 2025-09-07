import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DallasWheelsHomepage() {
  return (
    <main className="bg-white min-h-screen text-slate-800">
      <header className="bg-white shadow-sm py-6 px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Dallas Wheels Logo"
            width={80}
            height={80}
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Dallas Wheels
            </h1>
            <p className="text-lg text-slate-500 italic">
              Traditional Wheelbuilding. Modern Precision.
            </p>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Crafted Since 1973
        </h2>
        <p className="max-w-3xl mb-6 text-slate-700">
          For over 50 years, we've hand-built wheels for cyclists and wheelchair
          users alike. Combining old-world craftsmanship with cutting-edge
          analytics and technology.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-primary">Custom Bicycle Wheels</h3>
              <p>
                Built the old-fashioned way using traditional techniques, then optimized using modern tools like Trudi. Every wheel is constructed to tight tolerances with Berd spokes available as a premium option.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-primary">Wheelchair & DME</h3>
              <p>
                We specialize in precision wheel repair and upgrades for wheelchair users and athletes. Local pickup & delivery available via Bike Medics. We proudly serve those others overlook—including non-athletes who need extra convenience and care.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3">
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2 text-primary">Analytics-Driven Builds</h3>
              <p>
                We were the first in DFW to use Trudi, a revolutionary spoke tension analytics tool. Our builds are verified and tuned with data—not just feel. Trudi is used on nearly all builds, while Berd spokes are a high-performance option, not standard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Why Dallas Wheels?
        </h2>
        <ul className="list-disc list-inside text-slate-700">
          <li>Hand-built and individually inspected wheels</li>
          <li>Trudi analytics used on nearly every build</li>
          <li>Berd spokes available as a high-performance option</li>
          <li>Local pickup and delivery via Bike Medics</li>
          <li>Serving cyclists and wheelchair users alike</li>
        </ul>
      </section>

      <section className="py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Gallery</h2>
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

      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Testimonials</h2>
        <div className="space-y-4 text-slate-700">
          <p><em>"Dallas Wheels built the most reliable wheelset I've ever used—solid in all conditions."</em> — A. Cyclist</p>
          <p><em>"When my wheelchair rim cracked, DW had me rolling again in days. Pickup and delivery was a lifesaver."</em> — R. Adams</p>
          <p><em>"A rare blend of old-school craft and nerdy precision. Love what they're doing."</em> — B. Engineer</p>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:px-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h2>
        <p className="mb-4 text-slate-700">Want a consultation or custom build quote? Reach out below.</p>
        <Button>Contact Form</Button>
      </section>

      <footer className="bg-stone-100 py-6 px-4 md:px-12 text-sm text-slate-500">
        Dallas Wheels © 2025 — Crafting since 1973
      </footer>
    </main>
  );
}
